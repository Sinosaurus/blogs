# 'slot'的使用问题

## 根据官方文档来说，有三种使用方式
- https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9 

 - 单个插槽 https://github.com/Sinosaurus/myBlogs/blob/master/example/slot01.html
 - 具名插槽 https://github.com/Sinosaurus/myBlogs/blob/master/example/slot02.html
 - 作用域插槽 https://github.com/Sinosaurus/myBlogs/blob/master/example/slot-scope.html
# 总结：
  - 可以利用作用域插槽 进行子向父传值，但是有限制，只能在子组件中使用而已（暂时这么理解） 
  - `vue2.5`以上可以不适用`template`进行也可以正常使用`slot-scope`
  - `slot-scope`可以分开，`slot`写具名插槽，`scope`写传过来的参数
  