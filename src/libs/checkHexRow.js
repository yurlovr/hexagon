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
  // const checkStep = (nextItem) => {
  //   return !nextItem.color
  // }
  const upRow = getUpRow()
  const downRow = getDownRow()
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
    if (!upRow && !downRow && totalCellsWithColor > 1 && !!leftPartRow && !!rightPartRow) {
      return leftPartRow > rightPartRow ? 'CURRENT_RIGHT': 'CURRENT_LEFT'
    }
    // if (!upRow && downRow) {

    //   console.log(middleBlockIndex)
    //   if (item.row - 1 >= middleBlockIndex) {
    //     console.log("item.row - 1 >= middleBlockIndex")
    //     let currentIndex = item.arrayIndex
    //     let noLeft = false
    //     // let savedIndex = 0
    //     let end = false
    //     let exit = true

    //     let steps = [
    //         {
    //           canDo: false,
    //           where: 'main'
    //         },
    //         {
    //           canDo: false,
    //           where: 'subMain'
    //         },
    //         {
    //           canDo: false,
    //           where: 'left'
    //         },
    //         {
    //           canDo: false,
    //           where: 'right'
    //         },
    //       ]

    //       const whereToGo = (action, i) => {
    //         switch(action){
    //           case 'main': return {i: i + 1, currentIndex}
    //           case 'subMain': return {i: i + 1, currentIndex: currentIndex + 1}
    //           case 'left': return { i, currentIndex: currentIndex - 1}
    //           case 'right': return {i, currentIndex: currentIndex + 1}
    //         }
    //       }
    //       // let leftExist = true
    //       // let rightExist = true
    //     for (let i = item.row - 1; i < array.length; i++) {
    //       // eslint-disable-next-line no-debugger
    //       console.log("I", i)
    //       // savedIndex = currentIndex
    //       steps = steps.map(step => {
    //         const index = whereToGo(step.where, i)
    //         return {
    //           ...step,
    //           canDo:  !array[index.i] ? false : array[index.i][index.currentIndex] ? checkStep(array[index.i][index.currentIndex]) : false
    //         }
    //       })
    //       if (!steps[0].canDo) {
    //         currentIndex = currentIndex + 1
    //       }
    //       if (!steps[0].canDo && !steps[1].canDo && steps[2].canDo) {
    //         // шаг влево
    //         currentIndex = currentIndex - 1
    //         i--
    //       }
    //       if (!steps[0].canDo && !steps[1].canDo && !steps[2].canDo && steps[3].canDo && noLeft) {
    //         // шаг в право
    //         currentIndex = currentIndex + 1
    //         i--
    //       }
    //       console.log('steps', steps)
    //       if (steps.every(step => !step.canDo)) {
    //         exit = false
    //         break
    //       }
    //       if (i === array.length - 1) {
    //         end = true
    //         exit = true
    //       }
    //     }
    //     console.log('END', end)
    //     console.log('EXIT', exit)
    //   } else {
    //     console.log('item.row - 1 < middleBlockIndex')
    //   }
  }
}