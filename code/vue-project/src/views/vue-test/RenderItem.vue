<script>
// export default {
//   name: 'render',
//   render (h) {
//     console.log(this.$scopedSlots)
//     // https://cn.vuejs.org/v2/guide/render-function.html#%E6%8F%92%E6%A7%BD
//     return h(
//       'h' + 1,
//       // this.$slots.default
//       [this.$scopedSlots.default()]
//     )
//   }
// }
</script>

<script>
// export default {
//   name: 'render',
//   render (h) {
//     console.log(this.$scopedSlots)
//     // https://cn.vuejs.org/v2/guide/render-function.html#%E6%8F%92%E6%A7%BD
//     return h(
//       'div',
//       [
//         '我会是h1的内容吗',
//         h('h3', 'h3信息'),
//         h('h6', '三十年曾与他')
//       ]
//     )
//   }
// }
</script>

<script>
const getChildrenTextContent = (children) =>
  children
    .map((node) =>
      node.children ? getChildrenTextContent(node.children) : node.text
    )
    .join('')

export default {
  name: 'render',
  render(h) {
    // build kebab-case style id
    console.log(this.$slots.default)
    const headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')
    return h('h1', [
      h(
        'a',
        {
          attrs: {
            name: headingId,
            href: '#' + headingId,
          },
        },
        this.$slots.default
      ),
    ])
  },
}
</script>
