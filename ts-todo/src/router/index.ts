import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName:"HomeView"*/'@/views/HomeView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import(/* webpackChunkName:"todoView"*/'@/views/TodoView.vue')
    }
  ]
})

export default router
