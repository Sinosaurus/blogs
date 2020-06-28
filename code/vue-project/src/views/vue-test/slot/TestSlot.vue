<template>
  <div class="other-slot">
    <h1>vue 2.6.6 v-slot 使用</h1>
    <el-row :gutter="4">
      <el-col :span="8">
        <slot1>
          <h2>slot1</h2>
          <template v-slot="{ slot1 }">
            slot1 传递的参数 === {{ slot1 }} <br />
            当前组件 === {{ parent }}
          </template>
        </slot1>
      </el-col>
      <el-col :span="8">
        <h2>slot2 具名插槽</h2>
        <slot2>
          <template v-slot:header>
            落花有意随流水
            <br />
          </template>
          <template v-slot:footer="{ foot }">
            {{ foot }}
          </template>
        </slot2>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script>
import slot1 from './SlotTestOne'
import slot2 from './SlotTestTwo'
export default {
  components: {
    slot1,
    slot2,
  },
  data() {
    return {
      parent: '我是套用 slot 的数据',
    }
  },
}
</script>

<style lang="less">
.other-slot {
  padding: 5px;
  min-height: 200px;
  border-radius: 10px;
  box-shadow: -2px 2px 9px #333333, 0px 4px 8px #331104;
  background: linear-gradient(90deg, #ffccc7, #ff4d4f);
}
</style>
