import createHexArray from '../../libs/createyHexArray'
import { HEADER_TEXT } from '../../const/const'
import random from '../../libs/random'

export default function (router) {
  return store => {
    let dispatch = store.dispatch
    let getter = store.getters
    store.subscribe((mutation) => {
      let payload = mutation.payload
      let stats = null
      const createHex = () => {
        const data = createHexArray(+getter['params/getParamL'], +getter['params/getParamM'], +getter['params/getParamN'])
        dispatch('params/setHexArray', {
          data: data.result
        })
        dispatch('params/setMiddleBlockIndex', {
          data: data.middleBlockIndex
        })
      }
      const showGoMainButton = () => {
        dispatch('ui/setGoMainPage', {
          data: true
        })
      }
      const headerTextField = () => {
        dispatch('ui/setHeaderText', {
          data: HEADER_TEXT.HEX_FIELD
        })
      }
      const autoRender = () => {
        getter['params/getHexArray'].forEach(value => {
          return value.forEach(item => {
            if (item && Math.random() * 100 < getter['params/getProbability'] * 100) {
              dispatch('params/setCheckHex', {
                data: {
                  ...item,
                  check: 1
                }
              })
            }
          })
        })
        showGoMainButton()
        headerTextField()
        router.push(`hexField`)
      }
      switch (mutation.type) {
        case 'app/SET_MODE':
          if (!payload.data) return
          if (getter['app/getMode'] === 'auto') {
            dispatch('ui/setHeaderText', {
              data: HEADER_TEXT.AUTO
            })
            router.push(`auto`)
            return
          }
          dispatch('app/setRenderHexField')
          break
        case 'app/SET_RENDER_HEX_FIELD':
          showGoMainButton()
          headerTextField()
          router.push(`hexField`)
          break
        case 'app/SET_AUTO_RENDER_HEX_FIELD':
          if (+getter['params/getParamL'] >= 10 || +getter['params/getParamM'] >= 10 || +getter['params/getParamN'] >= 10) {
            dispatch('ui/setIsLoading', {
              data: true
            })
            return
          }
          autoRender()
          break
        case 'ui/SET_IS_LOADING':
          if (payload.data) {
            setTimeout(() => {
            autoRender()
          }, 10)
        }
          break
        case 'app/SET_DEFAULT_HEX_ARRAY':
          createHex()
          dispatch('params/setProbability', {
            data: null
          })
          dispatch('params/setCheckHex', {
            data: null
          })
          dispatch('params/setTotalAmountHex', {
            data: 0
          })
          dispatch('params/setTotalHexColor', {
            data: {}
          })
          break
          case 'app/SET_STATS':
            if (getter['app/getStats'].length >= 10) {
              stats = getter['app/getStats'].filter((item, index) => index !== 0)
            } else {
              stats = getter['app/getStats']
            }
            dispatch('app/setSaveStats', {
              data: stats.concat({
                paramL: getter['params/getParamL'],
                paramM: getter['params/getParamM'],
                paramN: getter['params/getParamN'],
                probability: getter['params/getProbability'],
                totalCountHex: getter['params/getHexArray'].reduce((summ, current) => {
                                  return summ + current.filter(Boolean).length
                              }, 0),
                totalAmountHex: getter['params/getTotalAmountHex'],
                diffrentDomen: Object.keys(getter['params/getTotalHexColor']).length
              })
            })
            break
            case 'params/SET_CHANGE_SIZE':
              dispatch('params/setParamL', {
                data: random(0, 30)
              })
              dispatch('params/setParamM', {
                data: random(0, 30)
              })
              dispatch('params/setParamN', {
                data: random(0, 30)
              })
              createHex()
            break
      }
    })
  }
}