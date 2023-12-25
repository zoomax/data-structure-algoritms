class Queue {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("there are no items to be dequeued .....!");
      return;
    }
    return this.items.shift();
  }

  peak() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.toString());
  }

  rear() {
    return this.items[this.size() - 1];
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
console.log(`we have ${tasksQueue.rear()} task in the rear`);
// console.log(`we have ${tasksQueue.size()} tasks in the peak`);

tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();
tasksQueue.dequeue();

console.log(`Are tasks done ??? Ans: ${!tasksQueue.isEmpty() ? "No" : "Yes"}`);
console.log(`we have ${tasksQueue.size()} tasks left to be done`);
