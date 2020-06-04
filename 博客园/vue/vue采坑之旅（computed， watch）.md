## vue 踩坑之旅 -- computed watch

> 经常在使用 vue 初始化组件时，会报一些莫名其妙的错误，或者，数据明明有数据，确还是拿不到，这是多么痛苦而又令人忍不住抓耳挠腮，捶胸顿足啊

### 技术点

- vue + element + ehcarts + vuex + vue-router

#### 问题再现

```
    data() {
        return {
            option: {
            chart: '' //echarts的实例
            }
        }
    },
    //钩子函数
    mounted() {
        this.chart = echarts.init(this.$refs.charts) // 使用vue提供得ref来获取dom
        this.chart.setOption(this.option)  // 初始化数据
    },
    computed: {
        ...mapState({
            option(state) {
                const state = state.state.option
                //this.chart.setOption(state)
                return state

            }
        })
    },
    watch: {
        this.option(oldVal, newVla) {
            this.chart.setOption(state)
        }
    }
```

- 当动态获取的数据回来时，`computed`中调用`setOption`时，会有两次显示，第一次没有数据，因而会报错，第二次才有数据，给人的感觉是， `computed`比`mounted`先执行，而且是执行多次，因而导致报错，思来想去，最后在`watch`中调用时才得以解决
- 这个让我想起另一个例子，当时也是拿数据，有一个数据是在`sessionStorage`中获取，当时这个数据是本地的，因而会现出来，但是要求是后出来，放在`watch`中解决，虽然`watch`是监听路由，数据，但是也可以作为数据先后展示的重要函数

### 新的发现

> `computed`： 假设用来获取`vuex`中的数据

- 思考一

```
computed: {
    ...mapState({
        //假设的值
        timeList(state) {
            return state.timeList
        }
    })
}
```

> 若是想直接使用`timeList`可以在`template`模板中调用，但是若是没有使用，需要查看`timeList`的值，可以在`watch`中，进行监听即可。之前一直存在误区，以为必须在`watch`中进行监听，才可以拿到值，现在想想完全没有必要，除非进行业务逻辑处理而已

- 思考二
  > 在上面的问题，提到 `computed`会执行两次，而第一次是没有数据的，需要额外进行处理。今天用一种简单的方式即可解决

```
computed: {
    ...mapState({
        //假设的值
        timeList(state) {
            const timeList = state.timeList
            if (timeList.length == 0) return
            //业务逻辑处理
            return state.timeList
    空    }
    })
}
```

> 简单地进行判断即可，若是空，直接跳出函数

## 个人的一些总结：

- `computed`在使用时，一定要注意，函数里面的变量都会被监听，只要里面的某一个值变动，便会将整个函数执行一遍，这样会有很多坑在里面，因而考虑如何不在里面使用
- `watch`只是监听某一个值，若是监听的值里面也有很多变量，也会全部监听
