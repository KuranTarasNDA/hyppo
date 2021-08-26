import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/mortgage',
      component: () => import('./views/Mortgage.vue')
    },
    {
      path: '/calculator',
      component: () => import('./views/Calculator.vue')
    },
    {
      path: '/about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/faq',
      component: () => import('./views/Faq.vue')
    }
  ]
})