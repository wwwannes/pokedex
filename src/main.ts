import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Vue3Marquee from 'vue3-marquee'

import 'vue3-marquee/dist/style.css'
import './assets/main.css'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueQueryPlugin)
  .use(Vue3Marquee, { name: 'MarqueeAnimation' })
  .mount('#app')
