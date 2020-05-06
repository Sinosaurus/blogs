# linux 基础使用

## [用户](https://www.runoob.com/linux/linux-user-manage.html)

> `useradd 选项 用户名`

- 参数
  - -c comment 指定一段注释性描述。
  - -d 目录 指定用户主目录，如果此目录不存在，则同时使用-m 选项，可以创建主目录。
  - -g 用户组 指定用户所属的用户组。
  - -G 用户组，用户组 指定用户所属的附加组。
  - -s Shell 文件 指定用户的登录 Shell。
  - -u 用户号 指定用户的用户号，如果同时有-o 选项，则可以重复使用其他用户的标识号。

* 查看用户列表
  - `cat /etc/passwd`
  - `cat /etc/passwd|grep -v nologin|grep -v halt|grep -v shutdown|awk -F":" '{ print $1"|"$3"|"$4 }'|more`

## ssh

- [Permission denied, please try again.](https://blog.csdn.net/u010853261/article/details/54811554)
