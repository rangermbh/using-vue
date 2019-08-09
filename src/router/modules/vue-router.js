import Layout from '@/layout'

const vueRouter = {
  path: '/vue-router',
  component: Layout,
  name: 'VueRouter',
  meta: { title: '路由' },
  children: [
    {
      path: 'dynamic',
      component: () => import('@/views/vue-router/dynamic'),
      meta: { title: '动态路由' }
    },
    {
      path: 'nested',
      component: () => import('@/views/vue-router/nested'),
      meta: { title: '嵌套路由' }
    }
  ]
}

export default vueRouter
