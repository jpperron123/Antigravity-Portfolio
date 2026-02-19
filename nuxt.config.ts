// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
      'JetBrains Mono': [400, 500, 600],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Jean-Philippe Perron — Full-Stack Developer & AI Specialist',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portfolio of Jean-Philippe Perron — Bilingual Full-Stack Web Developer & AI Automation Specialist based in Jonquière, Canada. Vue 3, Nuxt 3, React, Laravel, AI Integration.',
        },
        { name: 'author', content: 'Jean-Philippe Perron' },
        { property: 'og:title', content: 'Jean-Philippe Perron — Full-Stack Developer & AI Specialist' },
        { property: 'og:description', content: 'Bilingual Full-Stack Web Developer & AI Automation Specialist.' },
        { property: 'og:type', content: 'website' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      projectsPassword: process.env.NUXT_PUBLIC_PROJECTS_PASSWORD || 'demo123',
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
