<template>
  <div>
    {{type}}
  </div>
</template>

<script>
export default {
  name: 'my-test',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped></style>
