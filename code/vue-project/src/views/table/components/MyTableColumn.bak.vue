<script>
export default {
  name: 'my-table-column',
  props: {
    columns: Array
  },
  render (h) {
    // TODO: 目前涉及到的主要是问题是：如何调整对应的顺序
    const columns = []
    console.log(this, 'this')
    this.columns.forEach(item => {
      columns.push(h(
        'el-table-column',
        {
          attrs: item
        }
      ))
    })
    return h('div', null, columns)
  }
}
</script>
