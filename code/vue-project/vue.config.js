// https://juejin.im/post/5cd1b28e6fb9a03235587493
const path = require('path')
// const webpack = require('webpack')
// const nodeExternals = require('webpack-node-externals')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('$', resolve('src/views'))
      .set('$e', resolve('src/views/elemenet-ui-validate'))
      .set('$c', resolve('src/views/css-test'))
      .set('$w', resolve('src/views/webpack-test'))
      .set('$s', resolve('src/views/vue-test'))
  },
  // eslint
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    // 直接在浏览器上显示错误信息
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
      '/feed': {
        target: 'https://www.sinnet-cloud.cn/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/feed': '',
        },
      },
    },
  },

  // configureWebpack: config => {
  //   config.externals = [nodeExternals()]
  //   // plugins: [
  //   //   new webpack.ProvidePlugin({
  //   //     $: "jquery",
  //   //     jQuery: "jquery",
  //   //     "windows.jQuery": "jquery"
  //   //   })
  //   // ]
  // }
}
