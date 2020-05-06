# wordpress 启动一些坑

`wordpress`启动很容易，奈何想要一劳永逸却并非易事，比如操作线上的 wordpress，而不用本地搭建，本地 wordpress 连接远程数据库等等

## 使用环境

- phpStudy 一键搭配的环境
  - mysql 5.\*
- wordpress ^5.0

## 记录一些坑

- 如果从其他成员的数据库导入到自己本地数据库
  - 数据来源： `mariaDB 10.*`的数据结构
  - 方法实验
    - 一直以为都是`mysql`因为就可以相互导入库名以及数据结构，这样就可以不用再进行操作，可惜想法太简单，版本不同就不行，而我碰到是的，`mariaDB`与`mysql`的互通，谁跟我说两个是一家的，想想一家的也可以不同啊。我尝试了将`mysql`升到`8.03`[1](http://phpstudy.php.cn/jishu-php-3131.html),[2](https://www.cnblogs.com/xc1234/p/9050149.html),可以导入数据了，但是会丢失很多表，只得寻找下一个方法。
  - 下载`mariaDB`进行本地安装，数据终于可以导入了

> 此时，我们需要保持本地数据库，wordpress 等版本，类型都需要与测试或线上的相同才可以，**此时引入了自己的思考，为何本地 wordpress 直接连测试环境的数据库，这样就不用来回捣鼓，或者本地直接远程线上的数据及 wordpress 岂不更加美妙**

- 本地 wordpress 连接远程数据库
  - 若是本地连接测试或者线上数据库，这样就只需要管理页面即可，数据库就不用操心，如此便可以省去一部分麻烦
  - `wp-config.php`进行数据库设置即可，可惜配置并没有那么简单,_还没找到有效的解决办法_，虽然可以配置，但是启动页面会丢失大量基础东西
- 直接操作线上 wordpress
  - 使用 vscode 的插件`sftp`进行操作
    > sftp.json
  ```
    {
        "name": "wordpress",
        "host": "YourHost",
        "protocol": "sftp",
        "port": 22,
        "username": "YourName",
        "password": "YourPassword",
        "remotePath": "FilePath",
        "privateKeyPath": "PathprivateKey"
        ...
    }
  ```
  通过工具可以直接连到，但是通过这个工具，确是各种难连，`privateKey`一定要看清楚是私钥，我虽然通过上述方式连接成功，但是发现这个却不能进行文件添加，这未免还不如本地添加直接覆盖来的实际，而且前后响应时间还太慢，急死个人啊。今天来，发现又连不上了，无奈之下，放弃，不用这个了

## 总结

- 坑有千千万，只看自己敢不敢一直往下走了
- 试了这些方法，我现在只想多试试远程连接数据库这个，希望能有所头绪
