<template>
  <Option
    :value="source.value"
    :label="source.label"
  ></Option>
</template>

<script>
import { Option } from 'element-ui'
export default {
  components: {
    Option,
  },
  props: {
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

