## const let var 的区别    **作用域**
+ var 变量提升
+ let , const 不存在变量提升
+ const 常量  定义后的值不允许修改

## 变量的解构赋值
+ 数组的解构赋值
```
  let a = 1,
      b = 2, 
      c = 3
  //================= 

  let [a, b, c] = [1, 2, 3]
  console.log(a, b, c) // 1, 2, 3   

  //=================
  let [f, ...g] = [1, 2, 3, 4, 5]
  console.log(f, g) // 1 [2, 3, 4, 5]

  //==============
  let [d, h, ...i] = ['one']
  console.log(d, h, i) // one  undefined  []

  //========= 
  let [foo] = null || undefined || {} || 1 || NaN || false
  // 右侧 不是数组（不可遍历的结构） 
  // 因而会报错 


  // 默认值 
  let [aa = 123456] = []
  console.log(aa) // 123456

  // 特殊点  ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

  let [a = 1] = [ undefined ] // a = 1
  let [a = 1] = [ null ] // a = null
  
```
+ 对象的解构赋值
```
 let {obj, o } = {obj: 11, o: 234} // obj = 11, o = 234
// 可以理解为这样的
 ==> let {obj: obj, o: o} = {obj: 11, o: 234}

 let {obj: oo } = {obj: 222} // oo = 222  ;  obj is not defined   

 let {x, y = 5} = {x:1} // x=1  y=5
 let {x: y=50} = {x: 1} // y=1

 // 依旧是 严格判断对等   undefined

```
+ 字符串的解构赋值
```
const [a, b, c, d, e] = 'kekai'
// a'k';  b 'e';  c 'k'; d 'a' ;e 'i';

let {length} = 'kekai'
// length: 5
```
+ 数值和布尔值的解构赋值

+ 函数参数的解构赋值
```
function kk([x=1, y=1] = []) {
    return  [x, y]
}
kk() // [2, 2]
kk([22, 33]) // [22, 55]

```

## 字符串的扩展
+ includes(), startsWith(), endsWith() 
   - includes()：返回布尔值，表示是否找到了参数字符串。
   - startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
   - endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部

+ padStart()，padEnd()
> 第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

```
let second = 5
second = second < 10 ? ('0'+second) : second  // 05

second = second.toString().padStart(2, 0)  // 05

```
+ 模板字符串
> \`\`使用反引号   `${}` 用来放变量
```
// 原始如此

$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);

// 如今使用

$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

```

## 函数参数的默认值 
```
// es5
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}

log('Hello')  // Hello World

// es6
function log(x, y = 'World') {
    console.log(x, y)
}
log('Hello')  // Hello World


// 结合 解构赋值 进行使用

function foo( {x=1, y=2}) {
    console.log(x+y)
}
foo({}) // 3
foo() // TypeError

```

## rest参数
+ 可以取代 arguments    类似数组的对象  `Array.prototype.slice.call`使用这个可以转为真正的数组
+ rest 是真正的数组  rest必须放在最后 也就是在 `...rest`之后不能再添加 参数了
```
function add(x ) {
    console.log(arguments)
}
add(1, 2, 3, 4) //{ '0': 1, '1': 2, '2': 3, '3': 4 }

function ad(...rest) {
    console.log(rest)
}
ad(1, 2, 3, 4)  // [1, 2, 3, 4]
```

# 箭头函数 `=>`
+ 简化代码，主要用于回调函数
+ 可以不用考虑`this`的指向问题
```
const f = v => v

var f = function(v) {
    return v    
}

// this
function Fun(options) {
  options = options || {}
  this.id = options.id
  this.name = options.name
}

Fun.prototype.add = function() {
    console.log(this, 'Fun')
    setTimeout(function() {
        console.log(this, 'setTimeout')
    }, 500)
}

var f = new Fun()
f.add() // Fun    Window

Fun.prototype.del = function() {
    console.log(this, 'Fun')
    var _this = this
    setTimeout(function() {
        console.log(_this, 'setTimeout')
    }, 500)
}
f.del() // Fun  Fun

Fun.prototype.long = function() {
    console.log(this, 'Fun')
    setTimeout(() => {
        console.log(this, 'setTimeout')
    }, 500)
}
f.long() // Fun  Fun

```

## 数组
+ 扩展运算符  跟 `rest`相反

```
function foo(...rest) { //将参数合为一个数组
    console.log(...rest)  // 将数组进行解构为一个个值
}
foo(1, 2, 3, 4) // 1 2 3 4
```

```
  // 应用到实际中 concat
  let arr = [1, 2, 3, 4]
  let arr1 = [2, 2, 44, 6]

  const newArr = arr.concat(arr1)
  console.log(newArr) // [ 1, 2, 3, 4, 2, 2, 44, 6 ]

  const newArr1 = [...arr, ...arr1]
  console.log(newArr1)

//  apply
function f(x, y) {
    console.log(x, y)
}
var args = [1, 2]
f.apply(null, args) // 1 2

let arr = [1, 2]
f(...arr) // 1 2

```
```
//1. 克隆
//es5
const a1 = [1, 2, 3]
const a2 = a1.concat()

//es6
const a1 = [1, 2, 3, 4]
// 扩展运算符
const a2 = [...a1]
// 解构赋值
const [...a2] = a1
```


+ find  findIndex

```
// find 用来查找 数组里的某个值，主要用来返回第一个符合条件的
//findIndex 用来获取符合类型的索引 

const arr = [77, 44, 55, 66, 23]

// es6
arr.find(value, index, arr) => {
    return value > 70
})
// 77

//查找索引
// es6
arr.findIndex(value => value > 70)  // 0
//es5
arr.indexOf(77) // 0  

```

+ includes  判断数组是否包含某个值  Boolean
```
const arr = [1, 3, 4, 6]
arr.includes[4]  // true


// 去重

const arr = [1, 22, 3, 1, 3, 55, 22, 5, 66, 22, 2]

// es6
//方法一
const newArr = []
for (let item of arr) {
    if (!newArr.includes(item)) {
        newArr.push(item)
    }
}

//方法二
const set = new Set(arr)
const newArr = [...set] 


// es5 // 同时可以统计是多少次
const obj1 = {}
const newArr1 = []
for (let i = arr.length - 1; i >= 0; i --) {
    let item = arr[i]
    if (obj1[item]) {
      obj1[item]++  
    } else {
      obj1[item] = 1
      newArr1.push(item) 
    }
}

```

## 对象的扩展
+ 属性，方法 简洁写法 
```
const name = 'sinosaurus'
cosnt age = '18'
const sex = 'girl'
const hoby = ['洗衣', '做梦']
const obj = {
  name,
  age,
  sex,
  hoby,
  eat() {
      console.log('慢嚼细咽')
  }
}

var obj = {
    name: name,
    age: age,
    sex: sex,
    hoby: hoby,
    eat: function() {
        console.log('慢嚼细咽')
    }
}
```

+ 属性名表达式 （计算属性名）

```
//es5
var obj = {
    o: 123,
    a: 2324
}

//es6
const name = 'sinosaurus'
const SET_USER = 'SET_USER'
const obj = {
    o: 123,
    ['a'+'b']: 111,
    [name]: 123456,  // 表示以他的属性名作为属性
    [SET_USER]() {
        console.log(45678)
    }
}
```

## promise
+ 回调地狱
<img src="" />
+ 

```

```







