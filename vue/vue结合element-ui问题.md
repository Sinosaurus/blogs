# 记录vue 与 element-ui的坑

+ 猎豹浏览器（极速模式）
> 添加loading，追加在 `body`中，loading消失时，页面背景色消失

+ 显示原因
<img src="./../images/loading/element-loading.gif" />
+ 细节展示
<img src="./../images/loading/loading-class.png" />
<img src="./../images/loading/loading-classshow.png" />

> 当body中class类名被清除时，顺带的页面背景色也没有了，只好考虑如何脱离body就可以了，正好借助loading的api，指定target到 #app中就可以了
```
let loadingInstance = Loading.service({'background': 'rgba(0, 0, 0, .6)', target: '#app'})
```
> 这样就可以了，在其他浏览器都木有问题，唯独这个猎豹，甚是奇怪
> 续集
+ 之后思量再三，直接用猎豹打开官网，居然没问题，审查元素时发现
```
html, body, #app {
  height: 100%;
  width: 100%;
}
```
> 这样就可以了，之后我重新尝试这个方法，居然好了，一脸懵逼, 有关系吗？这是什么逻辑？