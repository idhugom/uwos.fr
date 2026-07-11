import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection "articles" — un fichier Markdown par article, nommé <slug>.md
 * (l'id de l'entrée = le slug, strictement identique à l'ancienne URL WordPress).
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // description SEO / meta
    description: z.string().default(''),
    excerpt: z.string().default(''),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string().default('actualites'),
    tags: z.array(z.string()).default([]),
    image: z.string().nullable().default(null),
    imageAlt: z.string().default(''),
    author: z.string().default('La rédaction UWOS'),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['pending', 'published']).default('pending'),
    keyTakeaways: z.array(z.string()).default([]),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

export const collections = { articles };
