import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: cloudflare(),
  vite: {
    ssr: {
      noExternal: ['mysql2'] // Incluye aquí los módulos que estás usando y que causan problemas.
    }
  }
});
