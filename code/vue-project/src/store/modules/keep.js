export default {
  namespaced: true,
  state: {
    count: 0,
    params: {}
  },
  mutations: {
    deleteParams (state) {
      if (JSON.stringify(state.params) === '{}') return
      for (let item of state.params) {
        switch (type(state.params[item])) {
          case 'string':
          case 'boolean':
          case 'undefined':
          case 'null':
            state.params[item] = ''
            break
          case 'number':
            state.params[item] = 0
            break
          case 'array':
            state.params[item] = []
            break
          case 'object':
            state.params[item] = {}
            break
          default:
            state.params[item] = null
            break
        }
      }
    }
  }
}

function type (val) {
  // const res = Object.prototype.toString.call(val).slice(8).replace(']', '').toLocaleLowerCase()
  const res = Object.prototype.toString
    .call(val)
    .slice(8, -1)
    .toLocaleLowerCase()
  if (res === 'object' && val === null) {
    return null
  } else {
    return res
  }
}
