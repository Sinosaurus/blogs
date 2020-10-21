import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './plugins/element-uiAndVerify'
import './plugins/iview'
import './plugins/axios'
import './plugins/code-prettify'

// test
import Input from './views/test-components/input.vue'
import Select from './views/test-components/select.vue'
import Test from './views/test-components/test.vue'

Vue.component(Input.name, Input)
Vue.component(Select.name, Select)
Vue.component(Test.name, Test)

/**
 * 使用方案 jsonp
 */
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
console.log(vm, 'vm')