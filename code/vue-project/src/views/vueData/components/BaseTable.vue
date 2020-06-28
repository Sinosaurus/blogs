<template>
  <div>
    <!-- https://juejin.im/post/5cbd29d4f265da03914d608d -->
    <el-table v-on="$listeners" v-bind="$attrs" style="width=100%">
      <el-table-column label="test" prop="test"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tables: [],
    }
  },
}
</script>
