export default function createHexArray (l, m , n) {
  let result = []
  let d = l
  let counter = 1
  let nullElement = 0
  let prevLength = 0
  const maxLength = l > m ? l : m
  const minLength = l > m ? m : l
  const middleLimit = m ? maxLength - minLength : 0
  const bottomLimit = l ? maxLength - Math.abs(m - l) : 0
  let row = 0
  const topBlock = () => {
    for (let i = 1; i <= l; i ++) {
      row++
      let array = []
      let index = 0
      for (let j = 1; j < n + l; j++) {
        if (i !== l && j < d) {
          array.push(null)
        } else {
          array.push({
          id: counter++,
          check: 0,
          color: '',
          index,
          arrayIndex: j - 1,
          row
        })
        index++
      }
    }
    d--
    if (i < n + l) {
      prevLength = array.length
    }
    result.push(array)
    }
  }

  const middleBlock = () => {
    for (let i = 1; i <= middleLimit; i++) {
      row++
      let middleArray = []
      let index = 0
      for (let j = 0; j < n + l + nullElement; j++) {
        if (j <= nullElement) {
          middleArray.push(null)
        } else {
          middleArray.push({
            id: counter++,
            check: 0,
            color: '',
            index,
            row,
            arrayIndex: j,
          })
          index++
        }
      }
      nullElement++
      result.push(middleArray)
      if (i === middleLimit) {
        prevLength = middleArray.length
      }
    }
  }

  const bottomBlock = () => {
    for (let i = 1; i < bottomLimit; i++) {
      row++
      let array = []
      let index = 0
      for (let j = 0; j < prevLength; j++) {
        if (j <= nullElement) {
          array.push(null)
        } else {
          array.push({
            id: counter++,
            check: 0,
            color: '',
            index,
            row,
            arrayIndex: j,
          })
          index++
        }
      }
      nullElement++
      result.push(array)
    }
  }
  topBlock()
  middleBlock()
  bottomBlock()
  let middleBlockIndex = 0
  for (let i = 0; i < result.length; i++) {
    console.log(i)
    if (result[i].every(Boolean)) {
      middleBlockIndex = i
      break
    }
  }
  return {result, middleBlockIndex}
}
