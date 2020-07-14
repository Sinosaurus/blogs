# typescript

## 参考链接
+ [个人文档](https://ts.xcatliu.com/basics/primitive-data-types)


## 使用技巧
+ [TypeSearch](https://microsoft.github.io/TypeSearch/)
  > 可以用来对一些用js写的库的支持，便于在ts中，有对应的提示及类型检测
+ [ts-options](https://www.tslang.cn/docs/handbook/compiler-options.html)  

+ `strictNullChecks: true` 在`tsconfig.json`添加该配置，可以用于更好地提示
  
  ```ts
    // ele 有可能是 element/null
    const ele = document.getElementById('box')
    /**
     * 此时有可能会因为 ele=null 而报错，通过添加 `strictNullChecks: true`
     * 可以在ele.value便有提示，从而进行处理
    */
   ele.value = 1 
  ```  



  [1](https://www.html.cn/doc/typescript/)
[2](https://www.tslang.cn/docs/handbook/compiler-options.html)
[3](https://ts.xcatliu.com/)


# Typescript

定义类型

+ 简单数据类型

   -
   ```
     str: string
   ```
   -
   ```
     str: '我是字符串' as string
   ```
   
+ 复杂数据类型
  
  - 
  ```
    function setValue (obj: { name: string }) {
        this.name = name
    }
  ```
  - 
  ```
    interface Obj {
        name: string
    }
    function setValue (obj: Obj) {
        this.name = name
    }
  ```
  
  
  
## bug
+ http://bigc.site/m/?post=51
+ https://github.com/microsoft/TypeScript/issues/16772

