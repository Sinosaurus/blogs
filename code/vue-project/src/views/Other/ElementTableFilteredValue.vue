<template>
  <el-table
    refs="tableLsit"
    @filter-change="filterTagTable"
  >
    <el-table-column
      label='xx'
      type="xx"
      :filters="quesType"
      :filtered-value="quesCheckList"
      :coluumn-key="'aType'"
      filter-multiple
    >
      <template slot-scope="scope">
        {{scope.row.type}}
      </template>
  </el-table>
</template>

<script>
const getQuesCheckList = _ => {
  return [0, 2, 3]
}
export default {
  data () {
    return {
      quesCheckList: getQuesCheckList()
    }
  },
  methods: {
    filterTagTable (filters) {
      let atype = filters.aType
      if (atype === 0) {
        const arr = getQuesCheckList()
        this.$refs.tableLsit.columns[2].filteredValue = arr
        this.getAll(arr)
        return
      }
      if (atype) this.getAll(atype)
    }
  }
}
</script>
