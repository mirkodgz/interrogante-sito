// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://interrogantespettacolo.com',
  output: 'server',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});