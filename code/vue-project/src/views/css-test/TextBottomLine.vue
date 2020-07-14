<template>
  <div>
    <h1>文字底部横线</h1>
    <section class="item">
      <pre class="prettyprint lang-css">
       .link {
          text-decoration: underline;
        }
      </pre>
      <a class="link" href="#/">我是横线</a>
    </section>
    <section class="item">
      <pre class="prettyprint">
        <code class="lang-html">{{item1}}</code>
        <code class="lang-html">{{css1}}</code>
      </pre>
      <div class="item-1">
        <a class="link1" href="#/"
          >我是横线我是横线我是横线我是横线我是横线我是横线我是横线我是横线我是横线</a
        >
      </div>
    </section>
    <section class="item"></section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item1: `
        <div class="item-1">
          <a
            class="link1"
            href="#/"
          >我是横线我是横线我是横线我是横线我是横线我是横线我是横线我是横线我是横线</a>
        </div>
      `,
      css1: `
        .item-1 {
          max-width: 150px;
        }
        .link1 {
          border-bottom: 2px solid #ccc;
        }
      `,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$prettyPrint.prettyPrint()
    })
  },
}
</script>

<style lang="less" scoped>
.item {
  & + & {
    margin-top: 20px;
  }
}
.link {
  text-decoration: underline;
}
.item-1 {
  max-width: 150px;
}
.link1 {
  border-bottom: 2px solid #ccc;
}
</style>
