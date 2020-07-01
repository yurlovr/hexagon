function defaultState() {
  return {
    headerText: '',
    goMain: false
  }
}

export default {
  namespaced: true,
  state: {
    ...defaultState()
  },
  actions: {
    setHeaderText: ({ commit }, payload) => commit('SET_HEADER_TEXT', payload),
    setGoBack: ({ commit }) => commit('SET_GO_BACK'),
    setDefaultState: ({ commit }) => commit('SET_DEFAULT_STATE'),
    setGoMainPage: ({ commit }, payload) => commit('SET_GO_MAIN_PAGE', payload),
  },
  mutations: {
    SET_DEFAULT_STATE: (state) => {
      const s = defaultState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    },
    SET_HEADER_TEXT: (state, payload) => { state.headerText = payload.data },
    SET_GO_MAIN_PAGE: (state, payload) => { state.goMain = payload.data },
    SET_GO_BACK: () => {}
  },
  getters: {
    getHeaderText: state => state.headerText,
    getGoMainPage: state => state.goMain
  }
}
