import { BST } from "./01-bst-construction";
function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}
export function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

let bst = new BST(10);
bst.insert(5);
bst.insert(2);
bst.insert(5);
bst.insert(1);
//
bst.insert(15);
bst.insert(13);
bst.insert(22);
bst.insert(14);
let result = validateBst(bst);

console.log("result = ", result);
