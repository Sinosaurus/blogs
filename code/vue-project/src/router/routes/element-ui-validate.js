export default {
  path: '/el-validate',
  redirect: '/el-validate-create',
  meta: {
    title: 'element-ui表单校验',
    icon: 'ios-american-football'
  },
  component: () => import('$e/index.vue'),
  children: [
    {
      path: '/el-validate-create',
      name: 'create',
      component: () => import('$e/CreateNewForm.vue'),
      meta: {
        title: '动态创建校验',
        icon: 'ios-american-football-outline'
      }
    },
    {
      path: '/el-validate-has',
      name: 'has',
      component: () => import('$e/HasDataForm.vue'),
      meta: {
        title: '数据回显校验',
        icon: 'md-american-football'
      }
    },
    {
      path: '/el-validate-IsR',
      name: 'is-r',
      component: () => import('$e/IsRequiredForm.vue'),
      meta: {
        title: '数据是否必填校验',
        icon: 'ios-analytics'
      }
    },
    {
      path: '/el-validate-new',
      name: 'new',
      component: () => import('$e/NewForm.vue'),
      meta: {
        title: '录入数据校验',
        icon: 'ios-analytics-outline'
      }
    }
  ]
}
