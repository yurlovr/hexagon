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
      home: true,
      notFound: false
    }
  },
  {
    path: '/select',
    name: 'select',
    component: SelectMode,
    meta: {
      home: false,
      selectMode: true,
      notFound: false
    }
  },
  {
    path: '/auto',
    name: 'autoMode',
    component: AutoMode,
    meta: {
      home: false,
      auto: true,
      notFound: false
    }
  },
  {
    path: '/hexField',
    name: 'hexField',
    component: HexField,
    meta: {
      home: false,
      notFound: false
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
  console.log('ROUTER')
    if (to.matched.some(record => record.meta.home)) {
        dispatch('params/setDefaultState')
        if (getter['app/getMode']) {
          dispatch('app/setMode', {
            data: null
          })
        }
        if (getter['app/getStats'].length) {
          dispatch('app/setSaveStats', {
            data: []
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
    } else if (to.matched.some(record => !record.meta.home && !record.meta.notFound)) {
      if (!getter['params/getParamL'] || !getter['params/getParamM'] || !getter['params/getParamN']) {
        router.push('/')
        } else {
          if (to.matched.some(record => record.meta.selectMode)) {
            dispatch('ui/setHeaderText', {
              data: HEADER_TEXT.SELECT
            })
            dispatch('ui/setShowGoBack', {
              data: true
            })
            dispatch('app/setDefaultHexArray')
          }
          if (to.matched.some(record => record.meta.auto)) {
            dispatch('app/setDefaultHexArray')
            dispatch('ui/setHeaderText', {
              data: HEADER_TEXT.AUTO
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