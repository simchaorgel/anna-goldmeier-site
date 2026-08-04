// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // feeds canonical, OG, JSON-LD and sitemap URLs
  site: 'https://annagoldmeierart.co.uk',

  integrations: [sitemap()],
});