import Vue from 'vue'
import axios from 'axios'
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=UTF-8',
  'Access-Control-Allow-Origin': '*'
}
Vue.prototype.$fetch = axios
