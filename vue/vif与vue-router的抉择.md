# vue-router 该如何使用

> 忽然碰到一个常见的问题，明明可以使用 v-if / v-show 可以的解决的问题，有没有必要是使用 vue-router 来解决。 比如常见的 tab 切换。一时间，我有些犹豫了，有没有必要滥用 vue-router。那到底何时用才叫合理呢？

> 先上代码，用两种方式实现的效果

##### 使用 vue-router

> `router`

```
import Tab1 from './components/tab/TabOne'
import Tab2 from './components/tab/TabTwo'
import Tab3 from './components/tab/TabThree'
import Tab4 from './components/tab/TabFour'
const routes = [
  {path: '/tab1', component: Tab1},
  {path: '/tab2', component: Tab2},
  {path: '/tab3', component: Tab3},
  {path: '/tab4', component: Tab4},
]
const router = new VueRouter({
  routes
})
```

> `.vue`文件中

```
 <div class="tab">
  <router-link to="/tab1">tab1</router-link>
  <router-link to="/tab2">tab2</router-link>
  <router-link to="/tab3">tab3</router-link>
  <router-link to="/tab4">tab4</router-link>
  <router-view></router-view>
</div>
```

##### 使用`v-if/v-show`

> `.vue`

```
<div class="tab">
  <button @click="handleTab(1)">tab1</button>
  <button @click="handleTab(2)">tab2</button>
  <button @click="handleTab(3)">tab3</button>
  <button @click="handleTab(4)">tab4</button>
  <div v-if="isShow === 1"><Tab1 /></div>
  <div v-if="isShow === 2"><Tab2 /></div>
  <div v-if="isShow === 3"><Tab3 /></div>
  <div v-if="isShow === 4"><Tab4 /></div>
</div>
/**
 * script
 */
 data () {
    return {
      isShow: 1
    }
  },
  methods: {
    handleTab (v) {
      this.isShow = v
    }
  }
```

> 效果如下

<img src="./../images/v-if_vur-router/v-test.gif" width="800px" />

- 上方为路由
- 下方为 v-if

> 目前看起来效果一致。那就从另一个角度考虑，页面结构。

- `vue-router`

<img src="./../images/v-if_vur-router/vue-router.gif" width="800px" />

- `v-if`

<img src="./../images/v-if_vur-router/v-if.gif" width="800px" />

> 静态页面没区别，现在考虑传参，进行数据请求渲染

- `vue-router` 进行参数传递

```
//修改上述代码
<!-- router -->
{path: '/tab1', name: 'tab1', component: Tab1},
{path: '/tab2', name: 'tab2', component: Tab2},
{path: '/tab3', name: 'tab3', component: Tab3},
{path: '/tab4', name: 'tab4', component: Tab4}
<!-- .vue -->
<button @click="jump(1)">tab1</button>
<button @click="jump(2)">tab2</button>
<button @click="jump(3)">tab3</button>
<button @click="jump(4)">tab4</button>
<router-view></router-view>
<!-- script -->
jump (n) {
  this.$router.push(
    {
    name: 'tab'+n,
    params: {
      id: n,
      data: {
        a: 1,
        b: 2,
        c: 3}
      }
    }
  )
}
```

> 效果图
> <img src="./../images/v-if_vur-router/v-routeparams.png" />

> 在修改 router 中代码时，需要修改为**命名式路由**才可以，这样有利于传参而不会在 url 地址中显示

```
<!-- demo -->
<!-- router -->
{path: '/ke/:id', name: 'ke', component: Tab1}
<!-- script -->
this.$router.push({
  name: 'ke',
  params: {
    id: 1,
    val: 'url中看不见我'
  }
})
```

> 效果

<img src="./../images/v-if_vur-router/test.png" />

> 使用 v-if 结合 vuex 实现

```
<!-- vuex -->
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        tab: {
            tab1: {},
            tab2: {},
            tab3: {},
            tab4: {}
        }
    },
    mutations: {
        setTabData (state, data) {
            state.tab[data.type] = data.data
        }
    }
})
export default store

<!-- 传值到vuex -->
...mapMutations([
  'setTabData'
]),
handleTab (v) {
  this.isShow = v
  const data = {
    type: 'tab'+v,
    data: {
      a: 1,
      b: 2,
      c: 3
    }
  }
  this.setTabData(data)
}

<!-- 具体组件中使用 -->
<!-- template -->
<ul>
  <li v-for="(v, key, i) in tab" :key="i" >
    {{v}} === {{key}}
  </li>
</ul>
<!-- script -->
computed: mapState({
  tab: state => state.tab.tab1
})
```

> 结果

<img src="./../images/v-if_vur-router/v-ifvuex.gif"/>

> 因而在 tab 中使用 vue-router 的方式进行传参，会相对比较方便，而使用 v-if 时，则需要借助 vuex，每次都需要尽所有指定的参数放到 vuex 中，在下一个组件中，再去 vuex 中进行获取。这样而言，导致代码量多一些。当然使用得当也很好。特别是现在有些公司不许使用 vuex，只能使用 EventBUS 那是不是在使用 v-if 方式实现时，更加麻烦呢？

> 总结

- 目前看来可能使用 vue-router 会更加好一些（但是依旧值得深究）
- 使用原生，可能是用索引进行关联，在 vue 中推荐使用 数据进行驱动
- 暂且记录一笔，以待后期继续研究

> 补充

- 使用 vue-router 组件初始化 直接在页面上引用并不会
