export default {
  namespaced: true,
  state: {
    mode: null,
  },
  actions: {
    setMode: ({ commit }, payload) => commit('SET_MODE', payload),
    setRenderHexField: ({ commit }) => commit('SET_RENDER_HEX_FIELD'),
  },
  mutations: {
    SET_MODE: (state, payload) => { state.mode = payload.data },
    SET_RENDER_HEX_FIELD: () => {}
  },
  getters: {
    getMode: state => state.mode
  }
}
