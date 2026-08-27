import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.usmandevhub.top',
  integrations: [
    sitemap({
      namespaces: { news: false, video: false, xhtml: false },
      filter: (page) => !page.endsWith('/thank-you/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
