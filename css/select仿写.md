# select 模拟

目前仿写`select`的方式

+ 给`tableIndex` 来使 `div`（无法获取焦点的元素）来获取元素，这样便可以在失去焦点时，是否将下拉框收回
+ 通过 `document`的点击，来判断是否点击了当前元素
+ 利用 `input` 的自带 `click/blur` 来处理

## ui
+ [heyui](https://github.com/heyui/heyui/blob/master/src/components/select/select.vue)
+ [iview](https://github.com/iview/iview/blob/2.0/src/components/select/select.vue)
+ [element-ui](https://github.com/ElemeFE/element/blob/dev/packages/select/src/select.vue)
+ [fish-ui](https://github.com/myliang/fish-ui/blob/master/src/components/Select.vue)
+ [radon-ui](https://github.com/luojilab/radon-ui/blob/master/src/components/form/select.vue)
+ [mdui](https://github.com/zdhxiong/mdui/blob/master/src/select/js/select.js)


> 看了这么多实现方式，我更好奇具体有什么实现方式

| ui | 实现方式 |
| -- | -- |
| heyui | document -- click/contextmenu |
| iview | tableIndex/document |
| element-ui | document -- mouse |
| fish-ui | document -- click |
| radon-ui | window -- click |
| mdui | document -- click | 

## 开始仿写
> 要求
+ 只实现单选
+ 用原生实现，不基于框架
+ 没有使用上述中将下拉框独立出来
+ 只做向下下拉，没有高度不够时，可以向上或向下

> html
```
<div class="sc-select-content" data-toggle="false">
    <label for="" class="sc-select--label">下拉框</label>
    <div class="sc-input--item">
        <input id="input" type="text" class="sc-input" readonly autocomplete="off" placeholder="请选择">
        <i class="sc-select-icon"></i>
    </div>
    <div class="sc-select-item">
        <ul class="select-container">
            <li class="select-item select-item--1">1</li>
            <li class="select-item">2</li>
            <li class="select-item">3</li>
            <li class="select-item">4</li>
            <li class="select-item">5</li>
        </ul>
        <div class="arrow"></div>
    </div>
</div>
```

> css
```
* {
    box-sizing: border-box;
}

*::before,
*::after {
    box-sizing: border-box;
}

.sc-select-content {
    position: relative;
    display: inline-block;
    width: 200px;
}

.sc-input {
    width: 100%;
    height: 38px;
    outline: none;
    padding: 0 15px;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    border: 1px solid #ccc;
    padding-right: 34px;
}
.sc-input--item {
    position: relative;
}
.sc-select-icon {
    position: absolute;
    right: 8px;
    top: 16px;
    box-sizing: content-box;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid #ccc;
}
.sc-select-icon::after {
    content: '';
    position: absolute;
    right: -10px;
    bottom: 2px;
    box-sizing: content-box;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid #fff;
}

.sc-input:focus {
    border: 1px solid #FF9310;
    /* box-shadow: 0 0 0 2px rgba(255, 197, 37, 1); */
}

.sc-select-item {
    width: 100%;
    display: none;
}

.sc-select-item.active {
    display: block;
    visibility: hidden;
    opacity: 0;
    transform: translateY(10px);
    transition: all .3s cubic-bezier(.55,0,.1,1);

    position: absolute;
    padding-top: 10px;
}
.sc-select-item.active2 {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

.select-container {
    position: relative;
    padding: 6px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
}

.sc-select-item .arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 6px;
    filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
    top: 6px;
    left: 20px;
    border-bottom-color: #ebeef5;
    border-top-width: 0;
}
.sc-select-item .arrow::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    content: " ";
    border-width: 6px;
    top: 1px;
    margin-left: -6px;
    border-bottom-color: #fff;
    border-top-width: 0;
}

.select-item {
    padding: 0 15px;
    height: 38px;
    line-height: 38px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
}

.select-item:hover {
    background-color: #ddd;
}
```
**注意* **：
+ [display:none如何实现动画](https://www.cnblogs.com/yangzhou33/p/9119596.html)
+ [filter: drop-shadow](https://www.zhangxinxu.com/wordpress/2016/05/css3-filter-drop-shadow-vs-box-shadow/)

> js
```
/**
  * @description: 找到一个符合的parent
  * @param {Note} node 元素 
  * @param {string} className 元素class类名 
  * @return: Node
  */
function findParent(node, className) {
    let parent = node.parentNode
    while (parent && parent.classList && [].slice.call(parent.classList).indexOf(className) < 0) {
        parent = parent.parentNode
    }
    if (parent && parent.classList && [].slice.call(parent.classList).indexOf(className) > -1) {
        return parent
    }
}

const Input = document.getElementById('input')
Input.addEventListener('click', function (e) {
		const P = findParent(this, 'sc-select-content')
		const Select = findChild(P, 'sc-select-item')
		const toggle = P.dataset.toggle
		if (toggle === 'true') {
				Select.classList.remove('active2')
				setTimeout(function () {
						Select.classList.remove('active')
						P.dataset.toggle = false
				}, 100)
		} else {
				console.log(22)
				Select.classList.add('active')
				setTimeout(function () {
						Select.classList.add('active2')
						P.dataset.toggle = true
				}, 16)
		}
}, false)
Input.addEventListener('blur', function (e) {
		const that = this
		const P = findParent(this, 'sc-select-content')
		const Select = findChild(P, 'sc-select-item')
		document.addEventListener('click', function (e) {
				const isP = findParent(e.target, 'sc-select-content') === P
				if (!isP) {
						Select.classList.remove('active2')
						setTimeout(function () {
								Select.classList.remove('active')
								// 时间需要与 transition的时间相同为好
								P.dataset.toggle = false
						}, 100)
				}
		}, false)
		Select.addEventListener('click', function (e) {
				if (e.target.tagName.toLowerCase() === 'li') {
						that.value =  e.target.innerText
				}
				Select.classList.remove('active2')
				setTimeout(function () {
						Select.classList.remove('active')
						// 时间需要与 transition的时间相同为好
						// toggle = false
						P.dataset.toggle = false
				}, 100)
		}, false)
}, false)
```

> 上述方式
+ 虽然很low，很多方法可以提出来，偷个懒，先如此写
+ 点击，打开关闭
+ 主要利用input的`focus`和`blur`方法
+ document事件放在里面，是为了拿到上面点击的元素
+ 使用`data`来存储是否打开还是关闭的`boolean`

![效果图](https://s33.aconvert.com/convert/p3r68-cdx67/q1w7p-3jwxo.gif)

## 总结
+ 虽然实现的很粗糙，但是更多的是为了了解其他ui是如何实现的
+ 有机会再细细优化了