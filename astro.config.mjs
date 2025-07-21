// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    // Configuraciones específicas para Vercel
    webAnalytics: {
      enabled: true
    },
  }),
  vite: {
    plugins: [tailwindcss()],
    // Optimizaciones para serverless
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es', 'fr', 'kr'],
    routing: {
      prefixDefaultLocale: true,
    }
  },
  integrations: [react()],
});
