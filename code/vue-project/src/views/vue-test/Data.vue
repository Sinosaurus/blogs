<template>
  <div class="data-vue">
    <h1>vue 数据传递测试</h1>
    <div class="item">
      <PropTest />
    </div>
    <div class="item">
      <el-row :gutter="20">
        <el-col :span="12">
          <SInput v-model="input" />
          <p>{{input}}</p>
        </el-col>
        <el-col :span="12">
          <STextarea v-model="textarea" />
        </el-col>
      </el-row>
    </div>
    <div class="item">
      <Store />
    </div>
  </div>
</template>

<script>
/* 测试 props 传递指定的参数 */
import PropTest from './DataTransmission/PropTest'

/* 通过 v-mode 进行组件绑定 */
import SInput from '@/components/input/input'
import STextarea from '@/components/input/textarea'

/* vuex 的使用提升 */
import Store from './DataTransmission/Store'

export default {
  components: {
    PropTest,
    STextarea,
    SInput,
    Store
  },
  data () {
    return {
      input: '',
      textarea: ''
    }
  }
}
</script>

<style lang="less">
.data-vue {
  .item {
    padding: 15px;
    min-height: 200px;
    border-radius: 10px;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, .2);
    transition: .3s linear;
    &:hover {
      box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, .5);
    }
    & + .item {
      margin-top: 30px;
    }
  }
}
</style>