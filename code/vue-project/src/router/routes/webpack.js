export default {
  path: '/webpack-test',
  name: 'webpack-test',
  component: () => import('$w/WebpackAddVar.vue'),
  meta: {
    title: 'webpack添加变量',
    icon: 'md-briefcase',
  },
}
