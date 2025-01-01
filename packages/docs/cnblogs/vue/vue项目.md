#### 在命令行直接运行 `npm run build`后，生成的`dist`文件中,直接打开`index.html`文件

```
Tip: built files are meant to be served over an HTTP server.
  Opening index.html over file:// won't work.
```

##### 打包完后，提示只能在服务端可以开启，file 模式下无法工作

问题： `使用vue脚手架开发的spa项目，在打包为app时，出现白屏现象`  
原因： `想要在手机端打开，等同于在本地file模式下打开，因而需要作出判断`

> 会出现两种结果，在`pc端`
>
> - 打开后白屏；
> - 可以打开页面

## 处理方案 ：

#### 打开后白屏

1. 原因在于打开需要在服务端，而不是本地打开`file`模式下。需要修改 `webpack`中的代码。根路径，改为相对路径

```
 // config文件夹 ==> index.js  ==>  build 中修改 assetsPublicPath 为相对路径
 build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',   修改为'./'  根路径变为相对路径
```

2. `vue-router`中模式修改为`hash` 如果是`history`下,页面无法显示图片等

```
 // src文件夹 ==> router文件夹 ==> index.js中找到  new Router
  export default new Router({
  mode: 'history', //修改为hash 或者直接去除
  routes: []
```

#### 可以打开页面

在上面两个都已经解决完后，使用`hbuild`打包为`app`后，在手机端依旧打开白屏。此时已经不是模式等问题，而应该考虑其他问题，比如 es6 语法支持程度等等

3.  因为`promise`支持程度不是很好，需要使用 `babel-polyfill`进行支持

```
    //build文件夹 ==> webpack.base.conf.js中添加

    //下载包后，引入
    require('babel-polyfill')

    //入口文件中 添加
     entry: {
      //为了 es6 的promise
      app: ['babel-polyfill','./src/main.js']
    },
```

经过这些处理，在手机端应该就可以查看了
