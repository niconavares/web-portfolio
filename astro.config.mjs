// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output — deploys to Vercel with zero config (framework preset "Astro").
export default defineConfig({
  site: 'https://navares.vercel.app',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
