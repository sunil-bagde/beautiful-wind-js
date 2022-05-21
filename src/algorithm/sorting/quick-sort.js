function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pIndex);
      pIndex++;
    }
  }
  swap(arr, pIndex, end);
  return pIndex;
}

function quickSort(arr, start, end) {
  let pIndex;
  if (start < end) {
    pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }
}

const arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSort(arr, 0, arr.length - 1);
console.log("quickSort: ", arr);
