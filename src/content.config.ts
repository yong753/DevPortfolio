import { defineCollection } from 'astro:content';
import {glob} from 'astro/loaders';
import {z} from 'astro/zod'

const projects = defineCollection({
    loader: glob({pattern :'**/*.md', base: 'src/content/projects'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        techStack: z.array(z.string()).nonempty(),
        features: z.array(z.string()).nonempty(),
        highlights: z.array(z.string()).optional(),
        gallery: z.array(z.string()),
        githubUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        order: z.number(),
        overview: z.array(z.object({
            label: z.string(),
            value: z.string(),
        })).optional(),
        role: z.array(z.string()).optional(),
        keyFeatures: z.array(z.object({
            title: z.string(),
            description: z.string(),
            items: z.array(z.string()),
        })).optional(),
        results: z.array(z.string()).optional(),
    }),
});

export const collections = {projects};
