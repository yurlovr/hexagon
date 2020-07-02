export default function (router) {
  return store => {
    let dispatch = store.dispatch
    store.subscribe((mutation) => {
      switch (mutation.type) {
          case 'ui/SET_GO_BACK':
            dispatch('ui/setGoMainPage', {
              data: false
            })
            router.go(-1)
            break
          case 'ui/SET_DEFAULT_STATE':
            dispatch('params/setDefaultState')
            break
      }
    })
  }
}