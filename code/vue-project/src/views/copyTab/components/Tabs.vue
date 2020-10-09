<template>
<!-- TODO: -->
<!--  type="card"
    :closable="closable"
    :addable="addable"
    :editable="editable"
    v-model="editvalue"
    @tab-click="tabClick"
    @tab-remove="tabRemove"
    @tab-add="tabAdd"
    @edit="edit" -->
  <el-tabs
   v-bind="$attrs"
   v-on="$listeners"
   :type="type"
  >
    <slot />
  </el-tabs>
</template>

<script>
export default {
  name: 'sti-tabs',
  inheritAttrs: false,
  data () {
    return {
    }
  },

  props: {
    type: {
      type: String,
      default: 'card'
    }
    // closable: {
    //   type: Boolean,
    //   default: false
    // },
    // addable: {
    //   type: Boolean,
    //   default: false
    // },
    // editable: {
    //   type: Boolean,
    //   default: false
    // },
    // value: [String]
  }

  // watch: {
  //   editvalue(val) {
  //     this.$emit('update:value', val)
  //   },
  //   value(val) {
  //     this.editvalue = val
  //   }
  // },

}
</script>
