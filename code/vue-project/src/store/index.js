import Vue from 'vue'
import Vuex from 'vuex'

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
    formInitData: {
      areaList: [
        {
          id: 0,
          name: '北京'
        },
        {
          id: 1,
          name: '上海'
        },
        {
          id: 2,
          name: '武汉'
        },
        {
          id: 3,
          name: '深圳'
        }
      ],
      typeList: [
        {
          id: 0,
          name: '美食/餐厅线上活动'
        },
        {
          id: 1,
          name: '地推活动'
        },
        {
          id: 2,
          name: '线下主题活动'
        },
        {
          id: 3,
          name: '单纯品牌曝光'
        }
      ]
    }
  },
  mutations: {

  },
  actions: {

  }
})
