
## 资料收集

+ `offsetX` 鼠标指针相对于目标节点内边位置的X坐标
+ `offsetY` 鼠标指针相对于目标节点内边位置的Y坐标
+ `pageX` 鼠标指针相对于整个文档的X坐标
+ `pageY` 鼠标指针相对于整个文档的Y坐标
+ `screenX` 鼠标指针相对于全局（屏幕）的X坐标
+ `screenY` 鼠标指针相对于全局（屏幕）的Y坐标
+ `x` clientX的别名
+ `y` clientY的别名
+ `layerX` 返回事件相对于当前层的水平坐标。
+ `layerY` 返回事件相对于当前层的垂直坐标

## `scroll`

+ `scrollX` pageXOffset 属性是 scrollX 属性的别名： 为了跨浏览器兼容性，请使用 window.pageXOffset 代替 window.scrollX
```
var x = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

```
+ `scrollTop`
+ `scrollHeight`
+ `scrollY`

#### `scrollTop`
一个元素的 scrollTop 值是这个元素的顶部到视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。




### `function`
+ `scrollBy` 在窗口中按指定的偏移量滚动文档。 [links](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollBy)
  > 参数
  + (x-coord, y-coord)
  + options
    - top (y-coord)
    - left (x-coord)
    - behavior
      - smooth 平滑滚动
      - instant 瞬间滚动
      - auto 默认 等同于 instant
+ `scrollByLines`
+ `scrollByPages`
