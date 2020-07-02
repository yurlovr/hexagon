export default {
  namespaced: true,
  state: {
    mode: null,
    stats: []
  },
  actions: {
    setMode: ({ commit }, payload) => commit('SET_MODE', payload),
    setRenderHexField: ({ commit }) => commit('SET_RENDER_HEX_FIELD'),
    setAutoRenderHexField: ({ commit }) => commit('SET_AUTO_RENDER_HEX_FIELD'),
    setDefaultHexArray: ({ commit }) => commit('SET_DEFAULT_HEX_ARRAY'),
    setStats: ({ commit }) => commit('SET_STATS'),
    setSaveStats: ({ commit }, payload) => commit('SAVE_STATS', payload),
  },
  mutations: {
    SET_MODE: (state, payload) => { state.mode = payload.data },
    SET_RENDER_HEX_FIELD: () => {},
    SET_AUTO_RENDER_HEX_FIELD: () => {},
    SET_DEFAULT_HEX_ARRAY: () => {},
    SET_STATS: () => {},
    SAVE_STATS: (state, payload) => {state.stats = payload.data },
  },
  getters: {
    getMode: state => state.mode,
    getStats: state => state.stats
  }
}
