export default [{
  path: '/keep',
  name: 'Keep',
  component: () => import('@/views/keep-alive/index.vue'),
  meta: {
    alive: true
  }
}]
