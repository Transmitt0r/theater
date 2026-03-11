// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://transmitt0r.github.io',
  base,

  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});
