import { defineCollection, z } from 'astro:content';
import { format } from 'date-fns';

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      categories: z.array(z.string()),
      date: z
        .string()
        .transform((str) => format(new Date(str), 'MMMM dd, yyyy')),
      description: z.string(),
      featured: z.boolean().default(false),
      image: image(),
    }),
});

const authorsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
    }),
});

export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
};
