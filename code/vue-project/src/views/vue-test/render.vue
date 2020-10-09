<script>
import item from './RenderItem'
export default {
  name: 'render-item',
  data () {
    return {
      code: `createElement(
          // {String | Object | Function}
          // 一个 HTML 标签名、组件选项对象，或者
          // resolve 了上述任何一种的一个 async 函数。必填项。
          'div',

          // {Object}
          // 一个与模板中属性对应的数据对象。可选。
          {
            // (详情见下一节)
          },

          // {String | Array}
          // 子级虚拟节点 (VNodes)，由 'createElement()' 构建而成，
          // 也可以使用字符串来生成“文本虚拟节点”。可选。
          [
            '先写一些文字',
            createElement('h1', '一则头条'),
            createElement(MyComponent, {
              props: {
                someProp: 'foobar'
              }
            })
          ]
        )`
    }
  },
  components: {
    item
  },
  render () {
    // jsx
    return (
      <item>
        <pre>
          <code>{this.code}</code>
        </pre>
      </item>
    )
  }
}
</script>
