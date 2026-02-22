import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["animes", "games", "filmes"]),
    image: z.string(),
  }),
});

export const collections = {
  posts,
};