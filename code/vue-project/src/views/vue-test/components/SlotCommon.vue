<template>
  <div class="slot-common">
    <h1 class="title">slot common</h1>
    <slot></slot>
    <slot name="title" />
    <slot name="text" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: ''
    }
  }
}
</script>

<style lang="less">
.slot-common {
  padding: 15px;
  .title {
    color: #5c0011;
  }
}
</style>
