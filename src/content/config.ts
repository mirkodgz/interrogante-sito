import { defineCollection, z } from 'astro:content';

const festivalCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        edition: z.string().optional(),
        date: z.any().optional(), // Más flexible con las fechas
        cover: z.string().optional(),
        location: z.string().optional(),
        description: z.string().optional(),
        videoUrl: z.string().optional(),
        press: z.array(z.any()).optional(),
        quote: z.string().optional(),
        gallery: z.array(z.string()).optional()
    })
});

const creacionesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        cover: z.string().optional(),
        videoUrl: z.string().optional(),
        additionalVideos: z.array(z.string()).optional(),
        quote: z.string().optional(),
        quoteAuthor: z.string().optional(),
        gallery: z.array(z.string()).optional(),
        // For rich text fields other than the body, we might receive them as JSON objects or strings depending on configuration.
        // Allowing any for now to avoid validation errors if Keystatic saves objects.
        details: z.any().optional(),
    })
});

const performanceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.any().optional(),
        cover: z.string().optional(),
        venue: z.string().optional(),
        description: z.string().optional(),
        videoUrl: z.string().optional(),
        fullVideoUrl: z.string().optional(),
        details: z.string().optional(),
        gallery: z.array(z.string()).optional(),
    })
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.any().optional(),
        cover: z.string().optional(),
        summary: z.string().optional(),
        author: z.string().optional(),
    })
});

const teamCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        cover: z.string(),
        profileImage: z.string().optional(),
        facebook: z.string().optional(),
        instagram: z.string().optional(),
        linkedin: z.string().optional(),
    })
});

const pagesCollection = defineCollection({
    type: 'data',
    schema: z.any()
});

export const collections = {
    'festival': festivalCollection,
    'creaciones': creacionesCollection,
    'performance': performanceCollection,
    'blog': blogCollection,
    'team': teamCollection,
    'pages': pagesCollection,
};
