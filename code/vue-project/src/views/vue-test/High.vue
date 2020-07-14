<template>
  <div>
    <HighOne v-model="form" />
  </div>
</template>

<script>
import HighOne from './../../components/HigeOne'
export default {
  components: {
    HighOne
  },
  data () {
    return {
      form: ''
    }
  },
  watch: {
    form (n, o) {
      console.log(n, o)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
