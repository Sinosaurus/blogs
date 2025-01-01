# 谷歌云服务使用

目前谷歌提供了短期免费使用的服务器，[申请地址](https://console.cloud.google.com/compute/instances)

使用国外服务器的优势主要在于，安装各种依赖方便，不需要各种找替代方案，可以快速验证想法，而不是被困在处理各种前期的疑难杂症上

在上手前，最好先阅读下文档[进入虚拟机快速入门教程](https://console.cloud.google.com/home/dashboard?project=summer-catfish-247101&inv=1&invt=AblrYg&walkthrough_id=compute_quickstart)

## 创建虚拟服务器注意几点

+ 开启串行端口：可以避免 `ssh` 连接失败时，通过其他方式访问
+ 防火墙勾选 `Allow HTTP traffic`： 允许通过 `http` 访问
+ SSH 密钥：可以额外追加自己本机，进行关联访问

### 本地 SSH 连接

+ SSH 密钥配置
+ 服务器用户密码设置
+ 配置 `/etc/ssh/sshd_config`

```diff
- PermitRootLogin no
+ PermitRootLogin yes

- PubkeyAuthentication yes
+ PubkeyAuthentication no

- # AuthorizedKeysFile .ssh/authorized_keys
+ AuthorizedKeysFile .ssh/authorized_keys

- PasswordAuthentication no
+ PasswordAuthentication yes
```

+ 参考链接[CSDN](https://blog.csdn.net/xbw12138/article/details/72773993)



