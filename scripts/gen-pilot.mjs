#!/usr/bin/env node
/**
 * gen-pilot.mjs — Génère synchronement (Responses API) un lot d'articles réels
 * pour peupler la préprod immédiatement. Le gros volume passe par le Batch API.
 *
 * Usage: node scripts/gen-pilot.mjs [count]   (défaut 12, les plus récents encore "pending")
 */
import { readFile, readdir } from 'node:fs/promises';
import { buildRequestBody } from './lib/prompt.mjs';
import { parseArticle } from './lib/parse.mjs';
import { writeArticle } from './lib/write.mjs';

const DIR = new URL('../src/content/articles/', import.meta.url).pathname;
const POSTS = new URL('../data/posts.json', import.meta.url).pathname;
const COUNT = Number(process.argv[2] || 12);
const CONCURRENCY = 4;
const TODAY = new Date().toISOString();

async function callOne(post, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(buildRequestBody(post)),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(`HTTP ${res.status}: ${t.slice(0, 200)}`);
      }
      const j = await res.json();
      const p = parseArticle(j);
      if (!p.ok) throw new Error(`parse: ${p.error} (status ${p.status})`);
      return p.data;
    } catch (e) {
      if (i === tries - 1) throw e;
      await new Promise((r) => setTimeout(r, 2000 * 2 ** i));
    }
  }
}

async function main() {
  const posts = JSON.parse(await readFile(POSTS, 'utf8'));
  const bySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

  // articles encore "pending", triés du plus récent au plus ancien
  const files = (await readdir(DIR)).filter((f) => f.endsWith('.md'));
  const pending = [];
  for (const f of files) {
    const slug = f.replace(/\.md$/, '');
    const txt = await readFile(DIR + f, 'utf8');
    if (/^status:\s*pending/m.test(txt) && bySlug[slug]) pending.push(bySlug[slug]);
  }
  pending.sort((a, b) => new Date(b.date) - new Date(a.date));
  const targets = pending.slice(0, COUNT);
  console.log(`Pilot: generating ${targets.length} articles (of ${pending.length} pending)`);

  let ok = 0, err = 0;
  const queue = [...targets];
  async function worker(id) {
    while (queue.length) {
      const post = queue.shift();
      const t0 = Date.now();
      try {
        const ai = await callOne(post);
        await writeArticle(DIR, post, ai, { updated: TODAY, featured: false });
        ok++;
        console.log(`  ✓ [${ok + err}/${targets.length}] ${post.slug} (${((Date.now() - t0) / 1000).toFixed(0)}s, cat=${ai.category})`);
      } catch (e) {
        err++;
        console.log(`  ✗ ${post.slug}: ${e.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)));
  console.log(`\nPilot done. ok=${ok} err=${err}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
