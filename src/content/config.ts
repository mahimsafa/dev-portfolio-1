import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  })
});


export const collections = {
  'blog': blogCollection,
};