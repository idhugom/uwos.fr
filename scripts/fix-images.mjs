#!/usr/bin/env node
/**
 * fix-images.mjs — Normalise le champ `image:` de tous les articles pour pointer
 * vers la version locale optimisée (/img/featured/<slug>) si elle existe, sinon null.
 * Corrige notamment les articles où une URL WordPress distante avait été écrite.
 */
import { readFile, writeFile, readdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';

const DIR = new URL('../src/content/articles/', import.meta.url).pathname;
const IMGDIR = new URL('../public/img/featured/', import.meta.url).pathname;
const exists = (p) => access(p, constants.F_OK).then(() => true).catch(() => false);

async function main() {
  const files = (await readdir(DIR)).filter((f) => f.endsWith('.md'));
  let fixed = 0;
  for (const f of files) {
    const slug = f.replace(/\.md$/, '');
    const path = DIR + f;
    let txt = await readFile(path, 'utf8');
    const hasLocal = await exists(`${IMGDIR}${slug}-1200.webp`);
    const want = hasLocal ? `image: "/img/featured/${slug}"` : `image: null`;
    const next = txt.replace(/^image:.*$/m, want);
    if (next !== txt) { await writeFile(path, next); fixed++; }
  }
  console.log(`fix-images: normalized ${fixed} files.`);
}
main().catch((e) => { console.error(e); process.exit(1); });
