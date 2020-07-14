## 非父子传值测试

一直都很好奇非父子传值到底如何，结果入坑许久才爬出来，才知道在脚手架里测试就是坑。

> 问题： 测试非父子传值时，由于组件之间是通过路由进行跳转，值传过去又被刷掉
> 思路： 因为路由跳转，相当于重排（不太确定，感觉不是重绘）,因为数据又回到最原始的值

### 首先我是基于`vue-cli`进行测试

```
//组件一
<template>
    <div>
      行到水穷处，坐看云起时!
      <p>来自组件传来的id{{id}}</p>
      <input type="text" v-model="id">
    </div>
</template>
<script>
import bus from './../bus'
export default{
    data() {
        return {
            id: 0
        }
    },
    created() {
         //获取组件2的数据
        bus.$on('sendId', (id) => {
            console.log(this.id, '我是组件000')
            this.id = id
        })
    }
}
</script>

//组件二
<template>
    <div>
      行到水穷处，坐看云起时!
      <p>{{id}}</p>
      <button @click="sendId">点击发送id</button>
    </div>
</template>
<script>
import bus from './../bus'
export default{
    data() {
        return {
            id: 2
        }
    },
     methods: {
         sendId(){
           bus.$emit('sendId', this.id)
         }
     }
}
</script>
```

我在 `router文件夹`下的`index.js`中配置

```
export default new Router({
  routes: [
    {path: '/',
      components: {
        top: sibling1, //目的为了测试两个组件同时显示，值能否传递过去
        left: sibling2
      }
    },
    {path: '/si1', component: sibling1},
    {path: '/si2', component: sibling2}
  ]
})
```

`App.vue`代码

```
<div id="app">
    <router-link to="/si1">第一1</router-link>
    <router-link to="/si2">第二2</router-link>
    <router-view name="left"></router-view>
    <router-view name="top"></router-view>
    //使用keep-alive 是为了缓存组件，不用重新创建
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
```

> 结论：
>
> - 如果不适用 `keep-alive`，在路由跳转时，相当于重新开启页面，之前传递的参数都会消失
> - 同时也熟悉了`bus`传值的一些局限，如何使用`vuex`就可以不用考虑这个
