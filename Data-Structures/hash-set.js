/* Basic Implementation of a Hash Set. 

Need to reimplement with linked list or BST in a future. */

class HashSet {
  constructor(size) {
    this.data = []
    this.size = 1000
  }

  _hash(key) {
    return key % this.size
  }

  add(key) {
    const index = this._hash(key)
    if (this.data.includes(key)) {
      return
    }
    this.data.push(key)
  }

  remove(key) {
    const index = this._hash(key)
    this.data = this.data.filter((x) => x !== key)
  }

  contains(key) {
    const index = this._hash(key)
    return this.data.includes(key)
  }
}

const myHashSet = new HashSet(100)
myHashSet.add('apples')
myHashSet.add('grapes')
myHashSet.add('oranges')
myHashSet.add('apples')

console.log(myHashSet)