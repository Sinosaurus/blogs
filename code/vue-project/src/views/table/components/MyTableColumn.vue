<script>
// https://juejin.im/post/6844903521091862542
import { TableColumn } from 'element-ui'

const renderCell = {
  slots (h, data) {
    // 接受传入的renderCell函数
    const renderCell = () => {
      return this.renderCell ? this.renderCell(h, data) : ''
    }
    return <div class="cell">{renderCell(h, data)}</div>
  }
}

export default {
  extends: TableColumn,
  name: 'my-table-column',
  props: {
    prop: [String, Number],
    cellType: {
      type: String,
      validator: function (value) {
        const valid = ['text', 'input', 'slots'].includes(value)
        !valid && console.error(`columnPlus组件不适配 ${value} 类型`)
        return valid
      }
    },
    renderCell: Function
  },
  // el-table-column 先调用在调用本身的
  created () {
    console.log(11111111111)
    if (renderCell[this.cellType]) {
      console.log(this)
      this.columnConfig.renderCell = renderCell[this.cellType].bind(this)
    }
  }
}
</script>
