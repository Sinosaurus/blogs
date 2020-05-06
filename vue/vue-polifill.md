# 为了兼容 IE [github](https://github.com/vuejs-templates/webpack/issues/474)

## `build/webpack.base.conf.js`

```[vuex] vuex requires a Promise polyfill in this browser.
// 由于一直报错， app为 string
entry: () =>{
  return { app: ['babel-polyfill', './src/main.js'] }
}
/* 还需要在main.js中引入 */
import 'babel-polyfill'
import 'babel-polyfill'
// ----
entry: {
  'babel-polyfill': 'babel-polyfill',
  app: './src/main.js'
},
// ------------
entry: {
  app: [
    'babel-polyfill',
    './src/main.js'
  ]
},
```

```需要转义的js
{
  test: /\.js$/,
  loader: 'babel-loader',
  include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client'), resolve('node_modules/element-ui-verify/dist')]
},
```

## 总结

- 需要考虑很多，虽然 vue 是支持 ie9，但是引用的库，并不一定考虑 ie9。
