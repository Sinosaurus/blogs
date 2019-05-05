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

+ 设置账号
```
git config user.name 'YOUR NAME'
git config user.email 'YOUR_EMAIL@**.**'
```

+ 生成密钥
```
// id_rsa_NAME 设置成自己想要的名字，主要用来区分
ssh-keygen -t rsa -f ~/.ssh/id_rsa_NAME -C 'YOUR_EMAIL@**.**'
```
+ 需要生成config文件进行关联[知乎](https://www.zhihu.com/question/21402411)
```
vi config
```
书写规范
```
#备注
# 用户1
#别名，随便定 后面配置地址有用
host github.com  
    #要连接的服务器 
    Hostname github.com
    #用户名
    User ontheroadtomine
    #密钥文件的地址，注意是私钥
    IdentityFile ~/.ssh/id_rsa 

# 用户2
host 
    Hostname github.com
    User **
    IdentityFile ~/.ssh/id_rsa_**
```

+ 增加私钥**需要使用自带的git命令工具**，可以不用再次输入密码
```
ssh-agent bash
// 用户1 密钥
ssh-add ~/.ssh/id_rsa
// 用户2 密钥
ssh-add ~/.ssh/id_rsa_**
```
查看是否成功
```
ssh-add -l
```

+ github/其他 添加ssh-key公钥
```
// 测试是否连接成功
ssh -T git@github.com
```

## 总结
+ 这个还是很适用的技巧，目前我已踩完坑，可以正常使用