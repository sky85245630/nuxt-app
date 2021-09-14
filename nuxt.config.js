export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  //true通用模式
  //false spa模式
  ssr: false,

  env: {
    baseUrl: 'http://fuck:3000',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '靠北喔',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description hid QQ',
        name: 'meta  description QQ',
        content: 'meta content QQ',
      },
      { hid: 'og:title', property: 'og:title', content: 'og title' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'og description',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'og site_name QQ',
      },
      { property: 'og:locale', content: 'zh_TW' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: 'black',
    failedColor: 'red',
    height: '2px',
    duration: 5000,
    rtl: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/transition.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
