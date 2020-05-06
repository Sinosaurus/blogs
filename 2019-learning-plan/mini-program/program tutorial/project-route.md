# 微信路由跳转

## api

- `wx.switchTab`
  跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
  > 参数

|   属性   |   类型   | 必填 |                                            说明                                            |
| :------: | :------: | :--: | :----------------------------------------------------------------------------------------: |
|   url    |  string  |  Y   | 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数。 |
| success  | function |  N   |                                   接口调用成功的回调函数                                   |
|   fail   | function |  N   |                                   接口调用失败的回调函数                                   |
| complete | function |  N   |                      接口调用结束的回调函数（调用成功、失败都会执行）                      |

> 示例

app.json

```
{
  "tabBar": {
    "list": [
      {
        "pagePath": "index",
        "text": "首页"
      },
      ...
    ]
  }
}
```

page.js

```
wx.switchTab({
  // 可以是相对路径，也可以是绝对路径
  url: '/index'
})
```
