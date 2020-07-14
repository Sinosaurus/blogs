# 解析 RSS 数据

没想到有一天还会进行解析 xml 文件，很是意外。想当初了解这块时，自己并没有太上心，当时 `json` 称天下。可 rss 源一直都有存在，而这也是一种数据源，没必要再单独去开发后台了。

> 为此简单了解了一些解析 xml 数据的 api

- [ActiveXObject](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Microsoft_Extensions/ActiveXObject)
- [DOMParser](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser/DOMParser)

然后了解了目前的一些插件，大同小异吧。不过有一点需要注意，由于我需要将 xml 装为 json，因而或多或少会有一些问题

## 一些现有的插件

- [xml-objTree](http://www.kawa.net/works/js/xml/objtree-e.html)
- [xml2json](https://www.npmjs.com/package/xml2json)
- [xml-js](https://www.npmjs.com/package/xml-js)
- [xmlToJson](https://www.npmjs.com/package/xmltojson)
  ...

## 测试

目前尝试了两种方式，一种是直接在 html 中使用，一种是在 vue 项目中使用。

这里直接阐述结果，细节不做过多介绍.

- [html 效果](https://sinosaurus.github.io/example/js-xml2json/xm-objtree.html)
- [vue](http://private_sheet.gitee.io/blogs/#/xml2Json)

> 需要注意的问题

- 在 html 中使用 npm 包时，需要使用 [`Browserify`](https://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html)
  进行转化为 浏览器可以读取的代码
- 在 vue 中使用上述的包时，并不是每个都可以直接使用，需要测试一下
- 由于每个包的开发理念不同，有的从 xml 转移到 json 的结构哦，数据嵌套过深，因而还需要自己测试一下
- 获取 feed 的文件，其实跟平时的 ajax 请求，没有什么特别之处，只是在于数据结构不同罢了

## 总结

目前需要解决的问题终于解决了，在此中，依旧需要保持一个开放的，好学的心态，不能因为技术等缘故，而在能学的时候选择放弃，很多时候难点都是卡在细节上

> code

- [html](https://github.com/Sinosaurus/example/blob/master/js-xml2json/xm-objtree.html)
- [vue](https://gitee.com/private_sheet/blogs/blob/master/code/vue-project/src/views/vue-test/xmlToJson/index.vue)

### 参考链接

- [1](https://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript)
- [2](https://github.com/hongkiat/js-rss-reader/)
