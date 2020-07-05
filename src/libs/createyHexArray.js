export default function createHexArray (l, m , n) {
    const result = createArray(l , m,  n)
    return result
}

function createArray(l, m , n) {
  let result = []
  let maxRows = l + m
  let d = l
  let counter = 1
  let nullElement = 0
  let row = 0
  let prevLength = 0
  let delLast = 0
  let bottomLimit = l && m >= l ? m - Math.abs(l - m) : 0
  let middleLimit = m && m >= l ? m - l : m - (l - m) > 0 ? m - (l - m) : 0  // Math.abs(m - (l - m))
  const topBlock = () => {
    for (let i = 1; i <= l; i++) {
      row++
      let array = []
      let index = 0
      for (let j = 1; j < n + l - delLast; j++) {
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
    if (m < l && i >= l-(l-m)) {
      delLast++
    }
    result.push(array)
    }
  }
  const middleBlock = () => {
    for (let i = 1; i <= middleLimit; i++) {
      row++
      let middleArray = []
      let index = 0
      for (let j = 0; j < (m < l ? n + m : n + l + nullElement); j++) {
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
      if (m < l) {
        middleArray = middleArray.filter((arr, index) =>  index !== middleArray.length - 1)
      }
      result.push(middleArray)
      if (i === middleLimit) {
        prevLength = middleArray.length
      }
    }
  }
  const bottomBlock = () => {
    for (let i = 1; i <  (m < l ? maxRows - row : bottomLimit); i++) {
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
      if (m < l) {
        i--
      }
      result.push(array)
    }
  }
  topBlock()
  middleBlock()
  bottomBlock()
  const middleBlockIndex = getMiddleBlockIndex(result)
  return { result, middleBlockIndex }
}

function getMiddleBlockIndex(array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i].every(Boolean)) {
      result = i
      break
    }
  }
  return result
}