#!/usr/bin/env node
/**
 * poll-batch.mjs — Interroge l'état du batch. Quand il est "completed",
 * télécharge le fichier de sortie dans data/batch/output.jsonl.
 * Sortie : imprime l'état courant (à appeler périodiquement).
 */
import { readFile, writeFile } from 'node:fs/promises';

const STATE = new URL('../data/batch/state.json', import.meta.url).pathname;
const OUTPUT = new URL('../data/batch/output.jsonl', import.meta.url).pathname;
const ERRORS = new URL('../data/batch/errors.jsonl', import.meta.url).pathname;
const KEY = process.env.OPENAI_API_KEY;

async function getFile(id, dest) {
  const res = await fetch(`https://api.openai.com/v1/files/${id}/content`, {
    headers: { Authorization: `Bearer ${KEY}` },
  });
  if (!res.ok) throw new Error(`download ${id} failed: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  const state = JSON.parse(await readFile(STATE, 'utf8'));
  const res = await fetch(`https://api.openai.com/v1/batches/${state.batch_id}`, {
    headers: { Authorization: `Bearer ${KEY}` },
  });
  const b = await res.json();
  if (!res.ok) throw new Error('poll failed: ' + JSON.stringify(b));

  console.log(`batch ${b.id}`);
  console.log(`  status: ${b.status}`);
  console.log(`  counts: ${JSON.stringify(b.request_counts)}`);

  state.status = b.status;
  state.request_counts = b.request_counts;
  state.output_file_id = b.output_file_id;
  state.error_file_id = b.error_file_id;
  await writeFile(STATE, JSON.stringify(state, null, 2));

  if (b.status === 'completed' || (b.output_file_id && b.request_counts?.completed)) {
    if (b.output_file_id) {
      const n = await getFile(b.output_file_id, OUTPUT);
      console.log(`  downloaded output -> data/batch/output.jsonl (${(n / 1e6).toFixed(2)} MB)`);
    }
    if (b.error_file_id) {
      const n = await getFile(b.error_file_id, ERRORS);
      console.log(`  downloaded errors -> data/batch/errors.jsonl (${n} bytes)`);
    }
    console.log('-> ingest with: node scripts/ingest-batch.mjs');
  } else {
    console.log('  (not finished yet — re-run poll later)');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
