# git commit 提交规范
在使用git管理代码时，常常会随心所欲的提交各类注释，导致下次辨识度太差，而且不利于长期维护，一直想要有一个好的处理方法。曾经想通过，一个类似的前缀来标识
```
fix  修复
bug  修改
build 打包
test  测试
...
```
通过运行 `git commit -m fix ...` 表示此次是进行代码修复。。。

## 使用工具
+ [Commitizen](https://github.com/commitizen/cz-cli)
  + [ryf](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
  + [zhihu](https://zhuanlan.zhihu.com/p/34223150)
  + [juejin](https://juejin.im/entry/5b429be75188251ac85830ff)

## 使用流程
+ 安装
  + `npm install -g commitizen cz-conventional-changelog` (全局安装)
  + 生成`change log`
    + [`npm install -g conventional-changelog-cli`](https://juejin.im/post/5bd2debfe51d457abc710b57)
    
+ 初步尝试
  + 添加 若是不符合要求便会直接被拒绝提交
  ```
  git add .
  git cz
  // 进入指令选择模式，注意细节及要求规范
  ```
  + 生成日志
      ```
      // 不会覆盖以前的 Change log，只会在 CHANGELOG.md 的头部加上自从上次发布以来的变动
      conventional-changelog -p angular -i CHANGELOG.md -s -p 
      ```
