<template>
  <div>
    <my-table :columns="columns" :data="tableList"></my-table>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  name: 'test-table',
  components: {
    MyTable
  },
  data () {
    return {
      tableList: [],
      columns: [

      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
