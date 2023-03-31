import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Detail from '@/views/PokemonDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon-detail',
      component: Detail,
      props: true
    },
    {
      path: '/move/:name',
      name: 'move-page',
      component: Detail,
      props: true
    },
    {
      path: '/type/:name',
      name: 'type-page',
      component: Detail,
      props: true
    }
  ]
})

export default router
