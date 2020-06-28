<!--
 * @LastEditors: Sinosaurus
-->
<template>
  <div>
    <div class="top"></div>
    <div class="bottom">
      <com />
    </div>
  </div>
</template>

<script>
import com from './components/onEmitCom'
export default {
  name: 'on-emit',
  components: {
    com
  },
  created () {
    this.$on('onemit', (v) => {
      console.log('onemit', v)
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
