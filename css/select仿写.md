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