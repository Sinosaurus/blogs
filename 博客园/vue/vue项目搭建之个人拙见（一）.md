## vue 项目搭建 （一）

> 由于一直想要有自己的框架，因而一直在尝试搭建各类结构，结合`vue`官网及[git 上大神 bailicangdu](https://github.com/bailicangdu/vue2-elm)的项目，再看看网上一些意见，及个人思考，总结的一些，不到之处希望大家可以帮我指证，必定虚心接受

## 技术栈： `vue2`+`vue-router`+`vuex`+`axios`+`webpack`+`es6/7`

## 项目布局

> `vue-cli`构建初始项目后，在`src`中进行增删修改

```
// 此处是模仿github上  bailicangdu  的
├── src
|   ├── apsi
|   |   ├── api.js                              // 接口详情配置
│   ├── components                              // 组件
|   |   ├── common                              // 公共组件
│   ├── config                                  // 基本配置
│   │   ├── fetch.js                            // 获取数据
│   ├── images                                  // 公共图片
│   ├── plugins                                 // 引用的插件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接口进行统一管理
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   └── style
│       ├── common.css                          // 公共样式文件
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件

```

> 对上述结构进行详细分析

- apis

  - api.js

```
    // 这里写所有的接口，便于后期修改管理，若是变动，只需修改当前即可，而不是牵一发动全身
    // 切换域名
    let baseUrl = null
    if (process.env.NODE_ENV === 'development') { //开发环境
        baseUrl = 'http://ip:端口号'
    } else if (process.env.NODE_ENV === 'production') { //生产环境
        baseUrl = 'http://'+ window.location.host
    }
   //这样后期知道请求方式，都可以好修改，一目了然
    const apis = {
        getImgs: {
            url: '/imgs',
            method: 'get',
        },
        getUser: {
            url: '/user',
            method: 'post',
        },
        ...
    }
    export {
        baseUrl,
        apis,
    }
```

- components

  - common 用来存放公共组件，便于使用

- config

  - fetch.js 在下一次中重点分析

- store

  - getters.js

```
  export default {}
```

- action.js 正常来说，请求数据 （ajax）写在这里，但当请求相当多时，数据相当不好处理，比正常请求麻烦多了，因而变为 单独建立一个 service 文件，用来进行数据请求

```
  import { setUserInfo } from './mutation-types'
  import { getUser } from './../service/getData'
  export default {
      getUserInfo({commit}) {
        const res = await getUser()
        commit(setUserInfo, res)
      },
  }
```

- mutations.js

```
  import { getUser } from './mutation-types'
  export default {
      [getUser](state, data) {
          state.user = data
      }
  }
```

- mutation-types.js

```
  export const getUser = 'getUser'
```

- index.js

```
  import Vue from 'vue'
  import Vuex from 'vuex'
  import mutations from './mutations'
  import actions from './action'
  import getters from './getters'
  Vue.use(Vuex)
  const state = {
      user: '', //用户信息
  }
  export default new Vuex.Store({
      state,
      getters,
      actions,
      mutations,
  })
```

- router
  - router.js

```
  import Vue from 'vue'
  import Router from 'vue-router'
  Vue.use(Router)
  // 路由懒加载
  const Component1 = () => import('./../components/component1')
  const Error = () => import('./../components/error')
  const router = new Router({
      // 使用元信息进行匹配
      routes: [
          {path: '/', name: 'Component1', meta: { flag: 'in'}, component: Component1},
          {path: '/error', name: 'Error', meta: { flag: 'in'}, component: Error},
          {path: '*',  redirect: {path: '/error'}}
      ]
  })
  // 鉴权
  import store from './../vuex/index'
  router.forEach((to, from, next) => {
      const menuList = store.state.user.menuList //用户菜单
      const isLogin  = store.state.isLogin // 是否登录
      // 判断是否有资格进入
      let isEnter = false
      if (menuList.includes(to.meta.flag)) {
          flag = true
      } else {
          flag = false
      }

      if (isEnter && isLogin) {
          next()
      } else {
          if (to.path === '/error') {
              next()
          } else {
              next('/error')
          }
      }
  })
```

> 我这个只是很浅的，若是深究，每个又可以无限下去，折腾不起，越深，坑越多，难爬，只好先把基础打扎实些了

- 总结
  - 下一个专门写网络请求，感觉有很多坑，网上封装的都有些局限，希望我能抛砖引玉，有个更优雅的解决办法
  - 路由这个我只是浅显的点一下，里面还有一些我都不知道的，没用到
  - vuex 希望可以看到 module 具体如何使用就好了，特别是这个 action，坑太多，累

还希望各位看官多多指正，谢谢了
