# 微信小程序
小程序开发，需要按着文档已有的规则来进行开发，很多花里胡哨的样式都无法实现，因为不支持
## 开发注意细节
+ [app.json](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE) 
  + `window`
    - `navigationBarTextStyle` | 只能选择 `balck` / `white`
    - `navigationBarBackgroundColor` HexColor(16进制颜色) 无法使用 渐变色等
  + `tabBar`
    - `list` 显示 底部/顶部 按钮的数组 **2-5**个

+ `*.js` 程序配置 / 页面配置 [生命周期函数](https://www.jianshu.com/p/0078507e14d3)
  - 程序配置 `app.js`
    - 生命周期函数
      - `onLaunch` 自带参数 `onLaunch (Object) {}`
      - `onShow` 自带参数 `onShow (Object) {}`
      - `onHide`
      - `onError` 自带参数 `onShow (String error) {}`
      - ··
  - 页面配置 `page.js`
    - 生命周期函数