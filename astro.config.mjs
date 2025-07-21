// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    edgeMiddleware: false, // Desactivar edge middleware si causa problemas
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["@astrojs/react"], // Externalizar dependencias problemáticas
    },
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