# 使用 canvas 时，滚动屏幕闪烁

> 显示效果如下

<img src="./../images/canvas/canvas_flicker.gif" wdith="800px" />

> [谈谈 canvas 动画的闪烁问题](https://www.cnblogs.com/kenkofox/p/4950727.html), 借鉴他人所说的原因
> [详解双缓冲绘图机制 ](https://blog.csdn.net/yuhk231/article/details/54376137)

1. 擦除整个 canvas；
2. 浏览器到达重绘时间点，此时 canvas 为空白，浏览器绘制空白的 canvas；
3. 50ms 后，这一帧动画所有元件绘制完成（可能会因为动画复杂， 而消耗长时间，超过 16ms）

> 处理办法 **双缓冲**
> 实际操作原理： `创建一个临时canvas，先把下一帧动画绘制到临时canvas上。在每次真正绘制的时候，擦除正式canvas后，马上drawImage把临时canvas的内容copy过去，而这个copy过程是非常非常高效的，所以基本可以杜绝闪烁。`

```
p.update = function() {
  if (!this.cacheCanvas) {
      this.cacheCanvas = document.createElement("canvas");
      this.cacheCanvas.width = this.canvas.width;
      this.cacheCanvas.height = this.canvas.height;
  }
  updateMovieClip();    //图形变换
  var ctx = this.cacheCanvas.getContext("2d");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.save();
  ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);     //部分Android机器很奇葩，如果局部刷新会出现空白的情况
  drawMovieclip(ctx);    //绘制
  ctx.restore();
  //双缓冲，先画到临时canvas，再转到正式canvas
  ctx = this.canvas.getContext("2d");
  ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
  ctx.drawImage(this.cacheCanvas, 0, 0, this.canvas.width, this.canvas.height);
};
```

> 解决到一半时，发现我由于在 drawImage 时添加了背景图，把背景图去掉却没有问题，一脸生无可恋，我的锅吗？

- 通过各种尝试，依旧无法有效解决这个，网上推荐的方法
  - 双缓冲
  - 追加的背景图需要 超出实际 canvas 的宽高（无效）

> 个人目前的做法，鱼目混珠， 只是透明，导致一直显示的是背景图片，但是依旧有刷新的过程，只是看起来稍微好那么一丢丢。实际依旧没有解决。扎心
