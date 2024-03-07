// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@vite-pwa/nuxt'
  ],

  pwa: {
    manifest: {
      name: 'nuxt Pwa',
      short_name: 'nuxt Pwa',
      description: 'A Nuxt.js project',
      display:'standalone',
      theme_color: '#000000',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/pwa-512x512.png',
          sizes : '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {	
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type:  'module'
    }
  },
})
