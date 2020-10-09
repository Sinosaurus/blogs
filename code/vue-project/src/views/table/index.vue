<template>
  <div>
    <my-table :columns="columns" :data="tableList"></my-table>
    <!-- <iview-table></iview-table> -->
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
// import IviewTable from './components/IviewTable.vue'
export default {
  name: 'test-table',
  components: {
    MyTable
    // IviewTable
  },
  data () {
    const that = this
    return {
      tableList: [
        {
          name: 'aa',
          age: 18,
          other: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
        },
        {
          name: 'bb',
          age: 22,
          other: 'cccccccccccccccccccccccccccccccc'
        }
      ],
      columns: [
        {
          type: 'selection',
          selectable (row, index) {
            return true
          }
        },
        {
          label: '描述',
          prop: 'other',
          minWidth: '300px'
        },
        {
          label: '姓名',
          prop: 'name',
          minWidth: '500px',
          sortable: true
        },
        {
          label: '年龄',
          prop: 'age',
          minWidth: '300px',
          fixed: 'right',
          cellType: 'slots',
          filters: [{ text: 1, value: 1 }],
          renderCell (h, scope) {
            return h(
              'el-button',
              {
                props: {
                  type: 'primary'
                },
                on: {
                  click: () => {
                    that.viewGoods(scope.row)
                  }
                }
              },
              scope.row.age
            )
          }
        }
      ]
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    viewGoods (row) {
      console.log(row)
    }
  }
}
</script>

<style lang="less" scoped></style>
