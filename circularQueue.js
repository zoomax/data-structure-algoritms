class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.capacity = capacity;
    this.currentLength = 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.currentLength += 1;

      this.items[this.rear] = item;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("there are no items to be dequeued .....!");
      return;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peak() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.size() === 0;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }

  print() {
    console.log(JSON.stringify(this.items));
  }

  getRear() {
    return this.items[this.rear];
  }
}

const tasksQueue = new CircularQueue(6);
tasksQueue.enqueue(1);
tasksQueue.enqueue(2);
tasksQueue.enqueue(3);
tasksQueue.enqueue(4);
tasksQueue.enqueue(5);
tasksQueue.enqueue(6);
tasksQueue.print();

console.log(`we have ${tasksQueue.size()} tasks in the queue`);
console.log(`we have ${tasksQueue.peak()} task in the peak`);
console.log(`we have ${tasksQueue.getRear()} task in the rear`);

tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();

console.log(`Are tasks done ??? Ans: ${!tasksQueue.isEmpty() ? "No" : "Yes"}`);
console.log(`we have ${tasksQueue.size()} tasks left to be done`);
tasksQueue.enqueue(5);
tasksQueue.enqueue(4);
tasksQueue.enqueue(3);

console.log(`we have ${tasksQueue.size()} tasks in the queue`);
console.log(`we have ${tasksQueue.peak()} task in the peak`);
console.log(`we have ${tasksQueue.getRear()} task in the rear`);

tasksQueue.print();
