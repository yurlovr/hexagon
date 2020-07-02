function defaultState() {
  return {
    paramL: null,
    paramM: null,
    paramN: null,
    hexArray: [],
    checkedHex: null,
    totalAmountHex: 0,
    totalHexColor: {},
    probability: null
  }
}


export default {
  namespaced: true,
  state: {
    ...defaultState(),
  },
  actions: {
    setProbability: ({ commit }, payload) => commit('SET_PROBABILITY', payload),
    setTotalHexColor: ({ commit }, payload) => commit('SET_TOTAL_HEX_COLOR', payload),
    setTotalAmountHex: ({ commit }, payload) => commit('SET_TOTAL_AMOUNT_HEX', payload),
    setCheckHex: ({ commit }, payload) => commit('SET_CHECK_HEX', payload),
    setHexArray: ({ commit }, payload) => commit('SET_HEX_ARRAY', payload),
    setParamL: ({ commit }, payload) => commit('SET_PARAM_L', payload),
    setParamM: ({ commit }, payload) => commit('SET_PARAM_M', payload),
    setParamN: ({ commit }, payload) => commit('SET_PARAM_N', payload),
    setDefaultState: ({ commit }) => commit('SET_DEFAULT_STATE'),
  },
  mutations: {
    SET_DEFAULT_STATE: (state) => {
      const s =  defaultState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    },
    SET_TOTAL_HEX_COLOR: (state, payload) => {
      const currentColor = Object.keys(state.totalHexColor).find(key => key === color)
      const { color } = payload.data
      if (payload.action === 'add') {
        if (currentColor) {
          state.totalHexColor = Object.assign(state.totalHexColor, {[color]: state.totalHexColor.count + 1})
        } else {
          state.totalHexColor = Object.assign(state.totalHexColor, {[color]: 1})
        }
      }
      if (payload.action === 'del') {
        if (state.totalAmountHex[color] > 1) {
          state.totalHexColor = Object.assign(state.totalHexColor, {[color]: state.totalHexColor.count - 1})
        } else {
          const newTotalColor = { ...state.totalHexColor}
          delete newTotalColor[color]
          state.totalHexColor = { ...newTotalColor}
        }
      }
    },
    SET_PROBABILITY: (state, payload) => { state.probability = payload.data },
    SET_TOTAL_AMOUNT_HEX: (state, payload) => { state.totalAmountHex = payload.data },
    SET_CHECK_HEX: (state, payload) => { state.checkedHex = payload.data },
    SET_HEX_ARRAY: (state, payload) => { state.hexArray = payload.data },
    SET_PARAM_L: (state, payload) => { state.paramL = payload.data },
    SET_PARAM_M: (state, payload) => { state.paramM = payload.data },
    SET_PARAM_N: (state, payload) => { state.paramN = payload.data },
  },
  getters: {
    getProbability: state => state.probability,
    getTotalHexColor: state => state.totalHexColor,
    getTotalAmountHex: state => state.totalAmountHex,
    getCheckHex: state => state.checkedHex,
    getHexArray: state => state.hexArray,
    getParamL: state => state.paramL,
    getParamM: state => state.paramM,
    getParamN: state => state.paramN,
  }
}
