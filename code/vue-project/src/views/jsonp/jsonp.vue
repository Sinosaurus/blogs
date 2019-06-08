<template>
  <div>
    <router-link :to="{name: 'home', params: {test: h}}">home</router-link>
    <!-- <input type="text" v-model="h"> -->
    <br>
    <p>原生输入框</p>
    <input v-model="value" type="text" @input="setValue($event.target)">

    <p>不适用v-model</p>
    <input type="text" @input="setValueNotWidthVModel($event.target)">
    <h3>组件化</h3>
    <p>element-ui</p>
    <el-input v-model="form.accout" @input="changeInputValue"></el-input>
    <p>iview</p>
    <Input v-model="form.accout" @input="changeInputValue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://www.gov.cn/pushinfo/v150203/pushinfo.jsonp',
      h: 111,
      value: '',
      form: {
        accout: 0,
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.form.accout = '92309239493'.replace(/(\d{4})(?=\d)/g, '$1 ')
    }, 1500)
  },
  methods: {
    changeInputValue (val) {
      console.log(val)
      // return
      const v = val.toString().replace(/[^0-9]/ig,"")
      console.log(v)
      this.$nextTick(() => {
        // https://segmentfault.com/q/1010000009840451/a-1020000010449110
        this.form.accout = v.replace(/(\d{4})(?=\d)/g, '$1 ')
      })
    },
    setValueNotWidthVModel (target) {
      const v = target.value.toString().replace(/[^0-9]/ig,"")
      this.form.accout = v.replace(/\s/g, '')
      target.value = v.replace(/(\d{4})(?=\d)/g, '$1 ')
    },
    setValue (target) {
      // https://blog.csdn.net/wangming520liwei/article/details/53037951
      // https://blog.csdn.net/xutongbao/article/details/79287376
      const v = target.value.toString().replace(/[^0-9]/ig,"")
      console.log(v, 'old')

      // console.log(v.replace('/\D/g', ''), 'new')
      // console.log(v.replace(/[^0-9]/ig,""), 'new')
      this.form.accout = v.replace(/\s/g, '')
      this.value = v.replace(/(\d{4})(?=\d)/g, '$1 ')
    }
  },
  created() {
    // console.log(this.$jsonp)
    // this.$jsonp(this.url, { callbackQuery: 'callback', callbackName: 'pushInfoJsonpCallBack' }).then(res => {
    //   console.log(res, 111111111111)
    // }).catch(err => {
    //   console.log(err)
    // })
  }
}
</script>