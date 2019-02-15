<template>
  <div class="data-test">
    <h3>测试数据是否是动态修改</h3>
    <p class="title">返回的数据是 Object -- 响应式的</p>
    <p class="data">{{data._data.inject_data}}</p>
    <p class="title">返回的数据不是对象 -- 不是响应式的</p>
    <p class="data">{{aa}}</p>
    <div class="data-item">
      <p class="title">测试子组件修改参数会不会直接影响父元素数据，还是要通过 $emit 进行修改 </p>
      <input type="text" v-model="aa">
      <br />
      /* 测试结果 可以修改当前组件显示的数据 ----- |不是响应式的| ----- ， 但是会报错 */
    </div>
  </div>
</template>

<script>
export default {
  inject: ['data', 'aa'],
  created () {
    console.log(this.data)
  }
}
</script>

<style lang="less">
.data-test {
  .data {
    font-size: 18px;
    padding: 10px 0;
    color: #262626;
  }
  .data-item {
    padding: 50px;
    min-height: 150px;
    border-radius: 50px;
    border: 1px solid rgba(125, 0, 0, .8);  
  }
}
</style>