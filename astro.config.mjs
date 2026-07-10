// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output — deploys to Vercel with zero config (framework preset "Astro").
export default defineConfig({
  // URL de producción en Vercel (scope n0v4r3k). Cámbiala si pones dominio propio.
  site: 'https://web-portfolio-n0v4r3k.vercel.app',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
