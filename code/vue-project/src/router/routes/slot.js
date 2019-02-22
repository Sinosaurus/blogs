export default [{
  path: '/vue-slot',
  name: 'slot-vue',
  component: () => import('$s/Slot.vue')
}, {
  path: '/data-vue',
  name: 'data-vue',
  component: () => import('$s/Data.vue')
}, {
  path: '/el-table',
  name: 'el-table',
  component: () => import('$s/ElementTable.vue')
}]
