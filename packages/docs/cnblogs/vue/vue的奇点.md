# vue 的特殊点

## 子组件调用父组件方法

> 之前只知道 子可以调用父组件的方法是通过其他方式
> 今天发现可以通过类似传值的方式进行调用 很奇怪

- 之前的方式 以 **emit**进行调用

> 子组件 `sonComponents`

```
// template
<button @click="sonMethods"></button>
// js
methods: {
    sonMethods() {
        this.$emit('parentMethods')
    }
}
```

> 父组件

```
// template
<sonComponents @parentMethods="consol">
//js
methods: {
    consol() {
        console.log('子组件调用父组件的方法')
    }
}
```

- 以 **props** 的方式 进行调用

> 子组件 `sonComponents`

```
// template
<button @click="parentData"></button>
//js
props: ['parentData']
```

> 父组件

```
//template
<sonComponents :parentData="parentMethods" />
//js
methods: {
    parentMethods() {
        console.log('以props进行调用')
    }
}
```

## class 的实例方法

> 一般而言 类的方法直接写在`class`里面的，但是这样却限定了扩展，想额外自定义方法便很难，需要在类中都写好为止，以前`es5`也是如此，可能是我孤陋寡闻了
> class 写法 **this.aa()**

```
class Zhen {
    constructor(...params) {
        for (let i = params.length - 1; i >= 0; i --) {
            let item = params[i]
            this[item] = item
        }
    }

    play() {
        this.aa()
        console.log('父元素')
    }
}

const a1 = new Zhen('hua')

console.log(a1)

a1.aa = () => {
    console.log(22)
}

a1.play()
```

> es5 **this.aa()**

```
function Zhenone (...params) {
  for (let i = params.length -1; i >= 0; i--) {
      let item = params[i]
      this[item] = item
  }
}

Zhenone.prototype.play = function() {
    console.log(this)
    this.aa()
    console.log('父元素')
}

const z = new Zhenone('hua')

console.log(z)
z.aa = function() {
    console.log(this, '子类型')
}

console.log(z, 'aa')
z.play()
```
