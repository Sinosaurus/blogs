export default {
  namespaced: true,
  state: {
    flagList: [
      {
        text: '家',
        value: '家',
      },
      {
        text: '公司',
        value: '公司',
      },
    ],
    dateList: [
      {
        text: '2016-05-01',
        value: '2016-05-01',
      },
      {
        text: '2016-05-02',
        value: '2016-05-02',
      },
      {
        text: '2016-05-03',
        value: '2016-05-03',
      },
      {
        text: '2016-05-04',
        value: '2016-05-04',
      },
    ],
    // 请求数据
    filtersDate: ['2016-05-04'],
    filtersTag: [],
    sort: {
      order: '',
      prop: '',
    },
  },
  mutations: {
    setFilters_date(state, data = []) {
      state.filtersDate = data
    },
    setFilters_tag(state, data = []) {
      state.filtersTag = data
    },
    setSort(state, data = {}) {
      state.sort = data
    },
    clear(state) {
      state.filtersDate = []
      state.filtersTag = []
      state.sort = {
        order: '',
        prop: '',
      }
    },
  },
}
