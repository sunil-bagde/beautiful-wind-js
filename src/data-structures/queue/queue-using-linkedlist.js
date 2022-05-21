class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.rear === null && this.front === null) {
      this.rear = newNode;
      this.front = newNode;
      console.log("Linkedlist pushed Element = ", this.rear.value);
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      console.log("Linkedlist pushed Element = ", this.rear.value);
    }
  }
  pop() {
    if (this.front === null) {
      console.log("Linkedlist Queue is Empty");
    } else {
      console.log("Linkedlist Dequeued Element = " + this.front.value);
      this.front = this.front.next;

      if (this.front == null) {
        this.rear = null;
      }
    }
  }
}
const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

queue.pop();
queue.pop();
queue.pop();
