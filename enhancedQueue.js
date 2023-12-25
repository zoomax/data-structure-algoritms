class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("there are no items to be dequeued .....!");
      return;
    }
    delete this.items[this.front];
    this.front++;
  }

  peak() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.size() === 0;
  }

  print() {
    console.log(JSON.stringify(this.items));
  }

  getRear() {
    return this.items[this.rear];
  }
}

const tasksQueue = new Queue();
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
// console.log(`we have ${tasksQueue.size()} tasks in the peak`);

tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();

console.log(`Are tasks done ??? Ans: ${!tasksQueue.isEmpty() ? "No" : "Yes"}`);
console.log(`we have ${tasksQueue.size()} tasks left to be done`);
tasksQueue.print();
