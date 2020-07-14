# git 如何关联多个库

> 在本地同一个库进行操作多个库，可以把代码推送到不同的库中，可以拉取某个库指定的代码，这样更加灵活使用

### git remote

- 查看远程主机名

```
git remote -v

// λ git remote -v
// gitlab  git@github:b.git (fetch)
// gitlab  git@github:b.git (push)
// origin  git@gitee.com:a.git (fetch)
// origin  git@gitee.com:a.git (push)
```

- 拉取远程主机名，同时修改名
  > 克隆版本库的时候，所使用的远程主机自动被 Git 命名为 origin。如果想用其他的主机名，需要用 git clone 命令的-o 选项指定。

```
git clone -o element-ui https://*******

git remote // element-ui
```

- 显示主机名下的详细信息

```
git remote show element-ui
```

- 添加主机名

```
git remote add <主机名> <网址>
```

- 删除远程主机

```
git remote rm <主机名>
```

- 远程主机改名

```
git remote rename <原主机名> <新主机名>
```

### git fetch

> 一旦远程主机的版本库有了更新（Git 术语叫做 commit），需要将这些更新取回本地，这时就要用到 git fetch 命令。

- git fetch

```
git fetch <远程主机名>
/** fetch 意义 **/
git fetch命令通常用来查看其他人的进程，因为它取回的代码对你本地的开发代码没有影响。
```

- 查看主机的分支

```
git fetch <主机名> <分支名>
```

- 查看远程分支

```
git brach -r
```

- 查看所有分支 (本地和远程)

```
git branch -a
```

- 查看本地分支

```
git branch
```

### git pull

> git pull 命令的作用是，取回远程主机某个分支的更新，再与本地的指定分支合并

```
git pull <远程主机名> <远程分支名>:<本地分支名>
/** eg **/
git pull origin next
==== 等同于 ====
git fetch origin
git merge origin/next
```

### git push

> git push 命令用于将本地分支的更新，推送到远程主机。它的格式与 git pull 命令相仿。

```
git push <远程主机名> <本地分支名>:<远程分支名>
```

- 如果当前分支与多个主机存在追踪关系，则可以使用-u 选项指定一个默认主机，这样后面就可以不加任何参数使用 git push。

```
git push -u origin master
// 下次就可以 直接使用 git push
```

> 不带任何参数的 git push，默认只推送当前分支，这叫做 simple 方式。此外，还有一种 matching 方式，会推送所有有对应的远程分支的本地分支。Git 2.0 版本之前，默认采用 matching 方法，现在改为默认采用 simple 方式。如果要修改这个设置，可以采用 git config 命令。

```
git config --global push.default matching
git config --global push.default sinmple
/** 本地分支都推送到远程主机 **/
git push --all origin

```

## 了解上述命令后，可以开启推送库了

> 假设两个库，一个库有内容，一个库没内容

```
// 库A
/** 库A有内容 **/
mayun

// 库B
/** 新建 **/
github

// 本地库

```

> 首先本地添加库

```
/** eg **/
git remote add mayun git@gitee.com:a.git
git remote add github git@github.com:b.git
```

> 检查库

```
git remote -v

github  github git@github.com:b.git (fetch)
github  github git@github.com:b.git (push)
mayun  git@gitee.com:a.git (fetch)
mayun  git@gitee.com:a.git (push)
```

> 拉取库 A 内容到本地

```
git pull mayun
/** 有可能需要指定具体分支 **/
git pull mayun master
```

> 推送到库 B

```
git push github // 推送的只是当前分支

/** 若是多个分支 **/
git push github --all
```

> 若是下次拉代码时，可以指定库

#### 总结

- 推送时，无法同时推送两个库，需要一个个推，但是这样可以拉取自己想要库的内容
  > 之前操作是可以同时推送多个库，但是却无法拉取某个库的内容，在想是否可以将两者进行结合呢，那这样是否就可以按需进行操作了

```
git push all

修改**.git**里的 *config* 配置即可
原理是，同时将两个库名名为同一个名字
/ ** eg **/
origin git@github.com:b.git
origin git@gitee.com:a.git

git push -u origin // -u 默认第一次进行本地远程关联

git push origin // 之后的命令
```

> 总结

- 内容很多是参考阮老师的，以及自己尝试和网友的各种办法
- 最起码加深了我对 git 的进一步了解了
