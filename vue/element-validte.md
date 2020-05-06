# 表单校验

> 校验都是必须的过程， 只是具体该怎么校验才比较好，是值得深掘的过程， 现在一般分两种。

- 提交前校验，在每个字段下方进行校验，及时提示
- 在提交时校验，不通过再进行提示（谷歌在注册账号时，用的是后端校验，直接将错误信息展现在对应的输入框位置）

> ==============

- 录入数据是进行表单校验
- 已有数据，初步不进行表单校验，等有数据再进行表单校验， 输入框颜色变化
- 动态创建表单 进行校验
- 表单非必填是 表单校验
- 表单依据状态动态 变为 必填项 非必填项

### 新知

- 红色星号 `el-form-item`这个组件的类名中 添加 `is-required`
- 同时校验多个表单

```

var p1=new Promise(function(resolve, reject) {
    this.$refs[form1].validate((valid) => {
        if（valid）{
            resolve();
        }
    })
});
var p2=new Promise(function(resolve, reject) {
    this.$refs[form2].validate((valid) => {
        if（valid）{
            resolve();
        }
    })
});

Promise.all([p2,p1]).then(function(){
    alert("验证通过了");
});
```

> 遇到的问题 数据是从服务器请求回来时，会触发校验，而且显示的颜色明显有问题，一些变色（显示成功）， 可是有一些却没有，显得很怪异

> 从后台请求数据，为何会触发校验

- input 输入框 不会触发校验
- select 会触发校验 （可能是因为 select 需要进行计算显示具体值，因而会触发 change 或 blur 事件）

> 验证对象的某个具体属性

```
// template
  <el-form-item prop="object.key"></el-form-item>

// javascript
  rules: {
      'object.key': [
        {required: true ...}
      ]
  }
```

### `async-validator`

- [知乎](https://zhuanlan.zhihu.com/p/32306570)

> 细节点

- 内置校验

  - `required` 进行校验是否非空 _false_ 只是不进行非空校验
  - `enum`校验器校验 rule 为{ type: 'enum', required: true, enum: ['male', 'female'] }的数据 value 非空，且其值为 rule.enum 中的一个
  - `pattern`校验器校验 rule 为{ pattern: /\s/, required: true }的数据 value 非空、且匹配正则表达式或正则字符串
  - `string`校验器校验 rule 为{ type: 'string', pattern: /\s/, required: true, min: 1, whitespace: true }的数据 value 非空、且为字符串、且其长度匹配校验条件、且匹配正则表达式或正则字符串、且不是空字符串。

- 自定义校验

  - `rule = { validator: function(rule, value, callback, source, options){} }或rule = function(rule, value, callback, source, options){}`
  - 假使多个字段共用同一个自定义校验器时，要怎样才能区分当前的校验字段是哪一个呢？在 async-validator 源码的实现中，开发者配置的 rule 数据会添加 field、fullField 属性，其中 field 就是当前校验的字段名。fullField 是当前校验字段的全名，这在深度校验的时候用到。值得说明的是，参数 source 是整个待校验的数据，value 也是 source 的一个属性。这样，async-validator 模块就为开发者提供了关联校验的能力。假使有字段 min、max 需要校验，对 min 字段，需要校验其数值不大于 max 字段的值，开发者就可以通过 source[max]属性获取到 max 字段的值，从而实现关联校验。

- Test
  - `name: [{type: 'string', validator: function() {}, field: 'name'}]` **field **
  -

### 问题

> 各种杂七杂八的思路

- 从后台请求回的数据，为何会触发校验

  - input 不会触发校验，因而只是单纯展示，没有颜色变化
  - select 却会触发校验，且颜色有变化（是否是因为 select 内部进行运行过程中，触发了校验）

- 可以验证对象的某一个属性

  - `prop="object.name" --------------- rules: { 'object.name': [.......] }`

- 控制校验

  - `this.$refs[ruleForm].clearValidate()` 可以清楚校验规则，但是却也无法再次唤醒校验了？？？

- 字段变化时，是否触发校验或者去除校验

  ```
    watch: { dialogFormVisible : function( val, oldVla) { this. $refs[ "form"]. resetFields(); } }
  ```

- validate 中代码不执行[参考](https://www.jianshu.com/p/e356dd26583e)

```
在自定义验证里面每一个判断都要有callback(),就是要保证callback()一定会执行到
```

### 经过许久的各种表单校验困惑，逼我再次寻找其他校验插件

- [element-ui-verify](https://github.com/aweiu/element-ui-verify) 目前看起来还不错

## 产品角度探讨

> 目前就问题而言，重点在于数据返显时，是否校验问题（颜色变化问题）

- 不需要校验，这样校验后的颜色便不会存在
- 校验，这样用户可以一眼知道错误信息在哪？

个人见解：就当前阐述问题而言，都是站在返显并需要编辑的角度进行考虑（若不是编辑也就不需要进行 input 了）
