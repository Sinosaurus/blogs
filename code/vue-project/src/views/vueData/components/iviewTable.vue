<template>
  <div>
    <Table @on-sort-change="handleSortChange" v-bind="$attrs" v-on="$listeners"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleSortChange (column, key, order) {
      console.log(column, key, order)
    }
  }
}
</script>

<style lang="scss" scoped></style>
