// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// Assistants IA nommés : mêmes règles que le groupe *.
const ROBOTS_IA = [
  'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'CCBot',
  'Bingbot', 'meta-externalagent', 'Meta-ExternalFetcher',
  'MistralAI-User', 'DuckAssistBot', 'Amazonbot',
];

export default defineConfig({
  site: 'https://e1-classic-demo.netlify.app',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/politique-confidentialite') &&
        !page.includes('/politique-cookies'),
    }),
    robotsTxt({
      policy: [
        { userAgent: '*', allow: '/' },
        ...ROBOTS_IA.map((userAgent) => ({ userAgent, allow: '/' })),
      ],
    }),
  ],
});
