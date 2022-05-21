/*
       Node
prev ← value → next     
*/

class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    newNode.prev = null;
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    return this;
  }
  addLast(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    let last = this.head;

    while (last.next != null) {
      last = last.next;
    }
    last.next = newNode;
    newNode.prev = last;
    return this;
  }
  remove(value) {
    /*
       no head
      delete head
      no data 
      delete last
      delete middle

    */
    if (!this.head) {
      console.log("Empty list");
      return false;
    }

    let temp = this.head;

    while (temp !== null && temp.value !== value) {
      temp = temp.next;
    }
    if (!temp) {
      console.log("value does not exist");
      return false;
    }
    if (this.head.value === temp.value) {
      this.head = temp.next;
      this.head.prev = null;
      console.log("deleted");
      return true;
    } else if (temp.next === null) {
      temp.prev.next = null;
      console.log("deleted");
      return true;
    } else {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      console.log("deleted");
      return true;
    }
  }
  search(value) {
    if (this.head === null) {
      return false;
    }
    let temp = this.head;
    while (temp != null) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
  print() {
    let temp = this.head;
    let last = null;

    //console.log("Forward Traversal");
    while (temp != null) {
      console.log("➜", temp.value);
      if (temp.next == null) last = temp;
      temp = temp.next;
    }
  }
}
const list = new DoublyLinkedList();

list.addFirst(30).addFirst(20).addFirst(10).addLast(40).addLast(50);

// list.remove(40);
// list.remove(10);
// list.remove(60);
console.log("Print a linked list");
list.print();
