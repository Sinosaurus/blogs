// https://juejin.im/entry/5ae178ebf265da0b84552035
// 注册外部ui
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
<<<<<<< HEAD
  siteData // 站点元数据
}) => {
  Vue.use(Element)
}
=======
  siteData, // 站点元数据
}) => {}
>>>>>>> 631ba472ca8cffc97f1cba016fcba68a6f7fe656
