// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless"

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({}),
  vite: {
      plugins: [tailwindcss()],
    },
    i18n: {
      defaultLocale: 'es',
      locales: ['en', 'es', 'fr', 'kr'],
      routing: {
        prefixDefaultLocale: true
      }
    },

  integrations: [react()],
});