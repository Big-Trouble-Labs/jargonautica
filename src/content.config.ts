import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const terms = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!AI Terminology Index.md'], base: './content/ai' }),
  schema: z.object({
    title: z.string(),
    aliases: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    section: z.string(),
    summary: z.string(),
    suggested_by: z.string().optional(),
    suggested_by_url: z.string().url().optional(),
  }),
});

export const collections = { terms };
