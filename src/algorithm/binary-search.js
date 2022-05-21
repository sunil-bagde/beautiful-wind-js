function binarySeach(arr, start, end, key) {
  if (arr.length < 1) {
    return arr;
  }

  while (start <= end) {
    let mid = Math.floor(start + end / 2);
    if (arr[mid] === key) {
      return true;
    }
    if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
const arr = [2, 4, 6, 7, 8, 10];
const result = binarySeach(arr, 0, arr.length, 7);
console.log("result ", result);
