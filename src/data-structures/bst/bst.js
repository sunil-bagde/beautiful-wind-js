class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(root, value) {
    if (!root) {
      return new Node(value);
    } else if (root.value < value) {
      root.right = this.insert(root.right, value);
    } else if (root.value > value) {
      root.left = this.insert(root.left, value);
    }
    return root;
  }
  inorder(root) {
    if (!root) {
      return null;
    }
    this.inorder(root.left);
    console.log(": ", root.value);
    this.inorder(root.right);
  }
  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (root.value < value) {
      return this.search(root.right, value);
    } else {
      return this.search(root.left, value);
    }
  }
  getRightMin(root) {
    let temp = root;
    while (temp.left) {
      temp = temp.left;
    }
    return temp.value;
  }

  remove(root, value) {
    if (!root) {
      return null;
    }
    if (root.value < value) {
      root.right = this.remove(root.right, value);
    } else if (root.value > value) {
      root.left = this.remove(root.left, value);
    } else {
      // leaf case
      if (root.leaf === null && root.right === null) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.leaf;
      } else {
        let minRightValue = this.getRightMin(root.right);
        root.value = minRightValue;
        root.right = this.remove(root.right, minRightValue);
      }
    }
    return root;
  }
}

const bst = new BST();

bst.root = bst.insert(bst.root, 100);
bst.root = bst.insert(bst.root, 50);
bst.root = bst.insert(bst.root, 150);
bst.root = bst.insert(bst.root, 125);
console.log("Before Deletion: Inorder Traversal of BST");
bst.inorder(bst.root);
const found = bst.search(bst.root, 125);
console.log("Search result  ", found);
console.log("Deleting Element: 100");
console.log("After Deletion: Inorder Traversal of BST");
bst.remove(bst.root, 100);
bst.inorder(bst.root);
