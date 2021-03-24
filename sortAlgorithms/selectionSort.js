function selectionSort(arr = []) {
  if (arr.length === 0) return arr;
  let min;
  for (let i = 0; i < arr.length; i++) {
    minINdex = i;
    let j;
    for (j = 1; j < arr.length; j++) {
      console.log("min: ", arr[minINdex]);
      console.log(arr[minINdex], ">", arr[j]);
      if (arr[minINdex] > arr[j]) minINdex = j;
      console.log("min: ", arr[minINdex]);
    }
    if (arr[minINdex] !== arr[i]) {
      console.log("swap");

      let temp = arr[minINdex];
      arr[minINdex] = arr[i];
      arr[i] = temp;
      console.log(arr);
    }
  }
  return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));

module.exports = selectionSort;
