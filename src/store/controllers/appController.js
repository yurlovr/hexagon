export default function (router) {
  return store => {
    // let dispatch = store.dispatch
    // let getter = store.getters
    store.subscribe((mutation) => {
      let payload = mutation.payload
      // const meta = payload.meta;
      switch (mutation.type) {
        case 'app/SET_MODE':
          if (window.location.pathname.includes(payload.data)) return
          router.push(`${payload.data}`)
          break
        case 'app/SET_RENDER_HEX_FIELD':
          router.push(`hexField`)
          break
      }
    })
  }
}