import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/homepage_view.vue'),
    },
    {
      path: '/destination',
      name: 'destination',
      component: () => import('@/views/destination_view.vue'),
    },
    {
      path: '/destination/:slug',
      name: 'destination-detail',
      component: () => import('@/views/destination_detail_view.vue'),
      props: true,
    },
    {
      path: '/edukasi',
      name: 'edukasi',
      component: () => import('@/views/edukasi_view.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact_view.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
