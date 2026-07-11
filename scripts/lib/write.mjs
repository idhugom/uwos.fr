/**
 * Écrit un article généré (données IA + métadonnées d'origine) en fichier Markdown
 * avec frontmatter YAML valide. Préserve slug et date d'origine, et pointe l'image
 * vers la version LOCALE optimisée (/img/featured/<slug>) si elle existe.
 */
import { writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';

const IMGDIR = new URL('../../public/img/featured/', import.meta.url).pathname;
const exists = (p) => access(p, constants.F_OK).then(() => true).catch(() => false);

const q = (v) => JSON.stringify(v ?? '');
const readingTime = (t = '') => Math.max(1, Math.round((t.match(/\S+/g) || []).length / 200));

/** Chemin image local si le webp optimisé existe, sinon null. */
export async function localImage(slug) {
  return (await exists(`${IMGDIR}${slug}-1200.webp`)) ? `/img/featured/${slug}` : null;
}

export function buildMarkdown(post, ai, opts = {}) {
  const updated = opts.updated || null;
  const image = opts.image ?? null;
  const lines = [
    '---',
    `title: ${q(post.title)}`,
    `description: ${q((ai.meta_description || '').slice(0, 165))}`,
    `excerpt: ${q(ai.excerpt || '')}`,
    `date: ${q(post.date)}`,
    ...(updated ? [`updated: ${q(updated)}`] : []),
    `category: ${ai.category}`,
    `tags: [${(ai.tags || []).map((t) => q(t)).join(', ')}]`,
    `image: ${image ? q(image) : 'null'}`,
    `imageAlt: ${q(post.imageAlt || post.title)}`,
    `author: "La rédaction UWOS"`,
    `readingTime: ${readingTime(ai.body_markdown)}`,
    `status: published`,
    `featured: ${opts.featured ? 'true' : 'false'}`,
    'keyTakeaways:',
    ...(ai.key_takeaways || []).map((k) => `  - ${q(k)}`),
    'faq:',
    ...(ai.faq || []).flatMap((f) => [`  - q: ${q(f.q)}`, `    a: ${q(f.a)}`]),
    '---',
    '',
    (ai.body_markdown || '').trim(),
    '',
  ];
  return lines.join('\n');
}

export async function writeArticle(dir, post, ai, opts = {}) {
  const image = opts.image !== undefined ? opts.image : await localImage(post.slug);
  const md = buildMarkdown(post, ai, { ...opts, image });
  await writeFile(`${dir}${post.slug}.md`, md, 'utf8');
  return md.length;
}
