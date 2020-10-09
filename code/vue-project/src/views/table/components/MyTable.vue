<template>
  <div>
    <el-table
      v-on="$listeners"
      v-bind="$attrs"
    >
      <my-table-column
        v-for="(item, key) in columns"
        :key="key"
        v-bind="item"
      ></my-table-column>
    </el-table>
  </div>
</template>

<script>
import MyTableColumn from './MyTableColumn.vue'
export default {
  name: 'my-table',
  inheritAttrs: false,
  components: {
    MyTableColumn
  },
  props: {
    columns: Array
  },
  data () {
    return {
    }
  },
  methods: {
    viewGoods (row) {
      console.log(row)
    }
  }
}
</script>
