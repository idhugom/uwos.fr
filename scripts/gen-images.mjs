#!/usr/bin/env node
/**
 * gen-images.mjs — Génère une image « ultra réaliste » (gpt-image-2) pour chaque
 * article dépourvu d'image à la une, et l'enregistre en webp responsive (1200 + 600).
 *   { model: gpt-image-2, size: 1536x1024, quality: medium }
 */
import { readFile, mkdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import sharp from 'sharp';

const POSTS = new URL('../data/posts.json', import.meta.url).pathname;
const OUTDIR = new URL('../public/img/featured/', import.meta.url).pathname;
const KEY = process.env.OPENAI_API_KEY;
const exists = (p) => access(p, constants.F_OK).then(() => true).catch(() => false);

function prompt(title) {
  return `Photographie éditoriale ultra réaliste, haute qualité, illustrant le sujet : « ${title} ». ` +
    `Lumière naturelle douce, profondeur de champ soignée, composition magazine, couleurs riches et crédibles, ` +
    `rendu photoréaliste professionnel. Aucune inscription, aucun texte, aucun logo, aucun filigrane.`;
}

async function genImage(title) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'gpt-image-2', prompt: prompt(title), size: '1536x1024', quality: 'medium', n: 1 }),
  });
  const j = await res.json();
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(j).slice(0, 300)}`);
  const b64 = j.data?.[0]?.b64_json;
  if (!b64) throw new Error('no b64_json in response');
  return Buffer.from(b64, 'base64');
}

async function saveWebp(buf, slug) {
  const base = sharp(buf).rotate();
  await base.clone().resize(1200, 800, { fit: 'cover' }).webp({ quality: 78, effort: 5 }).toFile(`${OUTDIR}${slug}-1200.webp`);
  await base.clone().resize(600, 400, { fit: 'cover' }).webp({ quality: 74, effort: 5 }).toFile(`${OUTDIR}${slug}-600.webp`);
}

async function main() {
  await mkdir(OUTDIR, { recursive: true });
  const posts = JSON.parse(await readFile(POSTS, 'utf8'));
  const missing = posts.filter((p) => !p.image);
  const only = process.argv[2]; // slug unique optionnel (test)
  const targets = only ? missing.filter((p) => p.slug === only) : missing;
  console.log(`Generating ${targets.length} images (gpt-image-2)`);
  for (const post of targets) {
    if (await exists(`${OUTDIR}${post.slug}-1200.webp`)) { console.log('  skip (exists):', post.slug); continue; }
    const t0 = Date.now();
    try {
      const buf = await genImage(post.title);
      await saveWebp(buf, post.slug);
      console.log(`  ✓ ${post.slug} (${((Date.now() - t0) / 1000).toFixed(0)}s)`);
    } catch (e) {
      console.log(`  ✗ ${post.slug}: ${e.message}`);
    }
  }
  console.log('Done.');
}

main().catch((e) => { console.error(e); process.exit(1); });
