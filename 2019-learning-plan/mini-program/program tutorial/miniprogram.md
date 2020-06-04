# 微信小程序

小程序开发，需要按着文档已有的规则来进行开发，很多花里胡哨的样式都无法实现，因为不支持

## 开发注意细节

- [app.json](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

  - `window`
    - `navigationBarTextStyle` | 只能选择 `balck` / `white`
    - `navigationBarBackgroundColor` HexColor(16 进制颜色) 无法使用 渐变色等
  - `tabBar`
    - `list` 显示 底部/顶部 按钮的数组 **2-5**个

- `*.js` 程序配置 / 页面配置 [生命周期函数](https://www.jianshu.com/p/0078507e14d3)

  - 程序配置 `app.js`
    - 生命周期函数
      - `onLaunch` 自带参数 `onLaunch (Object) {}`
      - `onShow` 自带参数 `onShow (Object) {}`
      - `onHide`
      - `onError` 自带参数 `onShow (String error) {}`
  - 页面配置 `page.js`
    - 生命周期函数
      - `data`
      - `onLoad` 自带参数 `onLoad (Object query) { }` 在 onLoad 的参数中获取打开当前页面路径中的参数
      - `onShow` 页面显示/切入前台时触发。
      - `onReady` 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
      - `onHide` 页面隐藏/切入后台时触发
      - `onUnload` 页面卸载时触发

- [module](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/module.html)

```
const fun = value => {
  console.log(value)
}

module.exports = {
  fun
}
```

页面引入时，需要使用相对路径，绝对路劲无效

- [WXML](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/data.html)

  - 数据绑定

    - Mustache 语法 `{{}}`

      - 内容

      ```
      // wxml
      <view>{{ message }} </view>
      // js
      Page({
        data: {
          message: 'Hello WX'
        }
      })
      ```

      - 组件属性

      ```
      // wxml
      <view id="item-{{id}}"></view>
      // js
      Page({
        data: {
          id: 1
        }
      })
      ```

      - 控制属性

      ```
      // wxml
      <view wx:if="{{flag}}"></view>
      // js
      Page({
        data: {
          flag: true
        }
      })
      ```

      - 关键字

      `true`：boolean 类型的 true，代表真值。

      `false`： boolean 类型的 false，代表假值。

      ```
      <checkbox checked="{{false}}"></checkbox>
      ```

      - 运算
        在`{{}}`中进行简单地运算
        - 三元运算符
        - 算数运算
        - 逻辑判断
        - 字符串运算 `{{'text' + 'wo'}}`
        - 数据路径运算 `<view>{{object.key}} {{array[0]}}</view>`
      - 组合
        - 数组
        ```
        // wxml
        <view wx:for="{{[zero, 1, 2, 3, 4]}}">{{item}}</view>
        // js
        Page({
          data: {
            zero: 0
          }
        })
        ```
        - 对象 可以使用 es6 的 扩展运算符 `...`
        ```
        // wxml
        <template is="objectCombine" data="{{for: a, bar: b}}"></template>
        // js
        Page({
          data: {
            a: 1,
            b: 2
          }
        })
        ```

  - 列表渲染

    - `wx:for`默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`

    ```
    // wxml
    <view wx:for="{{array}}">
      {{index}}: {{item.message}}
    </view>
    // js
    Page({
      data: {
        array: [
          {
            message: '1111'
          },
          {
            message: '22222'
          }
        ]
      }
    })
    ```

    上述代码可以使用相对复杂的方式进行展示
    `wx:for-item` `wx:for-index` 可以设置自定义变量

    ```
    <view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
      {{idx}}: {{itemName.message}}
    </view>
    ```

    **注意**

    - `wx:key`
      如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 `<input>` 中的输入内容，`<switch>` 的选中状态），需要使用 wx:key 来指定列表中项目的唯一的标识符。

      - `字符串`，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变
      - 保留关键字 `*this` 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字

      > 如不提供 wx:key，会报一个 warning， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。

  - 条件渲染

    - `wx:if` `wx:else`

    ```
    <view wx:if="{{length > 5}}">1</view>
    <view wx:elif="{{length > 2}}">2</view>
    <view wx:else>3</view>
    ```

    **注意**

    > **`<block/>`** 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

    > `wx:if vs hidden` 类似 `vue` 中 `v-if` 和 `v-show`

    > `hidden` 无法作用在 `<block>` 元素上，会无效

  - 模板 `template`  
    使用流程

    1. 定义模板 `name` 属性作为 模板 的名字

    ```
    <!--
      index: int
      msg: string
      time: string
    -->
    <template name="msgItem">
      <view>
        <text>{{index}}: {{msg}}</text>
        <text>Time: {{time}}</text>
      </view>
    </template
    ```

    2. 使用模板 `is` 属性， 用来申明需要使用的模板

    ```
    // wxml
    <template is="msgItem" data="{{...item}}" />
    // js
    Page({
      data: {
        item: {
          index: 0,
          msg: 'This is a template',
          time: Date.now()
        }
      }
    })
    ```

    **`is`** 可以使用 `{{}}` 来进行动态指定渲染模板

    ```
    <template name="odd">
      <view>odd</view>
    </template>
    <template name="even">
      <view>even</view>
    </template>

    <block wx:for="{{[1, 2, 3, 4, 5]}}">
      <template is="{{item % 2 == 0 ? 'even' : 'odd'}}" />
    </block>
    ```

    3. 调用模板传参 `data`

    ```
    <template is="{{item % 2 === 0 ? 'even' : 'odd'}}" data="{{item}}"></template>
    ```

    - 传递对象, 注意最后倒数第三个 `}` 要和最后两个有空格，不然报错

    ```
    <template is="item" data="{{ ...{item: 1224} }}"></template>
    ```

    **模板有自己的作用域**

  - 事件

    - 简单介绍
      - 在组件中绑定一个事件处理函数。
      ```bindtap
      // wxml
      <view bindtap="tapName">Click me!</view>
      // js
      Page({
        tapName(event) {
          console.log(event)
        }
      })
      ```
      - 使用 `WXS` 函数响应事件
        > WXS 函数接受 2 个参数，第一个是 `event`，在原有的 `event` 的基础上加了 `event.instance` 对象，第二个参数是 `ownerInstance`，和 `event.instance` 一样是一个 `ComponentDescriptor` 对象。
      * 在组件中绑定和注册事件处理的 `WXS函数`。
      ```
      <wxs module="wxs" src="./test.wxs"></wxs>
      <view bindtap="{{wxs.tapName}}">Click me!</view>
      **注：绑定的WXS函数必须用{{}}括起来**
      ```
      - `test.wxs` 文件实现 `tapName函数`
      ```
      function tapName(event, ownerInstance) {
        console.log('tap wechat', JSON.stringify(event))
      }
      module.exports = {
        tapName
      }
      ```
      - 事件绑定和冒泡
        > `bind`事件绑定不会阻止冒泡事件向上冒泡，`catch`事件绑定可以阻止冒泡事件向上冒泡。


    + 重点介绍
      + 点击传参 `event.target.dataset` , 通过 `data-*` 来进行
      ```
      // wxml
      <view
        id="tap-1"
        bindtap="tapWX"
        data-userid="123456"
        data-user-name="sinosaurus"
      >
        btn
      </view>
      // js
      tapWX (event) {
        console.log(event, 'tap事件')
        console.log(event.target.dataset) // {userName: "sinosaurus", userid: "123456"}
      }
      ```
      **注意**：在 `wxml` 中 `data-*` 都只能是小写，即使大写也会转为小写，若想获取参数是大写，可以通过 添加 `-` (eg: `data-name-user`) 类型进行设置

- 引用

  - `import`
  - `include`

  **注意**

  1. `include` 可以引用其他 `*.wxml`中 除了 `template`以外的所有代码 _用于组件_
  2. `import` 引用其他 `*.wxml` 中含 `template` 的代码
     > 两者互补
