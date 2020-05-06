<template>
  <div class="slot-v">
    <h1>vue-slot</h1>
    <el-row :gutter="20">
      <el-col :span="12">
        <p>slot1</p>
        <slot1 />
      </el-col>
      <el-col :span="12">
        <p>slot2</p>
        <slot2 />
      </el-col>
    </el-row>
    <br />
    <br />
    <TestSlot></TestSlot>
  </div>
</template>

<script>
import slot1 from './components/slot1'
import slot2 from './components/slot2'
import TestSlot from './slot/TestSlot'

export default {
  name: 'slot-test',
  components: {
    slot1,
    slot2,
    TestSlot,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less">
.slot-v {
  p {
    margin-top: 10px;
    padding: 5px 8px;
    border-radius: 4px 4px 0 0;
    min-height: 20px;
    background-color: #f5222d;
    color: #fff2e8;
    font-size: 20px;
  }
}
</style>
