<template>
  <div>
    <h3>指定prop传递参数</h3>
    <pre>
      https://cn.vuejs.org/v2/guide/components-props.html
      {{vue_code_example}}
    </pre>
    <div class="s-input">
      <input type="text" v-model="p_prop">
    </div>
    <Child :child="p_prop" />
  </div>
</template>

<script>
import Child from './PropTestChild'
import SInput from '@/components/input/input'
export default {
  components: {
    Child,
    SInput
  },
  data() {
    return {
      p_prop: 'small',
      vue_code_example: `
        Vue.component('my-component', {
          props: {
            // 基础的类型检查 ('null' 匹配任何类型)
            propA: Number,
            // 多个可能的类型
            propB: [String, Number],
            // 必填的字符串
            propC: {
              type: String,
              required: true
            },
            // 带有默认值的数字
            propD: {
              type: Number,
              default: 100
            },
            // 带有默认值的对象
            propE: {
              type: Object,
              // 对象或数组默认值必须从一个工厂函数获取
              default: function () {
                return { message: 'hello' }
              }
            },
            // 自定义验证函数
            propF: {
              validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
              }
            }
          }
        })`
    }
  }
}
</script>

<style lang="less">
code,
pre {
  font-family: "Roboto Mono", Monaco, courier, monospace;
  font-size: 0.8em;
  background-color: #f8f8f8;
  padding: 1.2em 1.4em;
  line-height: 1.5em;
  margin: 0;
  border-radius: 5px;
}
.s-input {
    margin-top: 10px;
  }
</style>