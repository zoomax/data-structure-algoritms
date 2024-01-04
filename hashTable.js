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
    const bucket = this.table[index]
    if (!bucket) this.table[index] = [[key, value]]
    else {
      let item = bucket.find((item) => item[0] === key)
      if (item) {
        item[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }
  get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      let item = bucket.find((item) => item[0] === key)[1]
      if (item) {
        return item[1]
      }
    }

    return undefined
  }
  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      let itemIndex = bucket.findIndex((item) => item[0] === key)
      if (itemIndex > -1) {
        const removedItem = [...bucket[itemIndex]]
        delete bucket[itemIndex]
        return removedItem
      }
    }
    return undefined
  }
  display() {
    this.table.forEach((item) => {
      if (item) console.log(item)
    })
  }
}

const hashTable = new HashTable(30)
hashTable.set('name', 'hazem')
hashTable.set('enam', 'tarek')
hashTable.set('salary', 3000)
hashTable.set('age', 30)

// console.log(hashTable.get('name'))
hashTable.remove('aemn')

hashTable.display()
