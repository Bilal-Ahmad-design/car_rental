import { resolve } from 'path';

export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      },
    ],
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    '~/assets/main.scss',
  ],
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Inter: [400, 700, 900],
    },
    
    display: 'swap',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
