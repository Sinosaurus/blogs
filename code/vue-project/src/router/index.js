import Vue from 'vue'
import Router from 'vue-router'
import { LoadingBar } from 'iview'

const routesList = []
const req = require.context('./routes', false, /\.js$/)
const requireAll = (requireContext) =>
  requireContext.keys().map((name) => {
    const res = requireContext(name)
    routesList.push(res.default || res)
  })
requireAll(req)

Vue.use(Router)

export const routes = [...routesList]

const router = new Router({
  routes,
})

export default router

LoadingBar.config({
  color: '#FF3D23',
  failedColor: '#D00F60',
  height: 2,
})
router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach((route) => {
  LoadingBar.finish()
})
