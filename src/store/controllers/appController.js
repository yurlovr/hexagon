import createHexArray from '../../libs/createyHexArray'
import { HEADER_TEXT } from '../../const/const'

export default function (router) {
  return store => {
    let dispatch = store.dispatch
    let getter = store.getters
    store.subscribe((mutation) => {
      let payload = mutation.payload
      switch (mutation.type) {
        case 'app/SET_MODE':
          if (payload.data === 'hand') {
            dispatch('ui/setHeaderText', {
              data: HEADER_TEXT.HAND
            })
          }
          if (payload.data === 'auto') {
            dispatch('ui/setHeaderText', {
              data: HEADER_TEXT.AUTO
            })
          }
          if (window.location.pathname.includes(payload.data)) return
          router.push(`${payload.data}`)
          break
        case 'app/SET_RENDER_HEX_FIELD':
          dispatch('ui/setGoMainPage', {
            data: true
          })
          dispatch('ui/setHeaderText', {
            data: HEADER_TEXT.HEX_FIELD
          })
          dispatch('params/setHexArray', {
            data: createHexArray(+getter['params/getParamL'], +getter['params/getParamM'], +getter['params/getParamN'])
          })
          router.push(`hexField`)
          break
      }
    })
  }
}