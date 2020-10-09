<template>
  <div class="slot-1">
    <h3>slot1</h3>
    <slotCom>
      <h5 slot="title">title</h5>
      <span slot="text">text</span>
      <el-button @click="handleTestSlot">slot-button</el-button>
    </slotCom>
  </div>
</template>

<script>
import slotCom from './SlotCommon'
export default {
  components: {
    slotCom
  },
  methods: {
    handleTestSlot () {
      this.$message.success('教室里打开房间里就是风大')
    }
  }
}
</script>

<style lang="less">
.slot-1 {
  background-color: #73d13d;
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 4px 2px 0 rgba(0, 0, 0, 0.3);
}
</style>
