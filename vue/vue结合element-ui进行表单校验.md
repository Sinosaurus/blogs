# 表单校验 一

> 最近使用elment-ui表单进行各种校验，心力交瘁，依旧不能很好地解决，先列出自己的归类，后期一个个攻破

+ 表单校验[史](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Data_form_validation)

> 表单校验准则

+ 参考资源
    - [1](https://www.smashingmagazine.com/web-form-design-showcases-and-solutions/)
    - [2](https://www.slideshare.net/jwegesin/forms-suck/17-GestaltGestalt_says_when_your_brain)
    - [3](https://wldragon.github.io/SMValidator/tutor/tutor4.html)
    - [4](https://www.zhihu.com/question/37099220)
    - [5](https://segmentfault.com/a/1190000007575302)

+ 第一种
    - 显示明确的错误消息。
    - 放宽输入格式。
    - 指出错误发生的位置（特别是在大型表单中）。

+ 第二种
    - short
    - friendly
    - easy

### 正常录入数据进行校验

> 校验时的几种类型

+ 输入时进行校验，主要用到`input`,也可以是键盘事件，但目前而已，**`input`**是最好的

<img src="./../images/validate/validate1.gif" />

+ 输入完校验，主要利用 鼠标`blur`事件
+ 后端校验， 检验完后，在前端返显即可

## 测试表单校验插件系列 （针对vue）
+ vue [form vaildation](https://cn.vuejs.org/v2/cookbook/form-validation.html)

+ [vuelidate](https://github.com/monterail/vuelidate)
+ [VeeValidate](https://baianat.github.io/vee-validate/)
+ [async-validator](https://github.com/yiminghe/async-validator) 组件开发时会被用到（element-ui， iView等在使用）

## 表单校验流程
> 表单校验默认流程

  + vue中 `v-model.trim` 去除两侧空格
  + 正则校验(基本可以解决一切)

> 表单校验太多，我准备分批探讨。这算是开篇，后期会给予自己做的element-ui进行一系列说明。


+ [^a] 排除a 的字符
> 全局校验 局部校验
```
this.$nextTick(() => {
  console.log(this.$refs)

  this.ruleForm = {
    name: '测试表单校验 从后台请求回的数据',
    // region: 'shanghai',
    delivery: true,
    resource: '线下场地免费',
    desc: '测试数据，发现表单校验被触发，但是显示的样式明显有问题， 如何处理较好'
  }
  this.$nextTick(() => {
    this.$refs.regio.clearValidate() // 局部清楚校验规则
  })      
  // this.$refs.ruleForm.clearValidate()

})
```



