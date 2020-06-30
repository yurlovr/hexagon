import Vue from 'vue'
import Vuex from 'vuex'
import appModule from './modules/app'
import paramModule from './modules/params'
import appController from './controllers/appController'
import router from '../router/router'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: appModule,
    params: paramModule
  },
  plugins: [
    appController(router)
  ]
})
