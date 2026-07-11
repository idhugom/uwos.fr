#!/usr/bin/env node
/**
 * ingest-batch.mjs — Lit data/batch/output.jsonl (réponses du Batch API) et écrit
 * chaque article en Markdown "published", en conservant slug / image / date d'origine.
 */
import { readFile, readdir } from 'node:fs/promises';
import { parseArticle } from './lib/parse.mjs';
import { writeArticle } from './lib/write.mjs';

const DIR = new URL('../src/content/articles/', import.meta.url).pathname;
const POSTS = new URL('../data/posts.json', import.meta.url).pathname;
const OUTPUT = new URL('../data/batch/output.jsonl', import.meta.url).pathname;
const TODAY = new Date().toISOString();

async function main() {
  const posts = JSON.parse(await readFile(POSTS, 'utf8'));
  const bySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

  const raw = await readFile(OUTPUT, 'utf8');
  const lines = raw.split('\n').filter((l) => l.trim());
  console.log(`Ingesting ${lines.length} responses ...`);

  let ok = 0, err = 0, skip = 0;
  const errors = [];
  for (const line of lines) {
    let entry;
    try { entry = JSON.parse(line); } catch { err++; continue; }
    const slug = entry.custom_id;
    const post = bySlug[slug];
    if (!post) { skip++; continue; }
    const resp = entry.response?.body;
    if (entry.error || !resp || entry.response?.status_code >= 400) {
      err++; errors.push(`${slug}: ${JSON.stringify(entry.error || entry.response?.status_code)}`);
      continue;
    }
    const p = parseArticle(resp);
    if (!p.ok) { err++; errors.push(`${slug}: ${p.error}`); continue; }
    try {
      await writeArticle(DIR, post, p.data, { updated: TODAY });
      ok++;
    } catch (e) { err++; errors.push(`${slug}: write ${e.message}`); }
  }
  console.log(`\nIngest done. ok=${ok} err=${err} skip=${skip}`);
  if (errors.length) console.log('First errors:\n' + errors.slice(0, 20).join('\n'));

  // rapport de couverture
  const files = (await readdir(DIR)).filter((f) => f.endsWith('.md'));
  let pub = 0, pend = 0;
  for (const f of files) {
    const txt = await readFile(DIR + f, 'utf8');
    if (/^status:\s*published/m.test(txt)) pub++; else pend++;
  }
  console.log(`Coverage: published=${pub} pending=${pend} total=${files.length}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
