class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key = '') {
    return (
      key.split('').reduce((acc, item) => {
        return (acc += item.charCodeAt(0))
      }, 0) % this.size
    )
  }

  set(key, value) {
    const index = this.hash(key)
    this.table[index] = value
  }
  get(key) {
    const index = this.hash(key)
    return this.table[index]
  }
  remove(key) {
    const index = this.hash(key)
    const item = this.table[index]
    this.table[index] = undefined
    return item
  }
  display() {
    this.table.forEach((item) => {
      if (item) console.log(item)
    })
  }
}

const hashTable = new HashTable(30)
hashTable.set('name', 'hazem')
hashTable.set('salary', 3000)
hashTable.set('age', 30)

// console.log(hashTable.get('name'))
hashTable.remove('aemn')

hashTable.display()
