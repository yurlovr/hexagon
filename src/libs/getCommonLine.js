export default function getCommonLine(array, item) {
  const currenRow = array[item.row - 1]

  const possiblyValues = [
    {value: array[item.row - 2] && array[item.row - 2].find(value => value && value.index === item.index + getOffsetUp(currenRow,  array[item.row - 2]) + 1)},
    {value: array[item.row - 2] && array[item.row - 2].find(value => value && value.index === item.index + getOffsetUp(currenRow,  array[item.row - 2]))},
    {value: array[item.row - 1].find(value => value && value.index === item.index - 1)},
    {value: array[item.row - 1].find(value => value && value.index === item.index + 1)},
    {value: array[item.row] && array[item.row].find(value => value && value.index === item.index + getOffsetDown(currenRow,  array[item.row]) - 1)},
    {value: array[item.row] && array[item.row].find(value => value && value.index === item.index + getOffsetDown(currenRow,  array[item.row]))},
  ]
  if (possiblyValues.some(item => item.value && item.value.color)) {
    return shuffle(possiblyValues).find(item => item.value && item.value.color).value.color
  }
}

function getOffsetUp(array1, array2) {
  if (array1.filter(Boolean).length > array2.filter(Boolean).length) return -1
  if (array1.filter(Boolean).length < array2.filter(Boolean).length) return  0
  return 0
}

function getOffsetDown(array1, array2) {
  if (array1.filter(Boolean).length > array2.filter(Boolean).length) return 0
  if (array1.filter(Boolean).length < array2.filter(Boolean).length) return  1
  return 0
}

function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}