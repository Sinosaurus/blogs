<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <el-option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :label="item.label"
    ></el-option>
  </el-select>
</template>

<script>
import Clusterize from 'clusterize.js'
export default {
  name: 'my-select',
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    options() {

    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.sti_select)
      // <el-select-menu
      //   ref="popper"
      // >
      //   <el-scrollbar
      //    ref="scrollbar"
      const ref = this.findTargetElByRef('scrollbar', this.$children)
      console.log(ref, 'ref')
      this.ref = new Clusterize({
        scrollElem: ref.$el,
        contentElem: ref.$el.querySelector('.el-select-dropdown__list')
      })
    })
  },
  methods: {
    findTargetElByRef(ref, children) {
      if (!Array.isArray(children)) return null;
      for(let i = 0; i < children.length; i++) {
        const child = children[i]
        if (child.$refs[ref]) {
          return child.$refs[ref]
        } else {
          if (child.$children) {
            this.findTargetElByRef(ref, child.$children)
          }
        }
      }
    },
    handleInit() {
      
    }
  }
}
</script>
