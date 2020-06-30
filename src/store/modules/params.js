export default {
  namespaced: true,
  state: {
    paramL: null,
    paramM: null,
    paramN: null,
  },
  actions: {
    setParamL: ({ commit }, payload) => commit('SET_PARAM_L', payload),
    setParamM: ({ commit }, payload) => commit('SET_PARAM_M', payload),
    setParamN: ({ commit }, payload) => commit('SET_PARAM_N', payload),
  },
  mutations: {
    SET_PARAM_L: (state, payload) => { state.paramL = payload.data },
    SET_PARAM_M: (state, payload) => { state.paramM = payload.data },
    SET_PARAM_N: (state, payload) => { state.paramN = payload.data },
  },
  getters: {
    getParamL: state => state.paramL,
    getParamM: state => state.paramM,
    getParamN: state => state.paramN,
  }
}
