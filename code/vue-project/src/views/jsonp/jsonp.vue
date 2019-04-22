<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://www.gov.cn/pushinfo/v150203/pushinfo.jsonp'
    }
  },
  created() {
    this.$jsonp(this.url, { callbackQuery: 'callback', callbackName: 'pushInfoJsonpCallBack' }).then(res => {
      console.log(res, 111111111111)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>