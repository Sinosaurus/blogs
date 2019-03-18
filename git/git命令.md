# git 常用命令

+ git 创建分支，切换到新分支
```
/** 创建分支 dev1.0 **
git branch dev1.0
/** 切换到分支 dev1.0 **
git checkout dev1.0
```
> 更快捷的命令 合并上述两行命令为一条命令
```
git checkout -b dev1.0
```

+ 远程仓库设置默认分支
  + `gitlab`
  由于远程分支默认显示在`dev1.0`上，现在需要修改为`master`上 [stackoverflow](https://stackoverflow.com/questions/30987216/change-default-branch-in-gitlab)
  ![默认显示master](./../images/git/gitlab1.png)
  ![gitlab设置顺序](./../images/git/gitlab2.png)
  ![具体细节](./../images/git/gitlab3.png)
  
