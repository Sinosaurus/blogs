<template>
  <div class="about">
    <h1>This is an about page</h1>
    <my-input v-model="value"></my-input>
    <component :is="componentId" type="我是否可以通过component进行参数传低"></component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
    }
  },
  computed: {
    componentId: () => 'my-test'
  }
}
</script>
