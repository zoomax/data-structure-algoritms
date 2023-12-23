class Stack {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    return this.stack.pop()
  }

  getSize() {
    return this.stack.length
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.stack[this.getSize() - 1]
    }
    console.log('stack is empty')
  }
  getRear() {
    if (!this.isEmpty()) {
      return this.stack[0]
    }
    console.log('stack is empty')
  }

  isEmpty() {
    return this.stack.length === 0
  }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.getSize()
console.log(stack.getRear(), ' => Rear')
console.log(stack.getFront(), ' => Front ')
console.log(stack.pop(), 'is out of the stack now')
console.log(stack.stack.toString())
console.log('is the stack empty ?', stack.isEmpty())
console.log(stack.pop(), 'is out of the stack now')
console.log(stack.pop(), 'is out of the stack now')
console.log(stack.pop(), 'is out of the stack now')
console.log('is the stack empty ?', stack.isEmpty())
