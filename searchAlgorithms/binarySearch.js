function binarySearch(array = [], item) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    let el = array[middle];
    if (el === item) return middle;
    else if (el < item) left = middle + 1;
    else if (el > item) right = middle - 1;
  }
  return -1;
}

module.exports = binarySearch;
