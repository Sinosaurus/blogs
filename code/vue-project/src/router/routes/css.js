export default {
  path: '/css',
  redirect: '/css-zxx',
  meta: {
    title: 'css相关',
    icon: 'logo-css3',
  },
  component: () => import('$c/index.vue'),
  children: [
    {
      path: '/css-zxx',
      name: 'css-zxx',
      component: () => import('$c/CssZXX.vue'),
      meta: {
        title: 'css测试',
        icon: 'ios-cube',
      },
    },
    {
      path: '/css-line',
      name: 'css-line',
      component: () => import('$c/TextBottomLine.vue'),
      meta: {
        title: '文字底部横线',
        icon: 'logo-buffer',
      },
    },
  ],
}
