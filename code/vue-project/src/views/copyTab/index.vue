<template>
  <tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <tab-pane label="配置管理" name="second">配置管理</tab-pane>
    <tab-pane label="角色管理" name="third">角色管理</tab-pane>
    <tab-pane label="定时任务补偿" name="fourth">定时任务补偿</tab-pane>
  </tabs>
</template>

<script>
import Tabs from './components/Tabs.vue'
import TabPane from './components/TabPane.vue'
export default {
  name: 'demo-tab',
  components: {
    Tabs,
    TabPane
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab) {
      console.log(tab)
    }
  }
}
</script>

<style lang="scss" scoped></style>
