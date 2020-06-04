# less 全局变量使用

> 忽然想定义一个变量，但是却需要每个 `.vue` 文件都需要单独引入这个全局变量才可以，导致很多重复不必要的工作，因而得寻找一种可以任何地方都可以访问的方法

- [借助换肤这个功能](https://blog.csdn.net/u013884068/article/details/78186798)
- [sass-resources-loader](https://github.com/shakacode/sass-resources-loader)

```
/** vue-cli3.0 **
// vue.config.js
module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './path/to/resources.less',

          // Or array of paths
          resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        })
        .end()
    })
  }
}
```

- [网友](https://honey3go.github.io/2017/11/16/%E6%95%99%E7%A8%8B-%E5%9C%A8vue-cli%E4%B8%AD%E4%BD%BF%E7%94%A8less%E7%9A%84%E4%B8%89%E7%A7%8D%E6%96%B9%E5%BC%8F%EF%BC%9A%E5%86%99%E5%85%A5%E5%8D%95%E7%BB%84%E4%BB%B6%E3%80%81%E5%BC%95%E5%85%A5%E5%92%8C%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F/)

### 总结

- 后期再进行记录，一步步来吧
