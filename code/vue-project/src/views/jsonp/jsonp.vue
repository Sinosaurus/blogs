<template>
  <div>
    <router-link :to="{name: 'home', params: {test: h}}">home</router-link>
    <input type="text" v-model="h">
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://www.gov.cn/pushinfo/v150203/pushinfo.jsonp',
      h: 111
    }
  },
  created() {
    console.log(this.$jsonp)
    this.$jsonp(this.url, { callbackQuery: 'callback', callbackName: 'pushInfoJsonpCallBack' }).then(res => {
      console.log(res, 111111111111)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>