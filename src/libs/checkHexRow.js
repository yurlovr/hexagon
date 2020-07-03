export default function checkHexRow(array, item) {
  console.log(item)
  console.log(array[item.row - 1])
  
  const existColorInCurrentRow = array[item.row - 1].find(elem => elem && elem.color === item.color)
  const getUpRow = () => {
    return array[item.row - 2] && array[item.row - 2].find(elem => elem && elem.color === item.color)
  }
  const getDownRow = () => {
    return array[item.row] && array[item.row].find(elem => elem && elem.color === item.color)
  }
  const upRow = getUpRow()
  const downRow = getDownRow()
  //если существует проверить диагонали
  console.log("existColorInCurrentRow", existColorInCurrentRow)
  if (!existColorInCurrentRow) {
    if (upRow && downRow) {
    let countUp = 0
    let countDown = 0
    for (let i = 0; i < item.row; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] && array[i][j].color === item.color) {
          countUp++
        }
      }
    }
    for (let i = item.row; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] && array[i][j].color === item.color) {
          countDown++
        }
      }
    }
    return countUp < countDown ? 'UP' : 'DOWN'
    }
    return false
  } else {
    const totalCellsWithColor = array[item.row - 1].filter(elem => elem && elem.color === item.color).length
    const leftPartRow = array[item.row - 1].filter(elem => elem && elem.color === item.color && elem.index < item.index).length
    const rightPartRow = array[item.row - 1].filter(elem => elem && elem.color === item.color  && elem.index > item.index).length
    console.log('totalCellsWithColor', totalCellsWithColor)
    console.log("leftPartRow", leftPartRow)
    console.log("rightPartRow", rightPartRow)
    console.log("UpRow", upRow)
    console.log("DownRow", downRow)
    if (!upRow && !downRow && totalCellsWithColor > 1 && !!leftPartRow && !!rightPartRow) {
      return leftPartRow > rightPartRow ? 'CURRENT_RIGHT': 'CURRENT_LEFT'
    }
    if (!upRow && downRow) {
      let elemExist = false
      let index = item.index
      let indx = 1
      // console.log('array', array)
      for (let i = item.row; i < array.length; i++) {
        // длинна массива
        // console.log('@@@@@@@@@@@@@')
        let prevArrayLength = array[i - 1].filter(i => !i).length
        // console.log('prevArrayLength', prevArrayLength)
        let currentArrayLength = array[i].filter(i => !i).length
        // console.log('currentArrayLength', currentArrayLength)
        if (prevArrayLength < currentArrayLength && array[i][index] && array[i][index].color === item.color) {
          elemExist = true
          break
          // console.log("prevArrayLength < currentArrayLength")
          // console.log("TRUE", elemExist)
          // console.log('elem', array[i][index])
        }
        if (prevArrayLength > currentArrayLength && array[i][item.arrayIndex - indx] && array[i][item.arrayIndex - indx].color === item.color) {
          elemExist = true
          // console.log("prevArrayLength > currentArrayLength")
          // console.log("TRUE", elemExist)
          // console.log('elem', array[i][item.arrayIndex - indx])
          break
        }
        indx++
      }
      return !elemExist && 'DIAGONAL_DOWN'
    }
  }
}