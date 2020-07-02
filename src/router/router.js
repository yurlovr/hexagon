import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import SelectMode from '../components/SelectMode'
import HexField from '../components/HexField'
import HandMode from '../components/HandMode'
import AutoMode from '../components/AutoMode'
import NotFound from '../components/NotFound'
import { HEADER_TEXT } from '../const/const'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HandMode,
    meta: {
      home: true
    }
  },
  {
    path: '/select',
    name: 'select',
    component: SelectMode,
    meta: {
      home: false,
      selectMode: true
    }
  },
  {
    path: '/auto',
    name: 'autoMode',
    component: AutoMode,
    meta: {
      home: false
    }
  },
  {
    path: '/hexField',
    name: 'hexField',
    component: HexField,
    meta: {
      home: false
    }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      notFound: true
    }
  }
]

let router =  new VueRouter({
  mode: 'history',
  // base: (process.env.NODE_ENV === 'development') ? '/' : '/usersList',
  routes
})
router.beforeEach((to, from, next) => {
  let dispatch = store.dispatch
  let getter = store.getters
    if (to.matched.some(record => record.meta.home)) {
        dispatch('params/setDefaultState')
        if (getter['app/getMode']) {
          dispatch('app/setMode', {
            data: null
          })
        }
        if (getter['ui/getShowGoBack']) {
          dispatch('ui/setShowGoBack', {
            data: false
          })
        }
        if (getter['ui/getGoMainPage']) {
          dispatch('ui/setGoMainPage', {
            data: false
          })
        }
        dispatch('ui/setHeaderText', {
          data: HEADER_TEXT.HAND
        })
        next()
        return
    } else if (to.matched.some(record => !record.meta.home)) {
      if (!getter['params/getParamL'] || !getter['params/getParamM'] || !getter['params/getParamN']) {
        router.push('/')
        } else {
          if (to.matched.some(record => record.meta.selectMode)) {
            dispatch('ui/setHeaderText', {
              data:HEADER_TEXT.SELECT
            })
            dispatch('ui/setShowGoBack', {
              data: true
            })
          }
        next()
        return
      }
    } else {
        next()
    }
})

export default router