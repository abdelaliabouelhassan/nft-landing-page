// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          hid: 'description', name: 'description', content: 'add your description here'
        },
        {
          hid: 'keywords', name: 'keywords', content: 'add, your, keywords, here',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'},
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
