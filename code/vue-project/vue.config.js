const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('$', resolve('src/views'))
      .set('$e', resolve('src/views/elemenet-ui-validate'))
      .set('$c', resolve('src/views/css-test'))
      .set('$w', resolve('src/views/webpack-test'))
      .set('$s', resolve('src/views/vue-test'))
  },

  // configureWebpack: {
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       "windows.jQuery": "jquery"
  //     })
  //   ]
  // }
}
