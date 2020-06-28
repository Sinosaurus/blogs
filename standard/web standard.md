# 前端规范

## 代码规范

- javascript
- html
- css

## javascript

- [eslint](https://cn.eslint.org/docs/rules/)

> 步骤

1. 下载 Eslint 插件

2. setting.json

```
"eslint.enable": true,
"eslint.autoFixOnSave": true,
"eslint.run": "onType",
"eslint.options": {
    "extensions": [".js",".vue"]
},
"eslint.validate": [
    { "language": "vue", "autoFix": true },
    "javascript",
    "html",
    "vue-html"
]
```

3. 依赖当前项目的配置

> 在使用 vue 项目开发时，默认选择 eslint 的 `standard`模式，然后 eslint 会找到这个配置进行校验

4. 保存时便会默认进行修复，特殊的需要手动进行配置

5. eslint 关闭
   只能配置可配置想，若是默认使用了

![尤雨溪](./../images/standard/yyx.jpg)
[link](https://www.zhihu.com/question/19738255)

- [Airbnb](http://airbnb.io/javascript/)
- [standard](https://standardjs.com/readme-zhcn.html)

## 规范

- [NEC](http://nec.netease.com/)
- [alloyteam](http://alloyteam.github.io/CodeGuide/)
- [aotu](https://guide.aotu.io/docs/)
