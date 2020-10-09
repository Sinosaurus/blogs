<template>
  <div class="anchor-wrapper">
    <div class="link-wrapper">
      <test-anchor
        :bounds="100"
        @on-change="handleChange"
        @on-select="handleSelect"
        :style="{ right: '100px' }"
        :affix="true"
        :offset-top="30"
        :scroll-offset="100"
        show-ink
      >
        <!-- :container="scrollCon" -->
        <test-anchor-link
          v-for="link in 5"
          :key="`link${link}`"
          :href="`#title-${link}`"
          :title="`title-${link}`"
        >
        </test-anchor-link>
      </test-anchor>
    </div>
    <div ref="listWrapper" id="listWrapper" class="list-wrapper">
      <template v-for="i in 20">
        <h1 :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}` }}</h1>
        <p :key="`p${i}`">{{ `content-row-index-${i}` }}</p>
      </template>
    </div>
  </div>
</template>
<script>
import testAnchor from './components/anchor.vue'
import testAnchorLink from './components/anchor-link.vue'
export default {
  components: {
    testAnchor,
    testAnchorLink
  },
  data () {
    return {
      container: null,
      value1: '1',
      scrollCon: '',
      con: 'div',
      showNewLink: false
    }
  },
  methods: {
    handleChange (newHref, oldHref) {
      console.log(`${oldHref} => ${newHref}`)
    },
    handleSelect (href) {
      console.log(`select ${href}`)
    }
  },
  mounted () {
    this.scrollCon = this.$refs.listWrapper
  }
}
</script>
<style lang="less">
.anchor-wrapper {
  .link-wrapper {
    position: absolute;
    top: 200px;
    right: 100px;
    width: 200px;
  }
  .list-wrapper {
    // height: 600px;
    overflow: auto;
  }
  p {
    min-height: 200px;
  }
}
</style>
