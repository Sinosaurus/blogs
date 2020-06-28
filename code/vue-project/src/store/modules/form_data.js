export default {
  namespaced: true,
  state: {
    formInitData: {
      areaList: [
        {
          id: 0,
          name: '北京',
        },
        {
          id: 1,
          name: '上海',
        },
        {
          id: 2,
          name: '武汉',
        },
        {
          id: 3,
          name: '深圳',
        },
      ],
      typeList: [
        {
          id: 0,
          name: '美食/餐厅线上活动',
        },
        {
          id: 1,
          name: '地推活动',
        },
        {
          id: 2,
          name: '线下主题活动',
        },
        {
          id: 3,
          name: '单纯品牌曝光',
        },
      ],
    },
  },
}
