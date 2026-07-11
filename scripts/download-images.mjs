#!/usr/bin/env node
/**
 * download-images.mjs — Télécharge chaque image à la une existante et la
 * ré-encode en WebP responsive (1200w + 600w) dans public/img/featured/.
 * Idempotent : ignore ce qui est déjà présent.
 */
import { readFile, mkdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import sharp from 'sharp';

const POSTS = new URL('../data/posts.json', import.meta.url).pathname;
const OUTDIR = new URL('../public/img/featured/', import.meta.url).pathname;
const CONCURRENCY = 6;

const exists = (p) => access(p, constants.F_OK).then(() => true).catch(() => false);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchBuf(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'uwos-migration/1.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(800 * 2 ** i);
    }
  }
}

async function processOne(post) {
  if (!post.image) return { slug: post.slug, skipped: 'no-image' };
  const big = `${OUTDIR}${post.slug}-1200.webp`;
  const small = `${OUTDIR}${post.slug}-600.webp`;
  if ((await exists(big)) && (await exists(small))) return { slug: post.slug, skipped: 'exists' };
  try {
    const buf = await fetchBuf(post.image);
    const base = sharp(buf, { failOn: 'none' }).rotate();
    await base
      .clone()
      .resize({ width: 1200, height: 800, fit: 'cover', position: 'attention', withoutEnlargement: false })
      .webp({ quality: 76, effort: 5 })
      .toFile(big);
    await base
      .clone()
      .resize({ width: 600, height: 400, fit: 'cover', position: 'attention', withoutEnlargement: false })
      .webp({ quality: 72, effort: 5 })
      .toFile(small);
    return { slug: post.slug, ok: true };
  } catch (e) {
    return { slug: post.slug, error: e.message };
  }
}

async function main() {
  await mkdir(OUTDIR, { recursive: true });
  const posts = JSON.parse(await readFile(POSTS, 'utf8'));
  let i = 0, ok = 0, skip = 0, err = 0;
  const errors = [];
  const queue = [...posts];
  async function worker() {
    while (queue.length) {
      const post = queue.shift();
      const r = await processOne(post);
      i++;
      if (r.ok) ok++;
      else if (r.skipped) skip++;
      else if (r.error) { err++; errors.push(`${r.slug}: ${r.error}`); }
      if (i % 50 === 0) console.log(`  ${i}/${posts.length}  ok=${ok} skip=${skip} err=${err}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`\nDone. ok=${ok} skip=${skip} err=${err}`);
  if (errors.length) console.log('Errors:\n' + errors.slice(0, 30).join('\n'));
}

main().catch((e) => { console.error(e); process.exit(1); });
