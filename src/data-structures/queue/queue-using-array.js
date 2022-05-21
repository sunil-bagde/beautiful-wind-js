class Queue {
  constructor() {
    this.queue = [];
    this.rear = 0;
    this.front = 0;
  }

  push(value) {
    this.queue[this.rear] = value;
    console.log("Queue pushed: ", this.queue[this.rear]);
    this.rear++;
  }
  pop() {
    if (this.rear === this.front) {
      console.log("Queue is Empty");
    }
    console.log("Queue Popped: ", this.queue[this.front]);
    this.front++;
  }
}
const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

queue.pop();
