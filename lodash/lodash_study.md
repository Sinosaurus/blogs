# lodash 工具函数

> 相应的学习地址

- [官网](https://www.lodashjs.com/)
- [one](http://lodash.think2011.net/)
- [two](https://www.lodashjs.com/docs/4.17.5.html)
- [three](http://www.css88.com/doc/lodash/)

> 最近因为各种想法，一直都在折腾`loadsh`，没想到简单一个库，居然这么麻烦，好歹算是弄出来了

### 实现的几种思路

> 以下以使用 loadsh 的节流**throttle**

> 正常引用使用

```
import _ from 'loadsh'
Vue.prototype._ = _
```

- 页面中使用
  > > HelloWorl.vue

```
methods: {
    handleSendAjax () {
      this._.throttle(function () {
        console.log('发送数据')
      }, 500)
    }
}
```

> 然而却并没有执行

- 看 vue 官网中引用的案例

### lodash 引入的几种方法

> 为了能够优雅的使用 lodash，这过程中各种寻找优化，真是痛苦，一直没有找到很好地解决方法，都是有利有弊，目前没有看到绝对的使用优势

- 借助`mixin`及`computed` [Using lodash in all of vue component template](https://stackoverflow.com/questions/37694243/using-lodash-in-all-of-vue-component-template)

```
import Vue from 'vue'
import _ from 'lodash';
exports default {
    install : function(Vue, options){
        Vue.mixin({
            computed : {
                "_" : function(){
                    return _;
                }
            }
        });
    }
}
Vue.use(_)
```

> > 这样便可以在任何单文件中直接使用 `_`而无需前面添加 `this`, 特别是在方法中，添加 `this`也没有任何效果，反而会报错
> > 不知为何，突然间使用`import lodash from lodash` `lodash`为`undefined`，莫名其妙，不爽，逼我使用`require`

- lodash 如何[按需引入](https://imys.net/20161217/webpack-use-lodash.html)
