export default {
  path: '/about',
  name: 'about',
  component: () => import('@/views/About.vue'),
  meta: {
    title: 'about',
    icon: 'md-analytics',
  },
}
