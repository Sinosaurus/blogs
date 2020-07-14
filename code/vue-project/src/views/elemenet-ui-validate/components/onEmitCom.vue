<!--
 * @LastEditors: Sinosaurus
-->
<template>
  <div>
    <button @click="emit">emit</button>
  </div>
</template>

<script>
export default {
  methods: {
    emit () {
      console.log(111111)
      this.$emit('onemit', 111)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
