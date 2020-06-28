# vue spn 如何做 seo 优化

> 突然来了一个需求，对已有的项目做 SEO 优化，WHAT？ 总所周知，spn 对 seo 不够优化，因而官方考虑到直接使用[ssr](https://vuejs.org/v2/guide/ssr.html)

## 一个不算解决办法的办法[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

```vue-cli2.0
// build/webpack.prod.conf.js
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
new PrerenderSPAPlugin({
  // 生成文件的路径，也可以与webpakc打包的一致。
  // 下面这句话非常重要！！！
  // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
  staticDir: path.join(__dirname, '../dist'),

  // 对应自己的路由文件，比如index有参数，就需要写成 /index/param1。
  routes: ['/opty', '/customer', '/channelVendor', '/contract_type', '/contract', '/bill'],

  // 这个很重要，如果没有配置这段，也不会进行预编译
  renderer: new Renderer({
    inject: {
      foo: 'bar'
    },
    headless: false,
    // 在 main.js mounted 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    renderAfterDocumentEvent: 'render-event'
  })
})

// main.js
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')

// router 需要使用history
new Router({
  mode: 'history',
  routes
})
```

> 参考资料[1](https://www.imooc.com/article/75016)，[2](https://juejin.im/post/59d49d976fb9a00a571d651d)

##总结

- 打包时间真心长，很不适合做 seo
- 只适合简单处理，若是项目复杂，路由较多，便不是很适合了
