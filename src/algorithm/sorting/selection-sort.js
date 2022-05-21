function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
}

const arr = [1, 2, 5, 3, 7, 6, 4, 9];
selectionSort(arr);
console.log("selectionSort: ", arr);
