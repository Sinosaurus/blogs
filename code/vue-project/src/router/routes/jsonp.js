export default {
  path: '/jsonp',
  name: 'jsonp',
  component: () => import('@/views/jsonp/jsonp.vue'),
  meta: {
    title: '跨域插件',
    icon: 'md-bicycle',
  },
}
