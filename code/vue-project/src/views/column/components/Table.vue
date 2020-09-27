<template>
  <el-table
    width="100%"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <MyTableColumn
      v-for="(item, key) in columns"
      :key="key"
      v-bind="item"
    ></MyTableColumn>
  </el-table>
</template>

<script>
import MyTableColumn from './TableColumn'
export default {
  name: 'MyTable',
  inheritAttrs: false,
  components: {
    MyTableColumn
  },
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
