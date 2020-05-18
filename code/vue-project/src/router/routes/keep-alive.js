export default {
  path: '/keep',
  name: 'Keep',
  component: () => import('@/views/keep-alive/index.vue'),
  meta: {
    alive: true,
    title: 'keep-alive缓存页面',
    icon: 'md-boat'
  }
}
