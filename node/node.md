# node 学习

> 开始学习如何使用 node 来开发页面，静态托管，把 node 作为中间层进行后台访问

### 同时启动多个命令

> 最近有需求，在 vue 项目中同时启动多个 node 命令。特意研究一下
> `同时启动 node run serve` 和 `node run view`, 该如何操作
>
> > 首先了解 `&` , `&&`, `|` 三种区别
>
> - `&` 是指多个命令连接时，同步执行
> - `&&` 前一个命令执行完，后一个命令才能继续执行
> - `|` 管道符 （还得继续研究一下）

> 因而 上面执行两个命令可以有如下类型
>
> - `node run serve & node run view`
> - `node run serve && node run view`
> - `node ./nodeServe/index.js | \"./nodeView/index.js\"` 此处使用 \"\" window 下需要进行转义才能被读取，这样都可以启动命令了， 使用 "" 主要是为了包路径，后面附带的参数不用囊括在内 `"node ./build/express-dev-server.js | \"./server/node_modules/.bin/bunyan\" -l 10"` 类似这里的`\"./server/node_modules/.bin/bunyan\" **-l 10**`

### [nrm](https://www.jianshu.com/p/084f3cf550b3)

- npm 更新包 [link](https://segmentfault.com/a/1190000005857342)

```
npm-check
```
