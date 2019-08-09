import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  name: 'Component',
  meta: { title: '组件', icon: 'component', type: 'side' },
  children: [
    {
      path: 'demo1',
      component: () => import('@/views/components-demo/demo1'),
      meta: { title: '组件1' }
    },
    {
      path: 'demo2',
      component: () => import('@/views/components-demo/demo2'),
      meta: { title: '组件2' }
    }
  ]
}

export default componentsRouter
