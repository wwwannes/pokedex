import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/pokemon/:name',
    name: 'pokemon-detail',
    component: () => import('@/views/Detail.vue'),
    props: true
  },
  {
    path: '/:category/:name',
    name: 'category-page',
    component: () => import('@/views/CategoryView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
