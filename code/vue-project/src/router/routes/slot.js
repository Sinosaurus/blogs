export default {
  path: '/vue',
  redirect: '/vue-slot',
  meta: {
    title: 'vue各类小测试',
    icon: 'md-done-all'
  },
  component: () => import('$s/index.vue'),
  children: [
    {
      path: '/vue-slot',
      name: 'slot-vue',
      component: () => import('$s/Slot.vue'),
      meta: {
        title: 'vue slot方法',
        icon: 'ios-archive'
      }
    },
    {
      path: '/data-vue',
      name: 'data-vue',
      component: () => import('$s/Data.vue'),
      meta: {
        title: 'vue data',
        icon: 'md-aperture'
      }
    },
    {
      path: '/el-table',
      name: 'el-table',
      component: () => import('$s/ElementTable.vue'),
      meta: {
        title: 'element-table',
        icon: 'ios-square'
      }
    },
    {
      path: '/vue-attrs',
      name: 'vue-attrs',
      component: () => import('@/views/vueData/index.vue'),
      meta: {
        title: 'attr&listener',
        icon: 'md-cash'
      }
    }
  ]
}
