# git 常见问题

- `master.lock`

```
  Rename from 'C:/office/eco_web/.git/refs/remotes/origin/master.lock' to 'C:/office/eco_web/.git/refs/remotes/origin/master' failed. Should I try again? (y/n) n
  er': couldn't set 'refs/remotes/origin/master'
```

刚出现这个问题，一脸懵，平时都好好的，怎么突然来这么一出。后来经过尝试，知道远程库，由于内存满了，被整理过，估计代码就被移动过。而`master.lock` 和 `master` 文件里是一串字符，感情类似密码匹配，不同就会一直出现这个问题。

> 网友解决办法 **直接在对应的目录下，新建一个 `master.lock`** 可惜无效

> 鄙人当前解决办法通过，感觉也更加合理

```
直接将 `master.lock` 覆盖 `master` 的字符串，让两者进行统一，当然是新的覆盖旧的。因而得以解决
```
