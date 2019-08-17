export default [
  {
    path: '/css-zxx',
    name: 'css-zxx',
    component: () => import('$c/CssZXX.vue'),
    meta: {
      title: 'css测试'
    }
  },
  {
    path: '/css-line',
    name: 'css-line',
    component: () => import('$c/TextBottomLine.vue'),
    meta: {
      title: '文字底部横线'
    }
  }
]
