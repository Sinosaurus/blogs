<template>
  <el-popover
    placement="bottom"
    width="600"
    trigger="click"
    popper-class="my-custom-header"
  >
    <section class="container">
      <Dragabble
        v-model="list"
        tag="el-row"
        style="display: flex; flex-wrap: wrap;"
        @update="change"
      >
        <el-col v-for="(item, key) in list" :key="key" :span="8">
          <el-checkbox v-model="item.status">{{ item.label }}</el-checkbox>
        </el-col>
      </Dragabble>
    </section>
    <el-button slot="reference">手动激活</el-button>
  </el-popover>
</template>

<script>
import Dragabble from 'vuedraggable'
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'MyCustomHeader',
  components: {
    Dragabble,
  },
  props: {
    headers: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      list: []
    }
  },
  watch: {
    headers: {
      handler (n) {
        this.list = cloneDeep(n)
      },
      immediate: true
    }
  },
  methods: {
    change () {
      this.$emit('change', cloneDeep(this.list))
    }
  }
}
</script>
<style lang="less">
.my-custom-header {
  min-height: 400px;
  .el-col {
    min-height: 60px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
