#!/usr/bin/env node
/**
 * submit-batch.mjs — Envoie requests.jsonl à l'OpenAI Files API puis crée le batch
 * sur l'endpoint /v1/responses (fenêtre 24h). Sauvegarde l'état dans state.json.
 */
import { readFile, writeFile } from 'node:fs/promises';

const REQ = new URL('../data/batch/requests.jsonl', import.meta.url).pathname;
const STATE = new URL('../data/batch/state.json', import.meta.url).pathname;
const KEY = process.env.OPENAI_API_KEY;

async function main() {
  const jsonl = await readFile(REQ);
  console.log(`Uploading ${(jsonl.length / 1e6).toFixed(2)} MB ...`);

  // 1) upload du fichier (multipart)
  const form = new FormData();
  form.append('purpose', 'batch');
  form.append('file', new Blob([jsonl], { type: 'application/jsonl' }), 'requests.jsonl');
  const upRes = await fetch('https://api.openai.com/v1/files', {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}` },
    body: form,
  });
  const upJson = await upRes.json();
  if (!upRes.ok) throw new Error('upload failed: ' + JSON.stringify(upJson));
  console.log('Uploaded file:', upJson.id);

  // 2) création du batch
  const bRes = await fetch('https://api.openai.com/v1/batches', {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      input_file_id: upJson.id,
      endpoint: '/v1/responses',
      completion_window: '24h',
      metadata: { project: 'uwos', purpose: 'article-regeneration' },
    }),
  });
  const bJson = await bRes.json();
  if (!bRes.ok) throw new Error('batch create failed: ' + JSON.stringify(bJson));

  const state = {
    batch_id: bJson.id,
    input_file_id: upJson.id,
    status: bJson.status,
    created_at: bJson.created_at,
    request_counts: bJson.request_counts,
  };
  await writeFile(STATE, JSON.stringify(state, null, 2));
  console.log('Batch created:', bJson.id, 'status:', bJson.status);
  console.log('-> poll with: node scripts/poll-batch.mjs');
}

main().catch((e) => { console.error(e); process.exit(1); });
