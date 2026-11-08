// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://xn--fiq18monwfu6b.love',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
