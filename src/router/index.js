import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '@/layout'

// Router modules
import componentsRouter from './modules/components'
import vueRouter from './modules/vue-router'
// Sidebar routes
export const sidebarRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/intro',
    // hidden: true,
    meta: { title: 'dd' },
    children: [
      {
        path: 'intro',
        component: () => import('@/views/intro/index'),
        name: 'Intro',
        meta: { title: '介绍' }
      }
    ]
  },
  componentsRouter,
  vueRouter
]

const router = new Router({
  routes: sidebarRoutes
})

export default router
