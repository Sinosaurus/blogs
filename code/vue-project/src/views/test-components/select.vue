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
export default {
  name: 'my-input',
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
