# 组件库搭建封装的一些想法

<!-- + 组件二次封装
+ 优化点
+ 常用属性必备
+ 命名规范
+ 开发规范
  - eslint
  - git -->

最近一直在进行组件封装开发，在这儿记录一下开发心得。

### 组件进行二次封装

对于`element-ui`，大家应该都有使用过，而每次开发都需要设置一些默认值，或者多个组件需要进行组合使用...，对于这些每次开发都需要设置一遍，而且每个人的开发风格不同，导致一些本应该有的小功能，没能体现出来，因而都需要进行处理。

#### 属性，事件

在二次封装时，需要借助`v-bind="$attrs",v-on="$listeners",inheritAttrs: false` 来进行组件*属性*及*事件*传递

> tips:

- 属性：props
- 事件：event 通过`@` 进行调用的
- 方法：method 通过`$refs`进行调用的

> 示例:

```html
<el-select v-model="value" clearable placeholder="请选择">
  <el-option
    v-for="(item, key) in options"
    :key="key"
    :label="item.label"
    :value="item.value"
  ></el-option>
</el-select>

<script>
  export default {
    data() {
      return {
        value: '',
        list: [
          { 1: '第一' },
          { 2: '第二' },
          { 3: '第三' },
          { 4: '第四' },
          { 5: '第五' },
        ],
      }
    },
    computed: {
      options() {
        return this.list.map((item) => {
          const value = Object.keys(options)[0]
          const label = item[value]
          return {
            value,
            label,
          }
        })
      },
    },
  }
</script>
```

对于上面的形式应该都有遇见过，这样每次使用都要如此处理，特别是大型表单，涉及到多个`el-select`时，写起来就有些枯燥了，因而进行简化处理（这个过程也意味着使用时需要知晓规则）

- 组件封装

```html
<el-select
  v-bind="$attrs"
  v-on="$listeners"
  :clearable="clearable"
  :placeholder="placeholder"
>
  <slot>
    <el-option
      v-for="(item, key) in relOptions"
      :key="key"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </slot>
</el-select>

<script>
  export default {
    name: 'my-select',
    inheritAttrs: false, // 此处加上是为了防止一些不必要的问题 https://cn.vuejs.org/v2/api/#inheritAttrs
    props: {
      placeholder: {
        type: String,
        default: '请选择',
      },
      clearable: {
        type: Boolean,
        default: true,
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      relOptions() {
        return this.options.map((item) => {
          const value = Object.keys(options)[0]
          const label = item[value]
          return {
            value,
            label,
          }
        })
      },
    },
  }
</script>
```

那之后每次使用就会很轻松了，对于上面的例子就可以简单地使用即可，而且 `el-select` 原有的属性和事件都可以继续使用

```html
<my-select v-model="value" :options="list"></my-select>
<script>
  export default {
    data() {
      return {
        value: '',
        list: [
          { 1: '第一' },
          { 2: '第二' },
          { 3: '第三' },
          { 4: '第四' },
          { 5: '第五' },
        ],
      }
    },
  }
</script>
```

若是想进一步处理，可以继续进行定制处理即可。这里需要补充一下，对于方法需要额外处理一下。上面的封装的还不是很完善，方法的`focus,blur`还不支持（除非自己通过`$refs`一层层去找），接着进行处理。

```html
<el-select
  v-bind="$attrs"
  v-on="$listeners"
  :clearable="clearable"
  :placeholder="placeholder"
  ref="my_select"
>
  <slot>
    <el-option
      v-for="(item, key) in relOptions"
      :key="key"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </slot>
</el-select>

<script>
  const methodList = ['blur', 'focus']
  const methods = {}
  methodList.forEach((methodName) => {
    methods[methodName] = function (...args) {
      const _ref = this.$refs.my_select
      if (_ref && _ref[methodName]) {
        _ref[methodName](...args)
      }
    }
  })

  export default {
    name: 'my-select',
    inheritAttrs: false, // 此处加上是为了防止一些不必要的问题 https://cn.vuejs.org/v2/api/#inheritAttrs
    mixins: [methods],
    props: {
      placeholder: {
        type: String,
        default: '请选择',
      },
      clearable: {
        type: Boolean,
        default: true,
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      relOptions() {
        return this.options.map((item) => {
          const value = Object.keys(options)[0]
          const label = item[value]
          return {
            value,
            label,
          }
        })
      },
    },
  }
</script>
```

至此，`my-select` 正常使用算是差不多了（数据格式需要前后台统一即可），想要百分百保持与`el-select`还是有一些困难，但是对于自己负责的相关项目都是完美支持，这样就可以了。但是对于一些特殊的组件有时还需要看源码才知道如何应对。

#### 双向数据绑定

`v-model`用起来很舒服，其实本质是 `v-bind,v-on`简化的语法糖，项目中的使用

> 实例：

```html
<template>
  <el-cascader
    v-bind="$attrs"
    v-on="$listeners"
    v-model="model"
    ref="sti_cascader"
  ></el-cascader>
</template>

<script>
  import { getMethods } from './../../../utils/mixin.js'
  const METHOD_NAMES = ['getCheckedNodes']
  const methods = getMethods(METHOD_NAMES, 'sti_cascader') // 用来生成 methods方法

  export default {
    name: 'my-cascader',
    inheritAttrs: true,
    mixins: [methods],
    props: {
      value: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      model: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        },
      },
    },
  }
</script>
```

#### 层级

组件层级嵌套未知时，想要获取父子的事件，需要通过父调子或子调父递归查找，但是这个存在很多不确定性。因而在封装组件时，推荐使用 `provide,inject` 的方式进行处理

> 实例：

- `my-anchor`

```html
<template>
  <div class="my-anchor-container" :style="`height: ${realHeight}`">
    <ul class="link-wrapper">
      <slot name="link"></slot>
    </ul>
    <div class="list-wrapper" ref="listWrapper" id="listWrapper">
      <slot />
    </div>
  </div>
</template>

<script>
  import scrollTo, { getTargetScrollLocation } from './scroll.js'

  export default {
    name: 'my-anchor',

    provide() {
      return {
        anchor: this
      }
    },

    data() {
      return {
        active: ''
      }
    },

    methods: {
      handleAnchorClick(id) {
        this.active = id
        this.init(id)
      },
    }
    ...
  }
</script>
```

- `my-anchor-link`

```html
<template>
  <li
    :class="['my-anchor-link',  isActive ? 'my-anchor-link--active' : '' ]"
    :data-id="id"
    @click="handleClick"
  >
    <slot>
      <span class="my-anchor-link__title">{{title}}</span>
    </slot>
  </li>
</template>

<script>
  export default {
    name: 'my-anchor-link',
    inject: ['anchor'],
    props: {
      id: {
        type: String,
        required: true,
      },
    },

    computed: {
      isActive() {
        return this.anchor.active === this.id
      },
    },

    methods: {
      handleClick() {
        this.anchor.handleAnchorClick(this.id)
      },
    },
  }
</script>
```

### 包体积

由于在打包发布时，发现组件库偏大，通过`vue-cli-service build --report` 进行查看，发现很多插件都只是使用了其中一小部分功能，从而导致整个包偏大

- 插件

  - moment => day.js
  - lodash => 手写相应的方法 lodash-es
  - vuedraggable => html5sortable

- gizp

### 总结

开发的过程中，更多地是考虑如何工程化，如何更好地兼容之前的和为未来做扩展，这几块还要好好努力。依旧记得尤大说过，如何做到解耦及模块化，这个是我所欠缺的，也许已经实现但是不知道如何去描述了。

下一步是对工程化进一步发起奋斗了。
