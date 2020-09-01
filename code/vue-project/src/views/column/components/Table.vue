<template>
  <el-table
    width="100%"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <el-table-column
      v-for="(item, key) in columns"
      :key="key"
      v-bind="item"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'MyTable',
  inheritAttrs: false,
  props: {
    columns: {
      default: () => [],
      type: Array
    }
  },
  data () {
    return {

    }
  }
}
</script>
