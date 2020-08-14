<template>
  <div>
    <el-table
      v-on="$listeners"
      v-bind="$attrs"
    >

    </el-table>
  </div>
</template>

<script>
export default {
  name: 'my-table',
  inheritAttrs: false,
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped></style>
