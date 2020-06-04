import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './plugins/element-uiAndVerify'
import './plugins/iview'
import './plugins/axios'
import './plugins/code-prettify'
/**
 * 使用方案 jsonp
 */
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
