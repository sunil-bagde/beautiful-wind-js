import { BST } from "./01-bst-construction";
function closestValue(tree, target, closest) {
  if (tree == null) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return closestValue(tree.left, target, closest);
  } else if (target > tree.value) {
    return closestValue(tree.right, target, closest);
  } else {
    return closest;
  }
}
export function findClosetValueBst(tree, target) {
  return closestValue(tree, target, Infinity);
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
// console.log("find: ", bst);
let r = findClosetValueBst(bst, 12);
console.log("result = ", r);
r = findClosetValueBst(bst, 4);
console.log("result = ", r);

/*
tree =   10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14
target = 12
Answer: 13
*/
