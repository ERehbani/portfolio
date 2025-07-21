// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  
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