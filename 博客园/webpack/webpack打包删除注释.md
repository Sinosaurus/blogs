# webpack 打包去除注释

> 一直以为webpack配置了 `uglifyjs-webpack-plugin` ，打包后的代码可以自动去除注释以及压缩代码，知道一天在测试环境中看到大片注释时，内心崩溃，怎么能如此，怎么能这样。于是开启了一段虐杀注释之旅
> 结合vue使用的项目


## 思路
+ 使用最原始的方式 **`webpack.config.js`**
+ 基于 **`vue-cli`**的配置


> 不管是那种方式，最终都是依赖 [uglifyjs-webpack-plugin](https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin/#src/components/Sidebar/Sidebar.jsx) 的配置进行的 


### `webpack.config.js`
> 未使用插件直接打包，代码都是有条理，没有被压缩，注释清晰可见，而使用插件后，才代码混合，注释全无
```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

plugins: [
    new UglifyJsPlugin()
],
```
> 只是如此，便一切都可以了

### `vue-cli`
> 但是这里明明已经使用了 该插件，而且代码也压缩了，奈何注释却保留了。依据网友提示及官网配置，修改如下
```
new UglifyJsPlugin({
    uglifyOptions: ({
        compress: {
            warnings: false, // 不警告
        },
        output: {
            comments: false // 这便是清除注释的关键
        }
    })
})
```
> 然而现实很残酷，注释依旧存在，版本，使用姿势都考虑了，依旧误解。崩溃边缘徘徊中

### 总结 
> 在这里考虑到很多, `css`,`js`,`html`注释都要考虑
> [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)使用该包分离`css`文件， `vue-cli`已经配置好了

> 后期继续补充