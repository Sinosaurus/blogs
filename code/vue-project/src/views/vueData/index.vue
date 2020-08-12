<template>
  <div>
    <h1>111111</h1>
    <baseTable :data="tableData">
      <el-table-column sortable label="test" prop="test"></el-table-column>
    </baseTable>
    <baseInheritAttrs :data="tableData" />
  </div>
</template>

<script>
import baseTable from './components/BaseTable'
import baseInheritAttrs from './components/BaseInheritAttrs'
export default {
  name: 'attrsListener',
  components: {
    baseTable,
    baseInheritAttrs,
  },
  data() {
    return {
      tableData: [
        {
          test: 'test',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped></style>
