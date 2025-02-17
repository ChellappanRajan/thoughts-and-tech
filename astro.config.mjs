// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://chellappanrajan.github.io/',
  base: 'thoughts-and-tech',
  integrations: [tailwind()]
});