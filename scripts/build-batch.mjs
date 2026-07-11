#!/usr/bin/env node
/**
 * build-batch.mjs — Construit le fichier JSONL pour l'OpenAI Batch API.
 * Une ligne par article encore "pending" : POST /v1/responses (gpt-5.6-terra).
 *
 * Usage:
 *   node scripts/build-batch.mjs            # tous les articles "pending"
 *   node scripts/build-batch.mjs --limit 2  # petit lot de test
 *   node scripts/build-batch.mjs --all      # tous les articles (même publiés)
 */
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { buildRequestBody } from './lib/prompt.mjs';

const DIR = new URL('../src/content/articles/', import.meta.url).pathname;
const POSTS = new URL('../data/posts.json', import.meta.url).pathname;
const OUT = new URL('../data/batch/requests.jsonl', import.meta.url).pathname;

const args = process.argv.slice(2);
const limit = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity;
const all = args.includes('--all');

async function main() {
  await mkdir(new URL('../data/batch/', import.meta.url).pathname, { recursive: true });
  const posts = JSON.parse(await readFile(POSTS, 'utf8'));
  const bySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

  const files = (await readdir(DIR)).filter((f) => f.endsWith('.md'));
  const selected = [];
  for (const f of files) {
    const slug = f.replace(/\.md$/, '');
    if (!bySlug[slug]) continue;
    if (!all) {
      const txt = await readFile(DIR + f, 'utf8');
      if (!/^status:\s*pending/m.test(txt)) continue;
    }
    selected.push(bySlug[slug]);
  }
  selected.sort((a, b) => new Date(b.date) - new Date(a.date));
  const targets = selected.slice(0, limit);

  const lines = targets.map((post) =>
    JSON.stringify({
      custom_id: post.slug,
      method: 'POST',
      url: '/v1/responses',
      body: buildRequestBody(post),
    })
  );
  await writeFile(OUT, lines.join('\n') + '\n', 'utf8');
  const bytes = Buffer.byteLength(lines.join('\n'));
  console.log(`Wrote ${targets.length} requests -> data/batch/requests.jsonl (${(bytes / 1e6).toFixed(2)} MB)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
