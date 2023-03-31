import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin)
app.use(router)
app.use(Vue3Marquee, { name: 'MarqueeAnimation' })

app.mount('#app')
