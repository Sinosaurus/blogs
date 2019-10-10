
export default {
  namespaced: true,
  state: {
    cachedViews: []
  },
  mutations: {
    addCacheViews (state, views) {
      if (!state.cachedViews.includes(views)) state.cachedViews.push(views)
    },
    deleteViews (state, views) {
      if (state.cachedViews.includes(views)) {
        const index = state.cachedViews.indexOf(views)
        state.cachedViews.splice(index, 1)
      }
    }
  }
}
