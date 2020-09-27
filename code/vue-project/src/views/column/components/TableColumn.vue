<script>
import { TableColumn } from 'element-ui'
const renderCell = function (h) {
  return h('div', null, '111')
}
export default {
  name: 'my-table-column',
  extends: TableColumn,
  created () {
    const h = this.$createElement
    this.columnConfig.renderCell = renderCell.call(this, h)
    // https://github.com/liub1934/lb-element-table/blob/master/src/components/lb-table/forced.js
    console.log(this.columnConfig.renderCell, 123456)
  },
  mounted () {
    console.log(this.columnConfig.renderCell)
  }
}
</script>
