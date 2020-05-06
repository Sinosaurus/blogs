# web 与后台交互--websocket

`websocket` 一直都想进行了解一下，而且在实际开发过程中，经常遇到类似的问题，奈何一些缘故，被迫选择长轮询模式。思来想去还是不妥，因而自己先研究一下再说话。

## 尝试

既然选择 `websocket`，那就需要前台后台了。在这过程中，有一点犯难了。
当后台选择 node 作为服务时，有很多类似的 包 可以供选择，而相应的都提供了 client 和 server 的 demo。但作为一个前端，能用浏览器的 api 就可能少引入第三方包。因而最终定下来：

- 前台 websocket 浏览器自带的 api
- node [ws](https://github.com/websockets/ws)

## client

> [websocket](https://www.ruanyifeng.com/blog/2017/05/websocket.html) 这里还是看看阮一峰老师的文章，mdn 的文档不是很清晰

```js
// url 选择后台websocket的url
const ws = new WebSocket('ws://localhost:8080')

ws.addEventListener('open', (evt) => {
  console.log('Connection open ...')
  ws.send('Hello WebSockets!')
})

ws.addEventListener('message', (evt) => {
  const { data } = evt
  console.log('Received Message: ' + data)

  if (typeof data === String) {
    console.log(`Received data string ${data}`)
  }

  if (data instanceof ArrayBuffer) {
    console.log(`Received arraybuffer ${data}`)
  }
  // ws.close();
})

ws.addEventListener('close', (evt) => {
  console.log(evt, 'close')
})

ws.addEventListener('error', (evt) => {
  console.log(evt, 'error')
})
```

## server

> ws

```js
const WebSocketServer = require('ws').Server

const wss = new WebSocketServer({
  port: 8080,
})

wss.on('connection', (ws) => {
  ws.send('后台传入的数据')
  ws.on('message', (data) => {
    console.log(data, '前台传入的数据')
  })
})

console.log('WebSocket server is listening on ws://localhost:8080')
```

在使用过程中，需要注意 文档使用说明，目前有很多 websocket 库，就看个人喜好了。

## 总结

目前先初步了解，并知道前后台通讯使用，而不再是后台说这个不好做就不做了。这个还是很有必要接入的。
