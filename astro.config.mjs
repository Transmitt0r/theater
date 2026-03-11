// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const rawBase = process.env.BASE_PATH ?? '/theater/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

// https://astro.build/config
export default defineConfig({
  site: 'https://transmitt0r.github.io',
  base,

  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});
