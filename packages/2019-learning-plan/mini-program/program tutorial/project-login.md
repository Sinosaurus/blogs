# 小程序项目

简单学习了小程序的基本内容后，开始借助项目来加深巩固

## 用户中心页面

- 组件

  - `input` 默认聚焦 添加`auto-focus`属性

- api

  - `showToast`

    - title
    - icon
    - duration 持续时间
    - ...
      > 示例

    ```
      wx.showToast({
        title: '登录请求',
        icon: 'success',
        duration: '1000'
      })
    ```

    > 参数

    |   属性   |   类型   |  默认值   | 必填 |                       说明                       |
    | :------: | :------: | :-------: | :--: | :----------------------------------------------: |
    |  title   |  string  |     -     |  Y   |                    提示的内容                    |
    |   icon   |  string  | 'success' |  N   |                       图标                       |
    |  image   |  string  |     -     |  N   |  自定义图标的本地路径，image 的优先级高于 icon   |
    | duration |  number  |   1500    |  N   |                  提示的延迟时间                  |
    |   mask   | boolean  |   false   |  N   |          是否显示透明蒙层，防止触摸穿透          |
    | success  | function |     -     |  N   |              接口调用成功的回调函数              |
    |   fail   | function |     -     |  N   |              接口调用失败的回调函数              |
    | complete | function |     -     |  N   | 接口调用结束的回调函数（调用成功、失败都会执行） |

    > icon 的合法值

    |   值    |                           说明                            |
    | :-----: | :-------------------------------------------------------: |
    | success |    显示成功图标，此时 title 文本最多显示 7 个汉字长度     |
    | loading |    显示加载图标，此时 title 文本最多显示 7 个汉字长度     |
    |  none   | 不显示图标，此时 title 文本最多可显示两行，及以上版本支持 |

    > 注意

    - `wx.showLoading` 和 `wx.showToast` 同时只能显示一个
    - `wx.showToast`应与`wx.hideToast`配对使用

  - `showModal` 模态对话框
    > 参数

  |     属性     |   类型   | 默认值  | 必填 |                        说明                        |
  | :----------: | :------: | :-----: | :--: | :------------------------------------------------: |
  |    title     |  string  |    -    |  Y   |                     提示的标题                     |
  |   content    |  string  |    -    |  Y   |                     提示的内容                     |
  |  showCancel  |  string  |  true   |  N   |                  是否显示取消按钮                  |
  |  cancelText  |  number  | '取消'  |  N   |           取消按钮的文字，最多 4 个字符            |
  | cancelColor  |  string  |  #000   |  N   | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 |
  | confirmText  |  string  | '确定'  |  N   |           确认按钮的文字，最多 4 个字符            |
  | confirmColor |  string  | #576B95 |  N   | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 |
  |   success    | function |    -    |  N   |               接口调用成功的回调函数               |
  |     fail     | function |    -    |  N   |               接口调用失败的回调函数               |
  |   complete   | function |    -    |  N   |  接口调用结束的回调函数（调用成功、失败都会执行）  |

  > success

  |  属性   |  类型   |                                          说明                                          |
  | :-----: | :-----: | :------------------------------------------------------------------------------------: |
  | confirm | boolean |                           为 true 时，表示用户点击了确定按钮                           |
  | cancel  | boolean | 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭) |

  > 示例

  ```
  wx.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    success(res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
  ```

- 获取表单值
  > wxml
  ```
  <view>
    <input type="text" placeholder="邮箱" auto-focus bindinput="handleSetEmail"/>
  </view>
  ```
  > js
  ```
  page({
    data: {
      email: ''
    },
    handleSetEmail (e) {
      this.setData({
        email: e.detail.value
      })
    },
    getEamil () {
      console.log(this.data.email)
    }
  })
  ```
