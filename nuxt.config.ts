// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: '',
    jwtKey: '',
    public: {
      apiBase: '',
    }
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', { families: { 'Fira+Code': true, 'Inter': true } }],
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
