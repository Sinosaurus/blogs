export default {
  path: '/base',
  redirect: '/base/el-scrollbar',
  meta: {
    title: 'vue base 使用',
    icon: 'ios-appstore'
  },
<<<<<<< HEAD
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
=======
  component: () => import('$s/index.vue'),
  children: [
    {
      path: 'el-scrollbar',
      name: 'scroll',
      component: () => import('@/views/vue-test/ElScrollbar.vue'),
      meta: {
        title: 'element-scrollbar',
        icon: 'md-car'
      }
    },
    {
      path: 'render',
      name: 'render',
      component: () => import('@/views/vue-test/render.vue'),
      meta: {
        title: 'render 渲染函数',
        icon: 'ios-bookmark'
      }
    }
  ]
}
>>>>>>> a40a73124d0048dd4775e9ffd133365d2619912b
