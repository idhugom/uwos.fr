#!/usr/bin/env node
/**
 * fetch-wp.mjs — Extract every post from the legacy WordPress site.
 * Captures: exact slug (unchanged), title, publish date, categories,
 * and the existing "featured image" source URL when one exists.
 * Output: data/posts.json  (the single source of truth for the migration)
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const BASE = 'https://www.uwos.fr/wp-json/wp/v2';
const OUT = new URL('../data/posts.json', import.meta.url).pathname;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJSON(url, tries = 5) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'uwos-migration/1.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return await res.json();
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(1000 * 2 ** i);
    }
  }
}

const strip = (s = '') =>
  s.replace(/<[^>]+>/g, '')
    .replace(/&#8217;|&#8216;|&rsquo;|&lsquo;/g, '’')
    .replace(/&#8220;|&#8221;|&laquo;|&raquo;/g, '«')
    .replace(/&#8211;|&#8212;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '…')
    .replace(/&eacute;/g, 'é').replace(/&egrave;/g, 'è').replace(/&agrave;/g, 'à')
    .replace(/&ccedil;/g, 'ç').replace(/&ecirc;/g, 'ê').replace(/&#039;|&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

async function main() {
  // 1. categories map
  const cats = await getJSON(`${BASE}/categories?per_page=100&_fields=id,name,slug`);
  const catMap = Object.fromEntries(cats.map((c) => [c.id, { name: c.name, slug: c.slug }]));

  // 2. all posts
  const first = await fetch(`${BASE}/posts?per_page=1`, { headers: { 'User-Agent': 'uwos' } });
  const totalPages = Number(first.headers.get('x-wp-totalpages') || 0);
  const total = Number(first.headers.get('x-wp-total') || 0);
  console.log(`Total posts: ${total}`);

  const perPage = 100;
  const pages = Math.ceil(total / perPage);
  let posts = [];
  for (let p = 1; p <= pages; p++) {
    const batch = await getJSON(
      `${BASE}/posts?per_page=${perPage}&page=${p}&orderby=date&order=desc` +
        `&_fields=id,slug,date,modified,title,excerpt,featured_media,categories`
    );
    posts = posts.concat(batch);
    console.log(`  posts page ${p}/${pages} -> ${posts.length}`);
    await sleep(150);
  }

  // 3. featured media source urls (batched by include=)
  const mediaIds = [...new Set(posts.map((p) => p.featured_media).filter(Boolean))];
  const mediaMap = {};
  for (let i = 0; i < mediaIds.length; i += 100) {
    const chunk = mediaIds.slice(i, i + 100);
    const media = await getJSON(
      `${BASE}/media?per_page=100&include=${chunk.join(',')}&_fields=id,source_url,alt_text,media_details`
    );
    for (const m of media) {
      // prefer the "large" or full size url
      const sizes = m.media_details?.sizes || {};
      const best =
        sizes.full?.source_url ||
        sizes.large?.source_url ||
        sizes['1536x1536']?.source_url ||
        m.source_url;
      mediaMap[m.id] = { url: best, alt: strip(m.alt_text || '') };
    }
    console.log(`  media ${Math.min(i + 100, mediaIds.length)}/${mediaIds.length}`);
    await sleep(150);
  }

  const out = posts.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: strip(p.title?.rendered || ''),
    excerpt: strip(p.excerpt?.rendered || ''),
    date: p.date,
    modified: p.modified,
    categories: (p.categories || []).map((id) => catMap[id]?.slug).filter(Boolean),
    image: p.featured_media ? mediaMap[p.featured_media]?.url || null : null,
    imageAlt: p.featured_media ? mediaMap[p.featured_media]?.alt || '' : '',
  }));

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(out, null, 2));
  const withImg = out.filter((p) => p.image).length;
  console.log(`\nWrote ${out.length} posts -> data/posts.json (${withImg} with images, ${out.length - withImg} without)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
