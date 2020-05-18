export default [
  {
    path: 'el-scrollbar',
    name: 'scroll',
    component: () => import('@/views/vue-test/ElScrollbar.vue')
  },
  {
    path: 'render',
    name: 'render',
    component: () => import('@/views/vue-test/render.vue')
  },
  {
    path: '/high',
    name: 'high',
    component: () => import('@/views/vue-test/High.vue')
  }

]
