<template>
  <div>
    <h1>Select</h1>
    <MySelect v-model="value" :options="options"></MySelect>
  </div>
</template>

<script>
import MySelect from './components/my-select'
export default {
  name: 'Select',
  components: {
    MySelect,
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    options() {
      const list = []
      for (let i = 0; i < 20000; i ++) {
        list.push({
          value: `第${i}个`,
          label: `第${i}个`
        })
      }
      return list;
    }
  }
}
</script>

