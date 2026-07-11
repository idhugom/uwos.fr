import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site.js';

export async function GET(context) {
  const all = (await getCollection('articles'))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, 60);
  return rss({
    title: `${SITE.name} — Le fil`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    stylesheet: false,
    items: all.map((e) => ({
      title: e.data.title,
      pubDate: e.data.date,
      description: e.data.excerpt || e.data.description,
      link: `/${e.id}/`,
      categories: [e.data.category],
    })),
    customData: `<language>fr-FR</language>`,
  });
}
