// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','nuxt-aos'],
  devtools: { enabled: true },

  css: [
    // ...
    'aos/dist/aos.css', // Add this line
  ],
  
  
})

