import { getCollection } from 'astro:content';
import { categoryOf } from '../lib/taxonomy.js';

export async function GET() {
  const all = (await getCollection('articles')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const index = all.map((e) => ({
    t: e.data.title,
    s: e.id,
    c: categoryOf(e.data.category).label,
    cs: e.data.category,
    x: (e.data.excerpt || '').slice(0, 110),
    i: e.data.image,
    d: e.data.date.toISOString().slice(0, 10),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=3600' },
  });
}
