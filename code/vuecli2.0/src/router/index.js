import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/webpack-test',
      name: 'webpack-test',
      component: () => import('$w/WebpackTest.vue'),
      // component: () => import('$/webpack-test/WebpackTest.vue')
    },
  ],
})
