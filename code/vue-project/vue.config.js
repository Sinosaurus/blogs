const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('$', resolve('src/views'))
      .set('$e', resolve('src/views/elemenet-ui-validate'))
      .set('$c', resolve('src/views/css-test'))
      .set('$w', resolve('src/views/webpack-test'))
      .set('$s', resolve('src/views/slot-test'))
  }
}
