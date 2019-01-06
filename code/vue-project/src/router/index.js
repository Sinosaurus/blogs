import Vue from 'vue'
import Router from 'vue-router'
import { LoadingBar } from 'iview'
import elValidate from './routes/element-ui-validate'
import home from './routes/home'
import about from './routes/about'
Vue.use(Router)

let routes = [
  home,
  about,
  ...elValidate
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
