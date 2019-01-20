import Vue from 'vue'
import Vuex from 'vuex'
import formData from './modules/form_data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    validateMenuList: [
      {
        name: '1-1',
        title: '录入数据校验',
        router: 'new'
      },
      {
        name: '1-2',
        title: '数据回显校验',
        router: 'has'
      },
      {
        name: '1-3',
        title: '动态创建校验',
        router: 'create'
      },
      {
        name: '1-4',
        title: '数据是否必填校验',
        router: 'is-r'
      }
    ],
    cssMunuList: [
      {
        name: '2-1',
        title: 'css张鑫旭测试',
        router: 'css-zxx'
      }
    ],
    webpackList: [
      {
        name: '3-1',
        title: 'webpack添加多个变量',
        router: 'webpack-test'
      }
    ],
    titleType: [
      {
        type: '1',
        title: 'element-ui表单校验系列'
      },
      {
        type: '2',
        title: 'css测试'
      },
      {
        type: '3',
        title: 'webpack添加多个变量'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    formData
  }
})
