<template>
  <div>
    <router-link :to="{name: 'home', params: {test: h}}">home</router-link>
    <!-- <input type="text" v-model="h"> -->
    <br>
    <p>原生输入框</p>
    <input
      v-model="value"
      type="text"
      @input="setValue($event.target)"
    >

    <p>不适用v-model</p>
    <input
      type="text"
      @input="setValueNotWidthVModel($event.target)"
    >
    <h3>组件化</h3>
    <p>element-ui</p>
    <el-input
      v-model="form.accout"
      @input="changeInputValue"
    ></el-input>
    <p>iview</p>
    <Input
      v-model="form.accout"
      @input="changeInputValue"
    />
    <h1>手机归属地查询</h1>
    <p>
      https://www.iteblog.com/archives/1725.html
    </p>
    <ul class="sc-button-groups">
      <li
        v-for="(item, index) in PhoneLocationList"
        :key="index"
      >
        <button
          class="sc-button"
          @click="getPhoneLocation(item)"
        >{{item.name}}</button>
      </li>
    </ul>

    <!-- <iframe
      src="http://localhost:7070/index.html"
      width="100%"
      height="800px"
      frameborder="0"
    ></iframe> -->
    <br />
    <h2>computed ==> get/set</h2>
    <section>
      输入9和输入a都会输出a
      <input type="text" v-model="computeValue">
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://www.gov.cn/pushinfo/v150203/pushinfo.jsonp',
      h: 111,
      value: '',
      form: {
        accout: 0,
        computeValue: ''
      },
      PhoneLocationList: [
        {
          id: '1',
          name: 'iteblog',
          url: 'https://www.iteblog.com/api/mobile.php?mobile='
        },
        {
          // 可用
          id: '2',
          name: '淘宝',
          url: 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='
        },
        {
          id: '3',
          name: '财付通',
          url:
            'http://life.tenpay.com/cgi-bin/mobile/MobileQueryAttribution.cgi?chgmobile='
        },
        {
          id: '4',
          name: '360',
          url: 'http://cx.shouji.360.cn/phonearea.php?number='
        },
        {
          id: '5',
          name: '百付宝',
          url:
            'https://www.baifubao.com/callback?cmd=1059&callback=iteblog&phone='
        }
      ]
    }
  },
  computed: {
    computeValue: {
      get () {
        return this.form.computeValue
      },
      set (val) {
        this.form.computeValue = val.replace(/[9]/g, 'a')
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
      const v = val.toString().replace(/[^0-9]/gi, '')
      console.log(v)
      this.$nextTick(() => {
        // https://segmentfault.com/q/1010000009840451/a-1020000010449110
        this.form.accout = v.replace(/(\d{4})(?=\d)/g, '$1 ')
      })
    },
    setValueNotWidthVModel (target) {
      const v = target.value.toString().replace(/[^0-9]/gi, '')
      this.form.accout = v.replace(/\s/g, '')
      target.value = v.replace(/(\d{4})(?=\d)/g, '$1 ')
    },
    setValue (target) {
      // https://blog.csdn.net/wangming520liwei/article/details/53037951
      // https://blog.csdn.net/xutongbao/article/details/79287376
      const v = target.value.toString().replace(/[^0-9]/gi, '')
      console.log(v, 'old')

      // console.log(v.replace('/\D/g', ''), 'new')
      // console.log(v.replace(/[^0-9]/ig,""), 'new')
      this.form.accout = v.replace(/\s/g, '')
      this.value = v.replace(/(\d{4})(?=\d)/g, '$1 ')
    },
    getPhoneLocation (item) {
      console.log(item)
      this.$jsonp(item.url + '15549446040')
        .then(res => {})
        .catch(err => {
          console.log(err)
        })
      // this.$fetch.get(item.url + '15549446040').then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  },
  created () {
    // console.log(this.$jsonp)
    // this.$jsonp(this.url, { callbackQuery: 'callback', callbackName: 'pushInfoJsonpCallBack' }).then(res => {
    //   console.log(res, 111111111111)
    // }).catch(err => {
    //   console.log(err)
    // })
  }
}
</script>
<style lang="less">
.sc-button-groups {
  padding-top: 10px;
  display: flex;
  li + li {
    margin-left: 20px;
  }
  .sc-button {
    border-radius: 4px;
    padding: 2px 10px;
    cursor: pointer;
    transition: all 0.1s;
    outline: 0;
    &:focus {
      background-color: skyblue;
      color: #fff;
    }
    &:hover {
      background-color: pink;
      color: #333;
    }
  }
}
</style>
