import Vue from 'vue'
import Router from 'vue-router'
import { LoadingBar } from 'iview'
import elValidate from './routes/element-ui-validate'
import css from './routes/css'
import webpack from './routes/webpack'
import home from './routes/home'
import about from './routes/about'
import slot from './routes/slot'
import jsonp from './routes/jsonp'
import vueTest from './routes/vue_test'
// import vuexAlong from './routes/vuex-along'
import child from './routes/childeComponents'
Vue.use(Router)

let routes = [
  home,
  about,
  ...elValidate,
  ...css,
  ...webpack,
  ...slot,
  ...jsonp,
  ...vueTest,
  ...child
  // ...vuexAlong
]

const router = new Router({
  routes
})

export default router

LoadingBar.config({
  color: '#FF3D23',
  failedColor: '#D00F60',
  height: 2
})
router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach(route => {
  LoadingBar.finish()
})
