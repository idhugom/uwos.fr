#!/usr/bin/env node
/**
 * seed-content.mjs — Crée un fichier Markdown par article (src/content/articles/<slug>.md)
 * avec toutes les métadonnées réelles (titre, slug identique, image, date) et un
 * état `status: pending`. Le corps sera réécrit par l'IA (batch gpt-5.6-terra).
 * N'écrase JAMAIS un article déjà `status: published` (contenu IA).
 */
import { readFile, writeFile, mkdir, readdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { classify } from '../src/lib/taxonomy.js';

const POSTS = new URL('../data/posts.json', import.meta.url).pathname;
const DIR = new URL('../src/content/articles/', import.meta.url).pathname;
const IMGDIR = new URL('../public/img/featured/', import.meta.url).pathname;

const exists = (p) => access(p, constants.F_OK).then(() => true).catch(() => false);
const yaml = (v) => JSON.stringify(v ?? '');

function frontmatter(post, hasImg) {
  const category = classify(post.title, post.excerpt);
  const lines = [
    '---',
    `title: ${yaml(post.title)}`,
    `description: ${yaml('')}`,
    `excerpt: ${yaml(post.excerpt.slice(0, 240))}`,
    `date: ${yaml(post.date)}`,
    `category: ${category}`,
    `tags: []`,
    `image: ${hasImg ? yaml('/img/featured/' + post.slug) : 'null'}`,
    `imageAlt: ${yaml(post.imageAlt || post.title)}`,
    `author: "La rédaction UWOS"`,
    `status: pending`,
    `featured: false`,
    'keyTakeaways: []',
    'faq: []',
    '---',
    '',
  ];
  return lines.join('\n');
}

async function main() {
  await mkdir(DIR, { recursive: true });
  const posts = JSON.parse(await readFile(POSTS, 'utf8'));

  // slugs déjà publiés (contenu IA) -> ne pas toucher
  const existingFiles = (await readdir(DIR).catch(() => [])).filter((f) => f.endsWith('.md'));
  let published = new Set();
  for (const f of existingFiles) {
    const txt = await readFile(DIR + f, 'utf8');
    if (/^status:\s*published/m.test(txt)) published.add(f.replace(/\.md$/, ''));
  }

  let created = 0, kept = 0;
  for (const post of posts) {
    if (published.has(post.slug)) { kept++; continue; }
    const hasImg = await exists(`${IMGDIR}${post.slug}-1200.webp`);
    await writeFile(`${DIR}${post.slug}.md`, frontmatter(post, hasImg));
    created++;
  }
  console.log(`Seed done. created/updated(pending)=${created}  kept(published)=${kept}  total=${posts.length}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
