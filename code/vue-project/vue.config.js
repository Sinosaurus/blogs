const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("$", resolve("src/views"))
      .set('$e', resolve("src/views/elemenet-ui-validate"))
      .set('$c', resolve("src/views/css-test"))
  }
}
