export default {
  path: '/base',
  redirect: '/base/el-scrollbar',
  meta: {
    title: 'vue base 使用',
    icon: 'ios-appstore',
  },
  component: () => import('$s/index.vue'),
  children: [
    {
      path: 'el-scrollbar',
      name: 'scroll',
      component: () => import('@/views/vue-test/ElScrollbar.vue'),
      meta: {
        title: 'element-scrollbar',
        icon: 'md-car',
      },
    },
    {
      path: 'render',
      name: 'render',
      component: () => import('@/views/vue-test/render.vue'),
      meta: {
        title: 'render 渲染函数',
        icon: 'ios-bookmark',
      },
    },
  ],
}
