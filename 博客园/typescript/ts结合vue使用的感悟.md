# TypeScript 
> 前端现在越来越强大，多人开发更是常见，加上各大框架都开始支持TypeScript，而谷歌和微软又更加积极，导致不得不去学习，顺道通过js来了解ts，再通过ts来了解强类型语言。一路走来，辛酸二字不足形容，道行太浅，终究惨不忍睹。特在此记上一笔。以备将来继续踩坑前行。


## TypeScript使用
+ 官方文档[EN 2.9](https://www.typescriptlang.org/docs/handbook/basic-types.html) | [中文 2.7](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)  推荐使用使用英文文档，明显比中文更新更快    
+ [不知道算不算阮一峰的](https://ts.xcatliu.com/introduction/what-is-typescript.html) 这个过于简单了，但是归纳的挺好的  

### 使用流程
+ 全局安装 `typescript` 
+ 版本检测 `tsc -v`
+ 新建文件后缀以 `.ts`即可
+ `ts` ==> `js` 执行命令`tsc  **.ts` ==> `**.js` 
  + 随时更改，随时转 `tsc  **.ts  -w`
  + 多个文件处理 需要配置 `typescript.json` ==> `tsc init`
  + **`typescript.json`**
    + 配置 [files](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
> 到此基本可用

## 准备接入 `vue` [官方介绍](https://cn.vuejs.org/v2/guide/typescript.html)
+ 目前可以看来 `vue`本意使用`flow`,奈何`typescript`已成大势所趋，不得不跟进脚步了

### 目前有两种方式
+ 直接基于之前的vue进行修改即可 [Microsoft](https://github.com/Microsoft/TypeScript-Vue-Starter) 这种学习成本低，改起来快，但却没有很好地发挥其作用
+ 基于**vue-cli.3.0**进行开发，这个学习成本大，很多东西不是很完善，而且相应的资料不完成，很痛苦
  + 使用到官方维护插件[vue-class-component](https://github.com/vuejs/vue-class-component)
  + 第三方[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
> 目前个人能力有限，碰到一些坑，指令 过滤器该怎样写，不清楚了，因为写的格式已经大变，又没有正规的文档，导致有几种变化，目前还不好定论。到此为止，个人虽然很想基于vue-cli3.0进行开发，可惜实在是走不出来，退而求其次，先使用简单的，再多平时多关注这类的问题，希望早日出头吧。

## 语法检测 `eslint` ==> `tslint`
+ 在使用 `tslint`时，想更为其他格式，结果时灵时不灵，导致我直接忽视其配置了。虽然使用了官方配置，但是依旧有问题，也不知道是不是使用的姿势不对还是怎么的。反正就是将以前的操作都给变了。看来漫漫长路啊

> 个人感想：
+ 花了这么大气力来学习这个，结果有点竹篮打水一场空的赶脚。没办法
+ 其实还是有很多相关项目的，可惜了


