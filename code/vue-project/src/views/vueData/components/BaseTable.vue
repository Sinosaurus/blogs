<template>
  <div>
    <!-- https://juejin.im/post/5cbd29d4f265da03914d608d -->
    <el-table
      @sort-change="handleSortChange"
      v-on="$listeners"
      v-bind="$attrs"
      style="width=100%"
    >
      <slot />
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tables: []
    }
  },
  methods: {
    // TODO: 怎么会被调用了
    handleSortChange ({ column, prop, order }) {
      console.log(column, prop, order, 111)
      // this.$on('sort-change', 11)
    }
  }
}
</script>
