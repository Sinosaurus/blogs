# 滚动指定位置

> 当一个页面有很长的滚动条时，点击时便需要滚动到指定的位置。 当页面表单校验错误时，需要定位到错位的位置....都涉及到滚动条滚动到指定位置。

> 目前就我知道的而言 
+ `scroll`
+ `a`链接的锚点定位 `<a href="#条件与循环" class="headerlink" title="条件与循环" data-scroll="">条件与循环</a>`

## 修改滚动条样式
  + 微信总众平台
  > [eg]('./../code/css/browser_scroll.html')
  ```
    @media (-webkit-max-device-pixel-ratio: 1) {
      ::-webkit-scrollbar-track-piece {
        background-color: #FFF
      }
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px
      }
      ::-webkit-scrollbar-thumb {
        background-color: #c2c2c2;
        background-clip: padding-box;
        min-height: 28px
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #A0A0A0
      }
    }
  ```