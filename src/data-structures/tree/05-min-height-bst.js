class BST1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST1(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST1(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

function constructMinHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST1(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}

export function minHeightBst(array) {
  return constructMinHeightBst(array, 0, array.length - 1);
}

let r = minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]);
console.log(r);
