# require.context 的骚操作

由于最近一个项目，涉及到很多个表单小模块，分别做成组件，没想到一下子就是二三十个，若是一个个引用，写都写的够呛，又不好维护。因而考虑利用`require.context`进行动态指定添加，这样便可以减少一些处理

> 按照一般操作外，如何利用第四个参数，此处还没有进行有效处理，因为设置为`lazy`等，没有办法进行按需引入，返回的是 promise，只是一次性注册进去了。引入而不调用，感觉也还好吧

## 参考链接

- [vue](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)
- [官网文档](https://webpack.docschina.org/guides/dependency-management/#require-context)
  - [补充](https://juejin.im/post/5d37f1a3e51d45108c59a637)
  - [mode](https://github.com/webpack/webpack/blob/master/lib/ContextModule.js#L13)
