export default [
  {
    path: '/el-validate-create',
    name: 'create',
    component: () => import('$e/CreateNewForm.vue'),
    meta: {
      title: '动态创建校验'
    }
  },
  {
    path: '/el-validate-has',
    name: 'has',
    component: () => import('$e/HasDataForm.vue'),
    meta: {
      title: '数据回显校验'
    }
  },
  {
    path: '/el-validate-IsR',
    name: 'is-r',
    component: () => import('$e/IsRequiredForm.vue'),
    meta: {
      title: '数据是否必填校验'
    }
  },
  {
    path: '/el-validate-new',
    name: 'new',
    component: () => import('$e/NewForm.vue'),
    meta: {
      title: '录入数据校验'
    }
  }
]
