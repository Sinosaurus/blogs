import Vue from 'vue'
import Router from 'vue-router'
import home from './routes/home'
import about from './routes/about'
Vue.use(Router)

let routes = [
  home,
  about
]

export default new Router({
  routes
})
