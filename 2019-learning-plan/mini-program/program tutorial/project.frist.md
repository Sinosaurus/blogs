# 微信小程序开发 -- 第一步 基础搭建

项目介绍，进行新闻信息拉取展示，收藏的一个小程序

> 共有三个`tapbar`

- 头条
- 收藏
- 个人中心

## 项目结构目录

- 结构目录

```
│  app.js
│  app.json
│  app.wxss
│  project.config.json
│  weui.min.wxss  // weui样式
│
├─images
│      news.png
│      news_s.png
│      star.png
│      star_s.png
│      user.png
│      user_s.png
│
├─pages
│  ├─favorite
│  │      favorite.js
│  │      favorite.json
│  │      favorite.wxml
│  │      favorite.wxss
│  │
│  ├─index
│  │      index.js
│  │      index.json
│  │      index.wxml
│  │      index.wxss
│  │
│  ├─logs
│  │      logs.js
│  │      logs.json
│  │      logs.wxml
│  │      logs.wxss
│  │
│  └─userCenter
│          userCenter.js
│          userCenter.json
│          userCenter.wxml
│          userCenter.wxss
│
└─utils // 工具库
        util.js
```

- `app.json`配置

```
...
"tabBar": {
  "selectedColor": "#1aad16",
  "color": "#000",
  "list": [
    {
      "pagePath": "pages/index/index",
      "text": "头条",
      "iconPath": "images/news.png",
      "selectedIconPath": "images/news_s.png"
    },
    {
      "pagePath": "pages/favorite/favorite",
      "text": "收藏",
      "iconPath": "images/star.png",
      "selectedIconPath": "images/star_s.png"
    },
    {
      "pagePath": "pages/userCenter/userCenter",
      "text": "个人中心",
      "iconPath": "images/user.png",
      "selectedIconPath": "images/user_s.png"
    }
  ]
}
```

## 细节

- 使用 [weui](https://weui.io/#navbar)进行开发，但是使用的是公众号 css 进行改造，weui 的小程序版 2 年没有更新，不想使用
- `*.wxss`中引入其他`*.wxss`时，执行`@import 'url'`即可，但是在使用中，不能有 `*, ~`等选择器，否则会报错
- `window`系统下，执行`tree /f` 便可以获取项目结构信息

> **weui**使用细节 [结构](https://github.com/Tencent/weui/wiki)

```eg
<div class="weui-flex">
    <div class="weui-flex__item"><div class="placeholder">weui</div></div>
    <div class="weui-flex__item"><div class="placeholder">weui</div></div>
</div>
```

需要转为 小程序可以识别的

```
<view class="weui-flex">
    <view class="weui-flex__item"><view class="placeholder">weui</view></view>
    <view class="weui-flex__item"><view class="placeholder">weui</view></view>
</view>
```

如此便可以使用
