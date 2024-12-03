export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@vee-validate/nuxt',
    '@nuxtjs/color-mode'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Eco Impact Meter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Track and reduce your ecological footprint' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      openWeatherApiKey: '',
      transportApiKey: ''
    }
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY,
    redirect: false
  },

  colorMode: {
    classSuffix: ''
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-11-28'
})