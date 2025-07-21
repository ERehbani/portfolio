// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// import vercel from "@astrojs/vercel/serverless" // Comentado para modo estático

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static', // Cambiar a estático
  // adapter: vercel({}), // Comentado para modo estático
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