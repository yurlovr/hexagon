// import { HEADER_TEXT } from '../../const/const'

export default function (router) {
  return store => {
    let dispatch = store.dispatch
    // let getter = store.getters
    store.subscribe((mutation) => {
      switch (mutation.type) {
          case 'ui/SET_GO_BACK':
            dispatch('ui/setGoMainPage', {
              data: false
            })
            // if (getter['app/getMode'] === 'auto') {
            //   dispatch('ui/setHeaderText', {
            //     data: HEADER_TEXT.AUTO
            //   })
            // }
            // if (getter['app/getMode'] === 'hand') {
            //   dispatch('ui/setHeaderText', {
            //     data: HEADER_TEXT.HAND
            //   })
            // }
            router.go(-1)
            break
          case 'ui/SET_DEFAULT_STATE':
            dispatch('params/setDefaultState')
            break
      }
    })
  }
}