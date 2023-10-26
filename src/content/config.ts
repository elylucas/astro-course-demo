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

export const collections = {
  posts: postsCollection,
};
