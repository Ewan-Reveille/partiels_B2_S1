import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faYoutube, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
config.autoAddCss = false
library.add(faFacebookF, faInstagram, faYoutube, faLinkedin, faTiktok)


// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  head: {
    title: 'École multimédia et digital – MyDigitalSchool',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend(config: any, { isDev, isClient }: { isDev: boolean; isClient: boolean }) {
      config.module?.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      });
    },
  },

  css: [
    '@/assets/style.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  modules: [
    'nuxt-gtag',
    'nuxt-simple-sitemap',
    '@nuxtjs/color-mode',
    'nuxt-viewport',
    '@unlok-co/nuxt-stripe',
    '@nuxtjs/robots',
    '@tresjs/nuxt'
  ],

  buildModules: [
    '@/nuxtjs/fontawesome',
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/three.js', mode: 'client' }
  ],

  transpile: [
    "three"
  ],
  fontawesome: {
    icons: [
    ],
    
  },
  robots: {
    UserAgent: '*',
    Disallow: 'http://localhost:3000/admin',
  },

};