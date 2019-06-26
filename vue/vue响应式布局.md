# vue 响应式布局

可使网站在不同的设备（从桌面计算机显示器到移动电话或其他移动产品设备）上浏览时对应不同分辨率皆有适合的呈现，减少用户进行缩放、平移和滚动等操作行为

## 效果图
+ [media](https://mediaqueri.es/)

## 响应式布局的要求 （Responsive Web Design ＝ RWD， Adaptive Web Design ＝ AWD）

> 第一种

+ 响应式界面的四个层次
    + 同一页面在不同大小和比例上看起来都应该是舒适的；
    + 同一页面在不同分辨率上看起来都应该是合理的；
    + 同一页面在不同操作方式（如鼠标和触屏）下，体验应该是统一的；
    + 同一页面在不同类型的设备（手机、平板、电脑）上，交互方式应该是符合习惯的

+ 响应式界面的基本规则
    + 内容区块可伸缩：内容区块的在一定程度上能够自动调整，以确保填满整个页面
    ![pic](https://user-gold-cdn.xitu.io/2018/5/14/1635eff014eba6cb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

    + 内容区块可自由排布：当页面尺寸变动较大时，能够减少/增加排布的列数
    ![pic](https://user-gold-cdn.xitu.io/2018/5/14/1635f008535b1a01?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

    + 边距适应：到页面尺寸发生更大变化时，区块的边距也应该变化
    ![pic](https://user-gold-cdn.xitu.io/2018/5/14/1635f018a956e02e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

    + 图片适应：对于常见的宽度调整，图片在隐去两侧部分时，依旧保持美观可用
    ![pic](https://user-gold-cdn.xitu.io/2018/5/14/1635f0251e3d988a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

    + 内容能够自动隐藏/部分显示：如在电脑上显示的的大段描述文本，在手机上就只能少量显示或全部隐藏
    ![pic](0\https://user-gold-cdn.xitu.io/2018/5/14/1635f03376630dc1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

    + 导航和菜单能自动折叠：展开还是收起，应该根据页面尺寸来判断
    ![pic](https://user-gold-cdn.xitu.io/2018/5/14/1635f03d2f4b9d29?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

    + 放弃使用像素作为尺寸单位(或者说是不同分辨率下px需要进行改变)

## 细节
  + 图标做成字体    