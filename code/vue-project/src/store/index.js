import Vue from 'vue'
import Vuex from 'vuex'
import formData from './modules/form_data'
import test from './modules/test_store'
import elTable from './modules/el-table'
import keep from './modules/keep'
import cache from './modules/cache-views'
// import VuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    validateMenuList: [
      {
        name: '1-1',
        title: '录入数据校验',
        router: 'new',
      },
      {
        name: '1-2',
        title: '数据回显校验',
        router: 'has',
      },
      {
        name: '1-3',
        title: '动态创建校验',
        router: 'create',
      },
      {
        name: '1-4',
        title: '数据是否必填校验',
        router: 'is-r',
      },
    ],
    cssMunuList: [
      {
        name: '2-1',
        title: 'css张鑫旭测试',
        router: 'css-zxx',
      },
      {
        name: '2-2',
        title: '文字底部横线',
        router: 'css-line',
      },
    ],
    webpackList: [
      {
        name: '3-1',
        title: 'webpack添加多个变量',
        router: 'webpack-test',
      },
    ],
    vueSlotList: [
      {
        name: '4-1',
        title: 'vue--slot使用',
        router: 'slot-vue',
      },
      {
        name: '4-2',
        title: 'vue-数据传递',
        router: 'data-vue',
      },
      {
        name: '4-3',
        title: 'element表格筛选排序',
        router: 'el-table',
      },
      {
        name: '4-4',
        title: 'JSONP',
        router: 'jsonp',
      },
      {
        name: '4-5',
        title: 'El-Scrollbar',
        router: 'scroll',
      },
      {
        name: '4-6',
        title: 'vuex-along',
        router: 'vuex-along',
      },
      {
        name: '4-7',
        title: 'keep-alive',
        router: 'Keep',
      },
      {
        name: '4-8',
        title: 'xmToJson',
        router: 'xml2Json',
      },
      {
        name: '4-9',
        title: 'pdfjs',
        router: 'pdfjs',
      },
    ],
    vueTest: [
      {
        name: '5-1',
        title: 'vue动画',
        router: 'vue-animate',
      },
      {
        name: '5-2',
        title: 'render',
        router: 'render',
      },
    ],
    titleType: [
      {
        type: '1',
        title: 'element-ui表单校验系列',
      },
      {
        type: '2',
        title: 'css测试',
      },
      {
        type: '3',
        title: 'webpack添加多个变量',
      },
      {
        type: '4',
        title: 'vue使用',
      },
      {
        type: '5',
        title: 'vue动画',
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {
    formData,
    test,
    elTable,
    keep,
    cache,
  },
  // plugins: [
  //   VuexAlong({
  //     name: 'vuex-along-one',
  //     session: {
  //       list: ['formData']
  //     }
  //   })
  // ]
})
