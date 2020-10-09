<template>
  <div>
    <slot :slot1="slot1"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slot1: '我是 slot1 测试'
    }
  }
}
</script>

<style scoped></style>
