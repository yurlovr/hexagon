import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router'
import './assets/styles/style.scss'
import { Table,  TableColumn } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
