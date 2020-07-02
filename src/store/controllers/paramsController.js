import getColor from '../../libs/getColor'
import checkHexRow from '../../libs/checkHexRow'
import getCommonLine from '../../libs/getCommonLine'

export default function () {
  return store => {
    let dispatch = store.dispatch
    let getter = store.getters
    store.subscribe((mutation) => {
      let payload = mutation.payload
      let newPartOfArray = []
      let counter = 0
      let indx = -1
      let possiblyColor = null
      const renderAfterDelColor = ({action, rowIndex, itemColor}) => {
        possiblyColor = getColor()
        newPartOfArray = []
        const limit = {}
        switch(action) {
          case 'UP':
            limit.beginFor = 0,
            limit.endFor = rowIndex
            break
          case 'DOWN':
            limit.beginFor = rowIndex,
            limit.endFor = getter['params/getHexArray'].length
            break
        }
        for (let i = limit.beginFor; i < limit.endFor; i++) {
          let array = []
          for (let j = 0; j < getter['params/getHexArray'][i].length; j++) {
            if (getter['params/getHexArray'][i][j] && getter['params/getHexArray'][i][j].color === itemColor) {
              array.push({...getter['params/getHexArray'][i][j], color: possiblyColor})
              counter++
            } else {
              array.push(getter['params/getHexArray'][i][j])
            }
          }
          newPartOfArray.push(array)
        }
        while(counter) {
          dispatch('params/setTotalHexColor', {
            action: 'add',
            data: {
              color: possiblyColor,
            }
          })
          dispatch('params/setTotalHexColor', {
            action: 'del',
            data: {
              color: itemColor,
            }
          })
          counter--
        }
      }
      switch (mutation.type) {
        case 'params/SET_CHECK_HEX':
          if (payload.data === null) return
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
                color: possiblyColor,
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
          if (payload.data.color && !payload.data.check) {
            dispatch('params/setTotalHexColor', {
              action: 'del',
              data: {
                color: payload.data.color,
              }
            })
            switch (checkHexRow(getter['params/getHexArray'], payload.data)) {
              case 'UP':
              renderAfterDelColor({
                  action: 'UP',
                  rowIndex: payload.data.row,
                  itemColor: payload.data.color
                })
                dispatch('params/setHexArray', {
                  data: getter['params/getHexArray'].map((item, index) => {
                  if (index < payload.data.row) {
                    return newPartOfArray[++indx]
                  }
                  return item
                  })
                })
                break
              case 'DOWN':
                renderAfterDelColor({
                  action: 'DOWN',
                  rowIndex: payload.data.row,
                  itemColor: payload.data.color
                })
                dispatch('params/setHexArray', {
                  data: getter['params/getHexArray'].map((item, index) => {
                  if (index >= payload.data.row) {
                    return newPartOfArray[++indx]
                  }
                  return item
                  })
                })
                break
            }
          }
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