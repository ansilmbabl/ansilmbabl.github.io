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
    organization: z.string(),
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
    draft: z.boolean().default(false),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/education' }),
  schema: z.object({
    period: z.string(),
    qualification: z.string(),
    institution: z.string(),
    detail: z.string().optional(),
    order: z.number(),
    current: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'exploring', 'paused', 'shipped']).default('exploring'),
    type: z.string().default('Personal project'),
    started: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    technologies: z.array(z.string()).default([]),
  }),
});

const playground = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/playground' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kind: z.string(),
    status: z.enum(['planned', 'building', 'live']).default('planned'),
    href: z.string().optional(),
    demoPath: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const catchups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/catchups' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    headline: z.string(),
    location: z.string(),
    availability: z.string(),
    interests: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, work, career, education, projects, playground, catchups, profile };
