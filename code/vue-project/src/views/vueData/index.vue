<template>
  <div>
    <h1>111111</h1>
    <baseTable :data="tableData">
      <el-table-column sortable label="test" prop="test"></el-table-column>
    </baseTable>
    <baseInheritAttrs :data="tableData" />
    <iviewTable :columns="columns1" :data="data1" />
  </div>
</template>

<script>
import baseTable from './components/BaseTable'
import baseInheritAttrs from './components/BaseInheritAttrs'
import iviewTable from './components/iviewTable'
export default {
  name: 'attrsListener',
  components: {
    baseTable,
    baseInheritAttrs,
    iviewTable
  },
  data () {
    return {
      tableData: [
        {
          test: 'test'
        }
      ],
      columns1: [
        {
          title: '姓名',
          key: 'name',
          sortable: true
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
