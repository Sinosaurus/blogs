## 组件名为多个单词

> 引入 js

```
Vue.components('todo-item', ...)
export defaul {
    name: 'TodoItem'
}
```

> 模板字符串

```
<template>
  <TodoItem />
<template>

//js
import TodoItem from '...'
```

## prop 定义

> Prop 定义应该尽量详细。

```
props: {
  status: {
    type: String, // 类型
    required: true, // 是否是必须的
    validator: function (value) {  // 验证器
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

- prop 两种写法
  - 数组类型
  - 对象类型
    > 数组类型

```
prop: [val, item]
```

> 对象类型

```
prop: {
    item: Number,

    val: {
        type: String,
        default: 'sinosaurus',
    },

    name: {
        type: String,
        required: true,
        ...
    }
}
```

## 为组件样式设置作用域

> 若是可以不使用 `scoped`，则可以不适用，可以考虑使用 BEM
> 由于`vue-cli`已经配置了，直接安装 `less less-loader`即可，在 `style`中添加`lang="less"`即可
> 在安装`scss`时 `node-sass sass-loader`时，`node-sass`会出问题，通过切换镜像进行处理

## 私有属性名

> 推荐命名使用 `$_` 这样可以避免与 vue 相冲突 `$_myMethods(){}`

## 组件命名

- PascalCase ==> `MyComponents`
- kebab-case ==> `my-components`

## 基础组件

- 可以使用`Base V`等特殊指定为基础组件
- 如果频繁使用，可以将其注册为全局组件 [方法](https://cn.vuejs.org/v2/style-guide/index.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E5%90%8D-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
