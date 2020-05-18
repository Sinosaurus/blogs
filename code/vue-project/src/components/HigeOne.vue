<template>
  <div>
    <input type="text" :value="form" @input="changeVal">
  </div>
</template>

<script>
export default {
  model: {
    prop: 'form',
    event: 'input'
  },
  props: {
    form: String
  },
  methods: {
    changeVal (e) {
      this.$emit('input', e.target.value)
    }
  },
  watch: {
    form (n, o) {
      console.log(n, o, 'child')
    }
  }
}
</script>
