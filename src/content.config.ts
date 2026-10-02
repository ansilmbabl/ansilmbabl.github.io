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
    demo: z.string().optional(),
    immersive: z.boolean().default(false),
    order: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const architectureComponents = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/architecture/components' }),
  schema: z.object({
    title: z.string(),
    layer: z.string(),
    category: z.string(),
    description: z.string(),
    solves: z.string(),
    risks: z.string(),
    tradeoff: z.string(),
    questions: z.array(z.string()).default([]),
    inputs: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([]),
    recommendedConnections: z.array(z.string()).default([]),
    warningConnections: z.array(z.string()).default([]),
    order: z.number(),
    visibility: z.enum(['core', 'production', 'future']).default('core'),
  }),
});

const architecturePresets = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/architecture/presets' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    components: z.array(z.string()),
    connections: z.array(z.object({ from: z.string(), to: z.string(), kind: z.enum(['recommended', 'warning', 'neutral']).default('recommended') })).default([]),
    lesson: z.array(z.object({
      id: z.string(),
      title: z.string(),
      copy: z.string(),
      requires: z.array(z.string()).default([]),
      requiresConnection: z.object({ from: z.string(), to: z.string() }).optional(),
    })).default([]),
    order: z.number(),
  }),
});

const architectureApps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/architecture/apps' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    useCase: z.string(),
    order: z.number(),
    nodes: z.array(z.object({ id: z.string(), component: z.string(), x: z.number(), y: z.number(), label: z.string().optional() })),
    connections: z.array(z.object({ from: z.string(), to: z.string(), label: z.string().optional() })).default([]),
  }),
});

const architectureLessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/architecture/lessons' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    why: z.string(),
    without: z.string(),
    role: z.string(),
    tradeoff: z.string(),
    question: z.string(),
    order: z.number(),
    showDiagram: z.boolean().default(true),
    replaces: z.array(z.string()).default([]),
    removesConnections: z.array(z.object({ from: z.string(), to: z.string() })).default([]),
    nodes: z.array(z.object({ id: z.string(), label: z.string(), detail: z.string(), kind: z.string(), x: z.number(), y: z.number(), merge: z.array(z.string()).default([]), dotted: z.boolean().default(false) })).default([]),
    connections: z.array(z.object({ from: z.string(), to: z.string(), label: z.string().optional() })).default([]),
    highlight: z.array(z.string()).default([]),
    legend: z.string().optional(),
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

export const collections = { writing, work, career, education, projects, playground, architectureComponents, architecturePresets, architectureApps, architectureLessons, catchups, profile };
