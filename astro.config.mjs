// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://transmitt0r.github.io',
  base: '/theater',

  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});
