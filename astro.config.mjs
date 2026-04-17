// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.primeclean.cz',

  // Generuje trailing slash konzistentně — /kontakt/ nebo /kontakt (nikdy obojí)
  trailingSlash: 'never',

  // Lepší build output — soubory s hash v názvu pro cache busting
  build: {
    assets: '_assets',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Rozdělí Lucide do vlastního chunku — neopakuje se na každé stránce
      rollupOptions: {
        output: {
          manualChunks: {
            lucide: ['lucide'],
          },
        },
      },
    },
  },
});