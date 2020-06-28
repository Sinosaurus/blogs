// 变量  ==============================

// var

console.log(a) //undefined
var a = 1
console.log(a) //1

// let

// console.log(b) // not defined  未定义
let b = 2
console.log(b) //2
b = 3
console.log(b) //3

// const

// console.log(c) // not defined 未定义
const c = 4
console.log(c) //2
// c = 5
// console.log(c) //TypeError: Assignment to constant variable

// 解构赋值  ===============================
let [a1, b1, c1] = [1, 2, 3]
console.log(a1, b1, c1) // 1, 2, 3
