# ubuntu 学习
为了学习最纯正的命令，特意开启虚拟机，安装了ubuntu 来学习相关的指令。讲讲我从一个从来没有在pc端安装虚拟机来安装ubuntu的过程以及相关解决问题

## 虚拟机
> win10自带虚拟机 `Hyper-V` 开启流程
+ window + R 输入 `control` 进入控制面板
 ![alt](./../images/linux/ubuntu/hyper1.png)
+ 点击 `程序`  找到 `启用或关闭Windows功能`
 ![alt](./../images/linux/ubuntu/hyper2.png)
+ 点击进去
 ![alt](./../images/linux/ubuntu/hyper3.png)
+ 选中`Hyper-V` 按照提示继续操作
+ window窗口左下角，点击搜索
 ![alt](./../images/linux/ubuntu/hyper4.png)
+ 搜索 `Hyper-V` 即可找到

> vmware
由于我之前镜像有问题，一直以为是这个有问题，导致我下载了另一个 [VMware](https://my.vmware.com/web/vmware/details?downloadGroup=WKST-1502-WIN&productId=799&rPId=28901)
+ 一路安装即可，基本没什么难度

## 镜像 [ubuntu](https://www.ubuntu.com/download)
个人下载的是 `Ubuntu Desktop`
 ![alt](./../images/linux/ubuntu/ubuntu1.png)
+ 注意下载过程一定要一气呵成，千万不要断，不然下载下来的镜像有可能受损，我之前没注意到这个，导致一直各种问题

## 软硬件各项配置
+ 系统 **win10**
+ ubuntu **18.04.1 LTS**
+ vmware **15.0.2 build-10952284**

## 开始安装
+ 开启vmware
 ![alt](./../images/linux/ubuntu/vmware1.png)
+ 当前有两种模式，网友选的是 自定义，但是我是菜鸟选的 *典型* 
 ![alt](./../images/linux/ubuntu/vmware2.png)
+ 选择下载下来的 ubuntu 镜像
 ![alt](./../images/linux/ubuntu/vmware3.png)
+ 填写账号 密码 （登录系统时会用到）
 ![alt](./../images/linux/ubuntu/vmware4.png)
+ 可以更改安装位置
 ![alt](./../images/linux/ubuntu/vmware5.png)
+ 存储大小（我只是玩玩，没有进行修改）
 ![alt](./../images/linux/ubuntu/vmware6.png)
+ 至此，虚拟机创建好了
 ![alt](./../images/linux/ubuntu/vmware7.png)
+ 点击完成时，会自动进行系统安装，等待即可
  > 这里会有几个好坑
  + 若是不是安装的进度，*不用等待*，一般两种情况，不是镜像有问题，就是配置出错
    + 镜像问题，重新下载即可
    + 配置问题，重新操作一遍

## 进入系统
若是上面都没问题，基本上就可以进入系统界面了
 ![alt](./../images/linux/ubuntu/ubuntu2.png)

+ 默认是英文

> 开启修改英文为中文的过程
+ 进入`seting`
 ![alt](./../images/linux/ubuntu/ubuntu3.png)
+ Region & Language 
 ![alt](./../images/linux/ubuntu/ubuntu4.png)
+ 开启下载 chinese中文
 ![alt](./../images/linux/ubuntu/ubuntu5.png)
 ![alt](./../images/linux/ubuntu/ubuntu6.png)
+ 若是能下载下来就基本可以了，将中文移到顶部，点击`Apply System-Wid`，重启即可
 ![alt](./../images/linux/ubuntu/ubuntu7.png)

> 问题却有很多
+ 修改前需要知道一点东西
  + vmware 切换网络连接为 `桥接`， 默认是`net` [应该够用](https://blog.csdn.net/lsr40/article/details/79411563),就不具体细说了
  + `源` 类似于`node` 下载地址是国内的还是国外的，因为 ubuntu 默认是美国的下载地址，导致在下载包等过程中，需要切换为国内地址， 国内源有很多[阿里源](https://www.aliyun.com/jiaocheng/136962.html), [清华源](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)... 个人推荐清华源，靠谱

现在就是考虑如何切换源的问题了，不然下载的都要从国外下载，不仅慢，还各种问题
> 如何切换源
+ [命令](https://www.cnblogs.com/zhangpengshou/p/3591387.html),大致这样，但是我但是 `sudo vim ...` 时，没有`vim`,也下载不下来（国外源），无奈放弃了
+ 图形界面，这个应该是最方便的，可是由于英语不行，没找到对应的位置，现在找到了
 ![alt](./../images/linux/ubuntu/ubuntu8.png)
 ![alt](./../images/linux/ubuntu/ubuntu9.png)
 ![alt](./../images/linux/ubuntu/ubuntu10.png)
 ![alt](./../images/linux/ubuntu/ubuntu11.png)
+ 其他 编辑器，我找到对应的`/etc/apt/sources.list`,直接修改源，再执行`sudo apt-get update`。若是下载字体时报错，再切换**源**(我之前用的阿里源，感觉复制网友也不知道靠不靠谱，之后换成清华源，就可以了)

## 总结
至此，就差不多了，只是一些细节问题罢了，比如切换输入法啊
+ 由于每个版本不同，导致差异性很大，有些方法明显不合，只能不断采坑，才可以
+ [共享文件](https://jingyan.baidu.com/article/54b6b9c0b6a4cd2d583b47eb.html) ，我还在研究中
+ [输入法](http://baijiahao.baidu.com/s?id=1602795097404487516&wfr=spider&for=pc)，[搜狗输入法](https://blog.csdn.net/fx_yzjy101/article/details/80243710)
+ 还有很多在研究中，不过终于可以正常使用了，练习linux指令了
