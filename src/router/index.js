// Composables
import { createRouter, createWebHistory } from 'vue-router'
import VueCookies from 'vue-cookies';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/count',
    name: 'CounterPage',
    component: () => import('@/views/CounterPage.vue'),
  },
  {
    path: '/kiosk',
    name: 'KioskPage',
    component: () => import('@/views/KioskPage.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/logout',
    name: 'LogoutPage',
    component: () => import('@/views/LogoutPage.vue'),
    meta: {requireAuth:true}
  },
  {
    path: '/m1',
    name: 'M1Page',
    component: () => import('@/views/M1Page.vue'),
  },
  {
    path: '/m2',
    name: 'M2Page',
    component: () => import('@/views/M2Page.vue'),
    meta: {requireAuth:true}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


router.beforeEach((to,from) => {

  if(to.meta.requireAuth){

    if(VueCookies.get("loginCookie")) {
      console.log("already logined................")
      return
    }
    return "/login"
  }

})

export default router
