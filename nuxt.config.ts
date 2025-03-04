export default defineNuxtConfig({
  nitro: {
    routeRules: {
      "/api/**": {
        proxy: 'http://localhost:8105/api/**'
      },
    }
  },

  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  compatibilityDate: '2025-02-27',
})