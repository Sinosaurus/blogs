# 如何利用`keep-alive`按需缓存页面数据

随着项目不断变大，页面变多，搜索条件也随之也越来越多，而每次跳转页面再返回时，之前的筛选的条件都会别清空。之前在[elment-ui table 组件 -- 远程筛选排序](https://www.cnblogs.com/sinosaurus/p/10420509.html)提到过缓存，但是有所取巧，这次重新用另一种方式进行实现，或者说是更加合理一些。

## 场景需求

如何使页面跳转后回来时输入框中输入的值依旧存在？

## 初步设想

- 利用`keep-alive`来缓存组件
- 利用`vuex`来实时更新缓存组件的情况及缓存页面的各类筛选条件
- 利用`vue-router`来进行预判页面是否需要缓存，从而实时更改缓存组件情况

## 代码之旅开启

- `keep-alive`提供了几个属性，需要缓存组件名（因而需要缓存的组件都有自己的名称，全局唯一）
  - `include`
  - `exclude`
  - `max`
    > 当前主要使用`include`来动态更新
- `vue-router`
  - 需要在有需要缓存的页面，在路由`meta`属性添加一个字段来进行标识（首次进入）
  - `beforeRouteLeave`来进行预判当前页面是否需要缓存
- `vuex`
  - 缓存筛选条件（有需要在返回页面时回显的数据）
  - 动态缓存组件

### 路由

- 通过路由名跟组件名进行绑定，取名一致（建立隐形关系）

```
export default [{
  path: '/keep',
  name: 'Keep', // 既是组件名又是路由名
  component: () => import('@/views/keep-alive/index.vue'),
  meta: {
    alive: true // 通过alive来确定初步是否缓存
  }
}]
```

### vuex

- 初始化需要缓存的组件
  > App.vue

```
<keep-alive :include="cachedViews">
  <router-view></router-view>
</keep-alive>
```

初始化

```
 mounted () {
   this.setInitActiveViews()
 }
// 获取需要缓存的组件
getInitActiveViews (routes) {
  let views = []
  routes.forEach(route => {
    if (route.meta && route.meta.alive) {
      views.push(route.name)
    }
    if (route.children) {
      const childViews = this.getInitActiveViews(route.children)
      if (childViews.length) {
        views = [...views, ...childViews]
      }
    }
  })
  return views
},
// 存入vuex中
setInitActiveViews () {
  const alives = this.getInitActiveViews(this.$router.options.routes)
  alives.forEach(item => {
    this.$store.commit('cache/addCacheViews', item)
  })
}
```

> 至此便初步缓存组件了

- 缓存条件

### 动态增删缓存组件

在需要缓存的组件进行处理

> 具体的某个组件

```
created () {
  if (!this.$store.state.cache.cachedViews.includes(this.$options.name)) {}// 数据请求
  this.$store.commit('cache/addCacheViews', this.$options.name)
},
activated () {
  // 数据请求
},
beforeRouteLeave (to, from, next) {
  const { name } = to
  // 进入当前路由需要缓存条件
  const childRouterMap = [
    'jsonp'
  ]
  const isCache = childRouterMap.includes(name)
  if (!isCache) {
    // 清空搜索条件
    this.$store.commit('keep/deleteParams')
    // 删除缓存
    this.$store.commit('cache/deleteViews', this.$options.name)
  }
  next()
}
```

> 此处便可以做到，只有进入`jsonp`路由时，页面数据会被缓存，若是进入其他的页面，就会被清空。同时也可以及时刷新页面数据

### 总结

- 使用`beforeRouteLeave`时，需要是在路由被注册的，也就是`component: **.vue`该组件方可有效
- 由于动态缓存组件一直在改动，目前只有这样实现可以满足需求，后期若是有更好的再进行处理
- 条件尽可以缓存起来，使用 vuex 最方便了
- 页面数据既可以实时刷新又可以保留条件
- 解决了页面数据缓存，而不是粗暴地通过 `v-if`来触发组件重新走一遍
- [当前项目地址](https://github.com/Sinosaurus/blogs/tree/master/code/vue-project)

## 参考

- [路由独享的守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#路由独享的守卫)
- [keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/store/modules/tagsView.js)
