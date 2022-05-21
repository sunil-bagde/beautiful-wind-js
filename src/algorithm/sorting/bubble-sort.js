function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(input) {
  let i;
  let j;

  for (i = 0; i < input.length - 1; i++) {
    for (j = 0; j < input.length - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        swap(input, j, j + 1);
      }
    }
  }
}

const arr = [234, 43, 55, 63, 5, 6, 235, 547];
bubbleSort(arr);
console.log("bubbleSort: ", arr);
