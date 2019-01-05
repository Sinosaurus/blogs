import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import elementUIVerify from 'element-ui-verify'

Vue.use(ElementUI)
Vue.use(elementUIVerify, {
  errorMessageTemplate: {
    empty: '{alias}不能为空',
    length: '请输入{length}位字符',
    maxLength: '输入内容至多{maxLength}位',
    minLength: '输入内容至少{minLength}位',
    number: '请输入数字',
    int: '请输入整数',
    lt: '输入数字应小于{lt}',
    lte: '输入数字不能大于{lte}',
    gt: '输入数字应大于{gt}',
    gte: '输入数字不能小于{gte}',
    maxDecimalLength: '该输入项最多接受{maxDecimalLength}位小数',
    phone: '请输入正确的手机号',
    email: '请输入正确的邮箱',
    verifyCode: '请输入正确的6位数字'
  }
})

elementUIVerify.addRule('maxLength', maxLength => [
  {
    validator (rule, val, callback) {
      if (val.length > maxLength) {
        const errorMessage = elementUIVerify.getErrorMessage('maxLength', maxLength)
        callback(Error(errorMessage))
      } else callback()
    }
  }
])
