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
    if (!this.isEmpty) {
      return this.stack[this.getSize() - 1]
    }
    console.log('stack is empty')
  }
  getRear() {
    if (!this.isEmpty) {
      return this.stack[0]
    }
    console.log('stack is empty')
  }

  isEmpty() {
    return this.stack.length === 0
  }
}
