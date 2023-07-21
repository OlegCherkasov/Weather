import { createRouter, createWebHistory } from 'vue-router'
// import TodayWeather from '@/views/TodayWeather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'today',
      // component: TodayWeather
      component: () => import('@/views/TodayWeather.vue')
    },
    {
      path: '/tomorrow',
      name: 'tomorrow',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/TomorrowWeather.vue')
    }
  ]
})

export default router
