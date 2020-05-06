<!--
 * @LastEditors: Sinosaurus
 -->
<template>
  <div>
    <h1>I'm extends component!</h1>
    <img src="./WechatIMG2.jpeg" alt="">
  </div>
</template>

<script>
export default {
  name: 'vue-test-extends',
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<style lang="less">
  h1 {
    color: red;
  }
</style>
