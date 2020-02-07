在开发过程中，一般都会遇到一行显示不下便进行省略号处理的方式（`我是省略文字...`）。在使用`element-ui`的表格组件时，便常常使用这个，但也一直受其BUG困扰，在`edge & firefox` 时，会在出现省略号时并不出现弹框。归根结底在于，如何判断是否**省略号**，只需解决这个问题即可

## 讨论如何判断文本是否出现**省略号**

文本出现省略号

```css
/* 单行显示 */
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
/* n行显示 */
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: n;
overflow: hidden;
```

> 如何判断文本是否出现了省略号

[scrollWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/element/scrollWidth)

目前一般是通过 `scrollWidth > clientWidth` 来判断文本出现了省略号

为此，我查看了`iview` 、`element-ui` 都是通过该方式实现，只是`element`外加了一些方式加以辅助，奈何依旧有问题

> elment
```js
const range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      const padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) +
        (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0);

      if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) {
        // tooltip 出现
      }
```

可惜在`element-ui`的`issue`中已经有好几个类似的问题，都没有加以解决

> 因而考虑除了上诉方式还有其他的形式进行判断吗？
+ [1](https://stackoverflow.com/questions/7738117/html-text-overflow-ellipsis-detection)
+ [2](https://stackoverflow.com/questions/143815/determine-if-an-html-elements-content-overflows)
+ [3](https://www.geeksforgeeks.org/how-to-determine-the-content-of-html-elements-overflow-or-not/)
+ [4](https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively/21064102#21064102)

在使用了上述的方式，感觉更加是浏览器的问题，目前这个问题只能暂时保留了。

## 总结
目前依旧无法解决这个问题，这应该也是element一直没有处理的缘故吧，虽然都说是通过上面的方式解决，可一些特殊情况依旧无法处理。暂时默认为浏览器的bug吧

[demo](https://sinosaurus.github.io/example/js-test/testTestIsOverFlow.html)



