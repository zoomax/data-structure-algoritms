class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.root = node
      console.log(node.value, ' => node inserted on in the root node')

      return
    }
    this.insertNode(node, this.root)
  }
  insertNode(node, root) {
    if (node.value > root.value) {
      if (root.right === null) {
        root.right = node
        console.log(node.value, ' => node inserted on in the right side')
      } else {
        this.insertNode(node, root.right)
      }
    }
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node
        console.log(node.value, ' => node inserted on in the left side')
      } else {
        this.insertNode(node, root.left)
      }
    }
  }
  search(value) {
    return this.searchNode(value, this.root)
  }
  searchNode(value, root) {
    if (!root) {
      return false
    }
    if (root.value === value) {
      return true
    }
    if (value > root.value) {
      return this.searchNode(value, root.right)
    }
    if (value < root.value) {
      return this.searchNode(value, root.left)
    }
  }

  preOrder(node) {
    if (node) {
      console.log(node.value)
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  inOrder(node) {
    if (node) {
      this.inOrder(node.left)
      console.log(node.value)
      this.inOrder(node.right)
    }
  }
  postOrder(node) {
    if (node) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.value)
    }
  }
  levelOrder(root) {
    let queue = []
    queue.push(root)
    while (queue.length) {
      let current = queue.shift()
      console.log(current.value)
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  min(root) {
    if (this.isEmpty()) return null
    if (!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }
  max(root) {
    if (this.isEmpty()) return null
    if (!root.right) {
      return root.value
    } else {
      return this.max(root.right)
    }
  }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log('==========pre order=========')
bst.preOrder(bst.root)
console.log('===========in order=========')
bst.inOrder(bst.root)
console.log('===========post order=========')
bst.postOrder(bst.root)
console.log('===========level order=========')
bst.levelOrder(bst.root)
console.log('===========min=========')
console.log(bst.min(bst.root))
console.log('===========max=========')
console.log(bst.max(bst.root))
