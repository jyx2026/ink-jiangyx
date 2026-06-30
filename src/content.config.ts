// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 引入最新的 loader 工具

const blog = defineCollection({
  // 明确告诉 Astro 从 src/content/blog 目录下抓取所有的 .md 文件
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  // 明确告诉 Astro 从 src/content/projects 目录下抓取所有的 .md 文件
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };