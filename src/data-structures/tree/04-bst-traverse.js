import { BST } from "./01-bst-construction";

export function inOrderTraverse(tree, array = []) {
  // left -> curr -> right
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}
function preOrderTraverse(tree, array = []) {
  if (tree != null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}
function postOrderTraverse(tree, array = []) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
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

let inOrderTraverseResult = inOrderTraverse(bst);
let preOrderTraverseResult = preOrderTraverse(bst);
let postOrderTraverseResult = postOrderTraverse(bst);
console.log("inOrderTraverseResult =  ", inOrderTraverseResult);

console.log("preOrderTraverseResult= ", preOrderTraverseResult);

console.log("postOrderTraverseResult= ", postOrderTraverseResult);
