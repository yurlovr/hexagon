function defaultState() {
  return {
    headerText: '',
    goMain: false,
    showGoBack: false,
    isLoading: false
  }
}

export default {
  namespaced: true,
  state: {
    ...defaultState()
  },
  actions: {
    setIsLoading: ({ commit }, payload) => commit('SET_IS_LOADING', payload),
    setShowGoBack: ({ commit }, payload) => commit('SET_SHOW_GO_BACK', payload),
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
    SET_SHOW_GO_BACK: (state, payload) => { state.showGoBack = payload.data },
    SET_HEADER_TEXT: (state, payload) => { state.headerText = payload.data },
    SET_GO_MAIN_PAGE: (state, payload) => { state.goMain = payload.data },
    SET_GO_BACK: () => {},
    SET_IS_LOADING: (state, payload) => { state.isLoading = payload.data },
  },
  getters: {
    getShowGoBack: state => state.showGoBack,
    getHeaderText: state => state.headerText,
    getGoMainPage: state => state.goMain,
    getIsLoading: state => state.isLoading
  }
}
