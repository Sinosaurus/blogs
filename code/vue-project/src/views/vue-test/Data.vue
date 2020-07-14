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
          <p>{{ input }}</p>
        </el-col>
        <el-col :span="12">
          <STextarea v-model="textarea" />
        </el-col>
      </el-row>
    </div>
    <div class="item">
      <Store />
    </div>
    <div class="item">
      <h1>测试 provide/inject</h1>
      <h3>{{ inject_data }}</h3>
      <input type="text" v-model="inject_data" />
      <DataTest />
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

/* 测试 provide/inject */
import DataTest from './DataTransmission/DataTest'

export default {
  components: {
    PropTest,
    STextarea,
    SInput,
    Store,
    DataTest,
  },
  data() {
    return {
      input: '',
      textarea: '',
      inject_data: '我是通过 provide / inject 的方式进行传递参数的',
    }
  },
  provide() {
    return {
      data: this,
      aa: this.inject_data,
    }
  },
  mounted() {
    const itemList = Array.from(document.querySelectorAll('.item'))
    itemList.forEach((item) => {
      item.onmouseenter = function () {
        item.classList.add('hover')
      }
      item.onmouseleave = function () {
        item.classList.remove('hover')
      }
    })
  },
}
</script>

<style lang="less">
.data-vue {
  .item {
    padding: 15px;
    min-height: 200px;
    border-radius: 10px;
    border: 1px solid #ebebeb;
    transition: 0.2s;
    &.hover {
      // box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, .5);
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    & + .item {
      margin-top: 30px;
    }
  }
}
</style>
