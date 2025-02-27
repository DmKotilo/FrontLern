// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    routeRules: {
      "/api/**": {
        proxy: 'http://localhost:8105/api/**'
      },
    }
  },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt']
})