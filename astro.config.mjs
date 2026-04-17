// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.primeclean.cz',
  trailingSlash: 'never',

  build: {
    assets: '_assets',
  },

  vite: {
    plugins: [tailwindcss()],
    // rollupOptions sem nepatří — Lucide je CDN, ne npm balíček
  },
});