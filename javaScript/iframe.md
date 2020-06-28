# iframe 页面嵌套

由于目前项目基础界面，业务逻辑一样，只是细微有所差别。因而使用 iframe 来进行定制化处理。

## 如何来区分不同需求不同页面呢？

最初是想通过`url`携带参数来进行区分，但是随着需求变多，定制化也越来越细微，若是再使用 url 进行处理，有些太累赘了。因而思量再三，开始使用[`postMessage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)进行处理。

> postMessage

- 满足跨域（不同域名间通信）
- `message` 可以传递对象
- `targetOrigin` 可以指定哪些窗口接收信息

## 代码展示及描述

- 父向子传递信息

> parent.html

- html

```
  <iframe id="iframe" src="http://DOMAIN1.com/child.html"></iframe>
```

- js

```
  const iframe = document.getElementByID('iframe')
  const sendChildData = {
    style: {
      btn_color: '#fff'
    }
  }
  // 默认只要是嵌套的页面都可以接收信息 *
  iframe.contentWindow.postMessage(sendChildData, '*')
```

> child.html

- html

```
  <button id="btn">提交</button>
```

- js

```
  window.addEventListener('message', function (e) {
    if (!e.data) return
    const { style } = e.data
    const btn = document.getElementByID('btn')
    btn.style.color = style.btn_color
  }, false)
```

> 子向父传递参数

此处代码省略，简述实现原理

- 需要明确 **谁** 发送`postMessage`， 哪儿接受`message`
  - 信息发给谁，谁就使用。在父向子时，需要找到 `iframe`窗口；同理子向父，就需要找到父窗口`window.parent`
  - `message` 直接使用 `window.addEventListener('message', function () {}, false)` 来进行处理即可

## 需要注意的一些问题

- 需要 iframe 加载完，才能发送信息，否者子元素无法获取到，推荐使用 `window.onload`（因为 onload 是等所有资源加载才执行）
- 由于并非是只有你一人使用 `postMessage`,因而最好相互沟通，或者传入特定参数进行判断，不然接收多次数据，就有些凌乱了

## 使用 iframe 可以完成什么

- 常见的 iframe 逻辑触发，页面样式跟着改变，因而需要实时通知父元素，自己的高度。这在之前，更多地是使用`setInterval`定时去查询，但是多少总有些不好。而使用`postMessage`便可以简化，事件触发就调用一下发送`postMessage`事件
- 跨域通信，这个上面已有，就不细述

## 总结

- 使用时，尽量指定`origin`，这样安全些
- 鉴于使用`iframe`多少总有些安全顾虑，最新`Google`新出了一个标签[`Portals`](https://python.freelycode.com/contribution/detail/1603)，只是目前还没有正式开始
