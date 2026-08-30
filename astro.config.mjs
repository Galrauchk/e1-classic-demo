// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://e1-classic-demo.netlify.app',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/politique-confidentialite') &&
        !page.includes('/politique-cookies'),
    }),
    robotsTxt(),
  ],
});
