import getColor from '../../libs/getColor'
import getCommonLine from '../../libs/getCommonLine'

export default function () {
  return store => {
    let dispatch = store.dispatch
    let getter = store.getters
    store.subscribe((mutation) => {
      let payload = mutation.payload
      let newPartOfArray = []
      // let hexColor = null
      let possiblyColor = null
      switch (mutation.type) {
        case 'params/SET_CHECK_HEX':
          if (!payload.data) return
          if (payload.data.check) {
            dispatch('params/setTotalAmountHex', {
              data: getter['params/getTotalAmountHex'] + 1
            })
          } else {
            dispatch('params/setTotalAmountHex', {
              data: getter['params/getTotalAmountHex'] - 1
            })
          }
          if (!payload.data.color && payload.data.check) {
            // проверка соседних елементов
            possiblyColor = getCommonLine(getter['params/getHexArray'], payload.data)
            if (!possiblyColor) {
              possiblyColor = getColor()
            }
            dispatch('params/setTotalHexColor', {
              action: 'add',
              data: {
                // id: payload.data.id,
                color: possiblyColor,
                // row: payload.data.row,
                // index: payload.data.index
              }
            })
          } else {
            dispatch('params/setTotalHexColor', {
              action: 'del',
              data: {
                // id: payload.data.id,
                color: payload.data.color,
                // row: payload.data.row,
                // index: payload.data.index
              }
            })
          }
          newPartOfArray = getter['params/getHexArray'][payload.data.row - 1].map(
              item => {
                if (item && item.id === payload.data.id) {
                  const check = payload.data.check
                  return Object.assign(item, { check, color: possiblyColor || "" })
                }
                return item
              }
            )
          dispatch('params/setHexArray', {
            data: getter['params/getHexArray'].map((item, index) => {
              if (index === payload.data.row - 1) {
                return newPartOfArray
              }
              return item
            })
          })
          break
          case 'params/SET_HEX_ARRAY':
            if (getter['params/getCheckHex']) {
              dispatch('params/setCheckHex', {
                data: null
              })
            }
            break
      }
    })
  }
}