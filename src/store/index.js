import Vue from 'vue'
import Vuex from 'vuex'
import appModule from './modules/app'
import paramModule from './modules/params'
import uiModule from './modules/ui'
import appController from './controllers/appController'
import paramsController from './controllers/paramsController'
import uiContoller from './controllers/uiController'
import router from '../router/router'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: appModule,
    params: paramModule,
    ui: uiModule
  },
  plugins: [
    appController(router),
    paramsController(),
    uiContoller(router)
  ]
})
