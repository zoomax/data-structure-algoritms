class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }

  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
  }

  insert(value, index) {
    if (index < 0 || index > this.size - 1) return
    if (index === 0) {
      this.prepend(value)
      return
    }
    const node = new Node(value)
    let currentIndex = 1
    let currentNode = this.head
    while (currentIndex < index) {
      currentNode = currentNode.next
      currentIndex++
    }
    node.next = currentNode.next
    node.prev = currentNode
    currentNode.next.prev = node
    currentNode.next = node

    this.size++
  }

  removeByIndex(index) {
    if (index < 0 || index >= this.getSize()) return null
    let node = this.head
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = null
    } else if (index === this.getSize() - 1) {
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      for (let i = 1; i < index; i++) {
        node = node.next
      }
      node.next = node.next.next
      node.next.prev = node
    }
    this.size--
    return node.value
  }

  removeByValue(value) {
    if (this.isEmpty()) return null
    let curr = this.head
    let prev = null
    if (this.head.value === value) {
      this.head = this.head.next
      this.head.prev = null
      this.size--
      return curr.value
    }
    for (let i = 0; i < this.getSize(); i++) {
      if (curr.value !== value) {
        prev = curr
        curr = curr.next
      } else {
        if (i === this.getSize() - 1) {
          this.tail = prev
          this.tail.next = null
        } else {
          prev.next = curr.next
          curr.next.prev = prev
        }
        this.size--
        return curr.value
      }
    }
    return null
  }

  searchByValue(value) {
    let index = 0
    let temp = this.head
    while (temp !== null) {
      if (temp.value === value) {
        return index
      }
      temp = temp.next
      index++
    }
    return -1
  }

  /// reverse linked list
  reverse() {
    let current = this.head
    this.tail = this.head
    let prev = null
    for (let i = 0; i < this.getSize(); i++) {
      let next = current.next
      current.next = prev
      current.prev = next
      prev = current
      current = next
    }
    this.head = prev
  }

  reverseTail() {
    this.head = this.tail
    let current = this.tail
    let prev = null
    for (let index = 0; index < this.getSize(); index++) {
      let next = current.prev
      current.next = next
      current.prev = prev
      prev = current
      current = next
    }
    this.tail = prev
  }

  print() {
    if (this.isEmpty()) {
      console.log('this linked list is empty')
      return
    }
    let values = []
    let current = this.head
    while (current !== null) {
      values.push(current.value)
      current = current.next
    }
    console.log(values)
  }
}

const linkedList = new DoubleLinkedList()

linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)

linkedList.append(40)

linkedList.insert(50, 1)

linkedList.removeByIndex(5)
// linkedList.removeByIndex(0)

// linkedList.removeByValue(40)
// linkedList.removeByValue(10);
// linkedList.removeByValue(20);

console.log(linkedList.searchByValue(50))

console.log(
  `this linked list has ${linkedList.getSize()} ${
    linkedList.getSize() === 1 ? 'node' : 'nodes'
  }`,
)

console.log(`Head has the value of ${linkedList.head?.value} now`)

linkedList.print()
// linkedList.reverseTail()
// linkedList.print()
// linkedList.reverseTail()
// linkedList.print()

console.log(
  `head => ${linkedList.head.value} / tail => ${linkedList.tail.value}`,
)
