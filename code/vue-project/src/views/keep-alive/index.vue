<template>
  <div>
    <h3>测试keep-alive</h3>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-input placeholder="value1" v-model="form.value1"></el-input>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="value2" v-model="form.value2"></el-input>
      </el-col>
      <el-col :span="8">
        <el-input placeholder="value3" v-model="form.value3"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Keep',
  data() {
    return {
      form: {
        value1: '',
        value2: '',
        value3: '',
      },
    }
  },
  created() {
    if (!this.$store.state.cache.cachedViews.includes(this.$options.name)) {
    } // 数据请求
    this.$store.commit('cache/addCacheViews', this.$options.name)
  },
  activated() {
    // 数据请求
  },
  beforeRouteLeave(to, from, next) {
    const { name } = to
    // 进入当前路由需要缓存条件
    const childRouterMap = ['jsonp']
    const isCache = childRouterMap.includes(name)
    if (!isCache) {
      // 清空搜索条件
      this.$store.commit('keep/deleteParams')
      // 删除缓存
      this.$store.commit('cache/deleteViews', this.$options.name)
    }
    next()
  },
}
</script>
