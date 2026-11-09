import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number(),
    confidential: z.boolean().default(false),
    featured: z.boolean().default(false),
    technologies: z.array(z.string()).default([]),
  }),
});

const career = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/career' }),
  schema: z.object({
    period: z.string(),
    title: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    order: z.number(),
    current: z.boolean().default(false),
  }),
});

export const collections = { writing, work, career };
