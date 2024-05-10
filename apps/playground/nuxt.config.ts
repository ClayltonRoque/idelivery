import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  srcDir: 'src',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  ui: {
    icons: ['ri', 'mdi'],
  },
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  colorMode: {
    preference: 'light',
  },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/tailwindcss'],
  typescript: {
    tsConfig: {
      compilerOptions: { baseUrl: '.' },
    },
    typeCheck: true,
  },
  imports: {
    autoImport: true,
  },
  alias: {
    '@idelivery/components': '../../libs/components/src/index.ts',
    '@idelivery/config': '../../libs/config/src/index.ts',
  },
  css: ['~/assets/css/styles.css'],

  vite: {
    plugins: [nxViteTsPaths()],
  },
});
