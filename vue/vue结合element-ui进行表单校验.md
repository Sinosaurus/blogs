# element-ui表单校验
> 最近使用elment-ui表单进行各种校验，心力交瘁，依旧不能很好地解决，先列出自己的归类，后期一个个攻破

+ 表单校验[史](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Data_form_validation)

> 表单校验准则 [1](https://www.smashingmagazine.com/web-form-design-showcases-and-solutions/), [2](https://www.slideshare.net/jwegesin/forms-suck/17-GestaltGestalt_says_when_your_brain)，[3](https://wldragon.github.io/SMValidator/tutor/tutor4.html), [4](https://www.zhihu.com/question/37099220), [5](https://segmentfault.com/a/1190000007575302)

+ 第一种
  + 显示明确的错误消息。
  + 放宽输入格式。
  + 指出错误发生的位置（特别是在大型表单中）。

+ 第二种
  + short
  + friendly
  + easy

### 正常录入数据进行校验
###

## 测试表单校验插件系列

+
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


> 表单校验默认流程

1. `v-model.trim` 去除两侧空格

> 正则校验

+ [^a] 排除a 的字符
