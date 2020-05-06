# vue render 渲染函数

经常看到使用`render`渲染函数的示例，而且在一些特殊情况下，确实更好使用，可以更加有效地细分组件，因而借助[`vue-element-admin`](https://github.com/PanJiaChen/vue-element-admin)来学习一波

## render 函数分析

- 函数式组件
- 基础的使用方式

针对 [Link.vue](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/layout/components/Sidebar/Link.vue)进行改造

> Link.vue

```
// https://github.com/vuejs/eslint-plugin-vue/issues/462
<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>
```

上述方式打开了一个新的使用方式，这样的好处，不需要使用`if/else`进行处理，还可以减少一个多余的标签【root element】。但是会有一些语法提示错误，虽然添加了`eslint-disable`来禁止，但还是不行，而且有些不似`vue`的用法

## 改造开始

- 版本一 非函数式组件 【Link.vue】

```
<script>
import { isExternal } from '@/utils/validate'

export default {
  name: 'Link',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render(h) {
    if (isExternal(this.to)) {
      return h(
        'a',
        {
          attrs: {
            target: '_blank',
            rel: 'noopener',
            href: this.to
          }
        },
        this.$slots.default
      )
    } else {
      return h('router-link',
        {
          props: {
            to: this.to
          }
        },
        this.$slots.default
      )
    }
  }
}
</script>
```

主要是`slot`如何处置比较好，其他都好处理，而且使用`slot`有两种方式 [插槽](https://cn.vuejs.org/v2/guide/render-function.html#%E6%8F%92%E6%A7%BD)

> 方式一

```
this.$slots.default
```

> 方式二

```
this.$scopedSlots.default()
```

- 版本二 函数式组件 【Link.vue】

```
<script>
import { isExternal } from '@/utils/validate'

export default {
  name: 'Link',
  functional: true,
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render(h, context) {
    console.log(context)
    const { props, scopedSlots } = context
    const { to } = props
    if (isExternal(to)) {
      return h(
        'a',
        {
          attrs: {
            target: '_blank',
            rel: 'noopener',
            href: to
          }
        },
        scopedSlots.default()
      )
    } else {
      return h('router-link',
        {
          props: {
            to: to
          }
        },
        // scopedSlots.default()
        context.children
      )
    }
  }
}
</script>
```

对于上述两种实现方式，大致相同，有一些细节需要注意

- `functional: true` 添加这个后，只能通过 `context`来进行上下文关联，而无法调用`this`，同时这种方式会快一些，只是在使用`slot`时，会有两种形式[link](https://cn.vuejs.org/v2/guide/render-function.html#slots-%E5%92%8C-children-%E5%AF%B9%E6%AF%94)
  - `this.$slots.default` 更新为 `context.children`
  - `scopedSlots.default()` 这种方式依旧在
- 当时用`functional: true`，文件名便可以改为`js`为后缀了，若依旧使用`vue`时，便需要`<script> export default {}</script>` 进行包裹了

## 总结

- `render`函数更多是，很多细节不能使用语法糖来进行处理，导致使用起来不顺手
- `slot`插槽这块还是很有用的，只是文档说明等没有前面的那么详细了
- 通过上述方式，便发现原来可以这么玩，而且细粒度已经都要一层标签了，若使用原来的方式，`root element`怕是就够处理好一会儿了
