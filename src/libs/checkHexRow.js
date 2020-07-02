export default function checkHexRow(array, item) {
  console.log(item)
  console.log(array[item.row - 1])
  
  const existColorInCurrentRow = array[item.row - 1].filter(Boolean).find(elem => elem.color === item.color)
  //если существует проверить диагонали
  console.log("existColorInCurrentRow", existColorInCurrentRow)
  if (!existColorInCurrentRow) {
    const upRow = array[item.row - 2].filter(Boolean).find(elem => elem.color === item.color)
    const downRow = array[item.row].filter(Boolean).find(elem => elem.color === item.color)
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
  }
}