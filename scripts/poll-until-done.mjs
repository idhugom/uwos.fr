#!/usr/bin/env node
/**
 * poll-until-done.mjs — Interroge le batch en boucle jusqu'à son achèvement,
 * télécharge output.jsonl (+ errors) puis se termine. Conçu pour tourner en
 * arrière-plan : sa fin déclenche l'étape d'ingestion.
 */
import { readFile, writeFile } from 'node:fs/promises';

const STATE = new URL('../data/batch/state.json', import.meta.url).pathname;
const OUTPUT = new URL('../data/batch/output.jsonl', import.meta.url).pathname;
const ERRORS = new URL('../data/batch/errors.jsonl', import.meta.url).pathname;
const KEY = process.env.OPENAI_API_KEY;
const INTERVAL = 120_000;
const MAX = 720; // 24h max

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getFile(id, dest) {
  const res = await fetch(`https://api.openai.com/v1/files/${id}/content`, { headers: { Authorization: `Bearer ${KEY}` } });
  if (!res.ok) throw new Error(`download ${id}: ${res.status}`);
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  const state = JSON.parse(await readFile(STATE, 'utf8'));
  const TERMINAL = new Set(['completed', 'failed', 'expired', 'cancelled']);
  for (let i = 0; i < MAX; i++) {
    let b;
    try {
      const res = await fetch(`https://api.openai.com/v1/batches/${state.batch_id}`, { headers: { Authorization: `Bearer ${KEY}` } });
      b = await res.json();
    } catch (e) {
      console.log(`[${i}] poll error: ${e.message}`); await sleep(INTERVAL); continue;
    }
    const c = b.request_counts || {};
    console.log(`[${new Date().toISOString()}] ${b.status} — ${c.completed || 0}/${c.total || 0} (failed ${c.failed || 0})`);
    if (TERMINAL.has(b.status)) {
      state.status = b.status; state.request_counts = c;
      state.output_file_id = b.output_file_id; state.error_file_id = b.error_file_id;
      await writeFile(STATE, JSON.stringify(state, null, 2));
      if (b.output_file_id) { await getFile(b.output_file_id, OUTPUT); console.log('downloaded output.jsonl'); }
      if (b.error_file_id) { await getFile(b.error_file_id, ERRORS); console.log('downloaded errors.jsonl'); }
      console.log(`BATCH_DONE status=${b.status}`);
      return;
    }
    await sleep(INTERVAL);
  }
  console.log('BATCH_TIMEOUT');
}
main().catch((e) => { console.error(e); process.exit(1); });
