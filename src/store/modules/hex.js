export default {
  namespaced: true,
  state: {
    checkedHex: false,
  },
  actions: {
    setCheckHex: ({ commit }, payload) => commit('SET_CHECK_HEX', payload)
  },
  mutations: {
    SET_CHECK_HEX: (state, payload) => { state.checkedHex = payload.data }
  },
  getters: {
    getCheckHex: state => state.checkedHex,
  }
}
