<template>
  <div>
    <my-custom-header @change="handleChange" :headers="columns" />
    <my-table :data="tableData" :columns="columns" />
  </div>
</template>

<script>
import MyCustomHeader from './components/TableCustom'
import MyTable from './components/Table'
export default {
  name: 'column',
  components: {
    MyTable,
    MyCustomHeader
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          city: '黄冈',
          province: '湖北',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          city: '黄冈',
          province: '湖北',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          city: '黄冈',
          province: '湖北',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          city: '黄冈',
          province: '湖北',
        },
      ],
      columns: [
        {
          label: '日期',
          prop: 'date',
          width: '200px',
          status: true
        },
        {
          label: '姓名',
          prop: 'name',
          status: true
        },
        {
          label: '省份',
          prop: 'province',
          status: true
        },
        {
          label: '城市',
          prop: 'city',
          status: true
        },
        {
          label: '地址',
          prop: 'address',
          // fixed: 'right',
          status: true
        },
      ],
    }
  },
  methods: {
    handleChange (list) {
      this.columns = list
      console.log(this.columns)
    }
  }
}
</script>
