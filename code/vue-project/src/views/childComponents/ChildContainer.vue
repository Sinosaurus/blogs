<template>
  <div>
    <h1>parent</h1>
    <button @click="goChild">fdsafsaf</button>
    <router-link to="/child/one">fdsasasasasasasa</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goChild () {
      this.$router.push({
        name: 'one'
      })
    }
  },
  created () {
    alert('created--p')
  }
}
</script>
