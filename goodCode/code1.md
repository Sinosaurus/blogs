# 集锦各类更优`code`

+ `loading` 处理

> bad

```js
import axios from 'axios'
import { setLoading } from 'util'

setLoading(true)
axios.get(url, data).then(res => {
  setLoading(false)
}).catch(err => {
  setLoading(false)
})
```
上面`setLoading(false)`需要写两遍

> good

```js
import axios from 'axios'
import { setLoading } from 'util'

const fetchData = async () => {
  setLoading(true)
  try {
    const result = await axios.get(url, data)
  } catch(err) {
    // TODO:
  }
  setLoading(false)
}
```
如此便可以只调用一次，这样对于大多数处理`loading`过程，都更加便捷有效






+ 单行省略号

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

+ [多行省略号](https://segmentfault.com/a/1190000009262433)

```css
overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;
-webkit-line-clamp:2; (两行文字)
-webkit-box-orient:vertical;
```

> 兼容

```css
p{
position:relative;
line-height:1.4em;
/*设置容器高度为3倍行高就是显示3行*/
height:4.2em;
overflow:hidden;
}
p::after{
content:'...';
font-weight:bold;
position:absolute;
bottom:0;
right:0;
padding:0 20px 1px 45px;
background:#fff;
}
```

+ 等待时长

```js
const wait = function(ms = 50) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}
```

+ 从vuex里获取值，同时值修改时，同步到vuex中


```html
// myList 是从vuex中获取
<draggable v-model='myList'>
```

> good

```js
computed: {
  myList: {
    get() {
      return this.$store.state.myList
    },
    set(value) {
      this.$store.commit('updateList', value)
    }
  }
}
```

> bad

按照之前的操作方式，会用一个值进行中转，然后再去通过方法去触发

```js
data () {
  return {
    newMyList: []
  }
},
methods: {
  myListChange () {
    this.$store.commit('updateList', this.newMyList)
  }
},
computed: {
  myList: state => state.myList
},
watch: {
  myList (n, o) {
    this.newMyList = JSON.parse(JSON.stringify(n))
  }
}
```

> 通过上述方式，貌似可以用在父子间传参使用

```js
props: {
  params: String
},
computed: {
  params1: {
    get () {
      return this.params
    },
    set (value) {
      this.$emit('set-parent', value)
    }
  }
}
```











+ css

> 分成两块，一块全局，一块局部

+ `global`
+ [`module`](https://github.com/css-modules/css-modules)
  - [vue-css-modules](https://vue-loader.vuejs.org/zh/guide/css-modules.html#%E5%8F%AF%E9%80%89%E7%94%A8%E6%B3%95)
  - [juejin](https://juejin.im/post/5b8373b2e51d4538e6332dbb)
  - [Tencent](https://imweb.io/topic/586519b1b3ce6d8e3f9f99aa)
  