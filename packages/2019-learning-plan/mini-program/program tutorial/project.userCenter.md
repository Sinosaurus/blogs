# 个人中心

参考资料如下

- [微信--小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
- [union-id](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html)
- [用户信息](https://www.youtube.com/watch?v=KW1yAGa3d28&list=PLXbU-2B80FvA5bNILAS8-zY3_KkE-PVn0&index=25)
  > 需要知道几个要点
- `union-id`和`openid`是两个不同的概念，`union-id`不同小程序公用，`openid`对应唯一小程序
- 获取用户信息时，**开发者服务器**需要去调用**微信接口服务**

## 前后台设计 [微信](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)

> 前台请求

```app.js
// 生命周期函数 onLaunch中进行请求
wx.login({
  success: res => {
    const { code } = res.data // 可以通过后台换取对应的openId...
  }
})
```

> 后台请求

```
// node hapi.js
const Config = require('config/config') // 存储一些基础信息
...
handler: async (req, res) => {
  const { code } = req.payload
  const NODE_ENV = process.env.NODE_ENV
  const { appid, secret, jwtSecret } = Config[NODE_ENV]
  // 请求微信服务器拿到对应的 openId
  axios({
    method: 'GET',
    url: 'https://api.weixin.qq.com/sns/jscode2session',
    params: {
      appid,
      secret,
      js_code: code,
      grant_type: 'authorization_code',
    }
  }).then(response => {
    const { openid, session_key } = response.data
    // 前台拿到对应的信息
    res({
      openid
    })
  }).catch(err => {
    res('请求失败')
  })
}
```

> 上面是大致效果,由于我使用了 `jsonwebtoken` 因而在请求时还需要依赖 `wx.getUserInfo`中的某些参数，因而需要进行改造

> 前端请求

```
wx.login({
  success: res => {
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    const {
      code
    } = res
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              const {
                encryptedData,
                iv
              } = res

              wx.request({
                url: baseURL + '/user/wxlogin',
                header: {
                  "content-type": "application/json"
                },
                method: 'POST',
                dataType: 'json',
                data: {
                  encryptedData,
                  iv,
                  code
                },
                success: res => {
                  // res.data 为服务端正确登录后签发的 JWT
                  try {
                    wx.setStorageSync('auth', res.data)
                  } catch (e) {
                    throw new Error(e)
                  }
                }
              })
            }
          })
        }
      }
    })
  }
})
```

后台只需要加对应的需求即可

## 总结

- 很多地方都会进行数据请求，可以进行封装一套
  - [基础封装版](https://segmentfault.com/a/1190000014789969)
  - [class 类](https://blog.csdn.net/benxiaohai529/article/details/80649296)
- 获取数据，可能需要多个`api`，这个没办法，微信已经如此，麻烦
- [后台代码](https://gitee.com/love-zhen/learning_program_2019/tree/master/node_hapi/server)
- [前端代码](https://gitee.com/love-zhen/learning_program_2019/tree/master/miniprogram/development)
