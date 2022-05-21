class MaXHeap {
  buildHeap(arr, size) {
    // Math.floor((childIndex - 1) / 2);
    for (let i = Math.floor(size / 2); i >= 0; i--) {
      this.heapify(arr, i, size);
    }
  }
  heapify(arr, index, size) {
    let left = 2 * index + 1;
    let right = left + 1;

    let max = index;

    if (left <= size && arr[left] > arr[max]) {
      max = left;
    }
    if (right <= size && arr[right] > arr[max]) {
      max = right;
    }

    if (index !== max) {
      let temp = arr[max];
      arr[max] = arr[index];
      arr[index] = temp;
      this.heapify(arr, max, size);
    }
  }
}

const maxHeap = new MaXHeap();

const arr = [3, 10, 5, 6, 7, 4, 6, 8, 2, 1];
let size = arr.length;

maxHeap.buildHeap(arr, size);
// console.log("A", arr.toString());
// console.log("E", "10,8,6,7,6,4,5,3,2,1");

let newArr = [3, 12, 10, 11];
console.log("A", newArr.toString());
console.log("E", "12,11,10,3");
