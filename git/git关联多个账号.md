# 一台电脑连接多个git账号
现需要一台电脑连接gitlab，github，码云，之前的操作时，用公司账号，在这几个地方都注册一遍，导致自己就有两类号，一个自己的，一个公司的，这样也是可以，但总是不太好，为何不能公司号负责gitlab，自己号负责码云，github呢。

## 如何添加多个号
> 这里得分两种情况
+ 还没设置 `git --global`
+ 已设置 `git --global`

针对已设置 `git --global`进行展开，[未设置的也可以按照这样进行操作](https://blog.csdn.net/onTheRoadToMine/article/details/79029331)

> 若是选择多账户，每个仓库都需要额外进行设定，就不能像之前那样，一个账号到处跑，不然当前仓库也无法进行确定具体是哪个账号进行操作的，这个得万分注意

+ 找到需要设定的项目，清除全局设置
```
git config --global --unset user.name
git config --global --unset user.email
```