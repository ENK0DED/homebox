import { globbySync } from 'globby';

const imageSizes = [320, 640, 768, 1024, 1280, 1536, 2048, 2560, 3072];
const imageFormats = ['avif', 'webp', 'png'];

const generateImagePaths = (...paths: string[]) =>
  paths.flatMap((path) => imageFormats.flatMap((imageFormat) => imageSizes.map((size) => `/_ipx/w_${size.toString()}&f_${imageFormat}/${path}`)));

const generateImagePathsFromPath = (path: string, removePath?: string) =>
  generateImagePaths(...globbySync(path, { onlyFiles: true }).map((filePath) => (removePath ? filePath.replace(removePath, '') : filePath)));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: { class: 'theme-orange dark' },
      charset: 'utf8',
      htmlAttrs: { lang: 'de', tagDuplicateStrategy: 'replace' },
      link: [
        { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
        { href: 'https://rsms.me/', rel: 'preconnect' },
        { href: 'https://rsms.me/inter/inter.css', rel: 'stylesheet' },
      ],
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  colorMode: {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    classSuffix: '',
  },

  compatibilityDate: '2024-08-31',

  css: ['@unocss/reset/tailwind.css'],

  devtools: { enabled: true },

  icon: {
    mode: 'svg',
  },

  image: { unsplash: {} },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'shadcn-nuxt',
  ],

  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:7745/api',
        ws: true,
        changeOrigin: true,
      },
    },
    prerender: {
      routes: generateImagePathsFromPath('public/img/**/*', 'public/'),
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: '',
      websocketUrl: '',
    },
  },

  ssr: false,

  telemetry: false,

  typescript: {
    includeWorkspace: true,
  },

  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js';
      }
    },
  },
});
