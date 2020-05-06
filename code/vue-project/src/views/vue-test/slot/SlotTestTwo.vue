<template>
  <div>
    <slot name="header"></slot>
    <slot name="footer" :foot="footer"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: '我是底部数据',
    }
  },
}
</script>

<style scoped></style>
