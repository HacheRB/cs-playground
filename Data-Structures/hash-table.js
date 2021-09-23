/* Basic Implementation of a Hash Table.

Hash Table needs to ensure unique keys value, delete keys and a few more improvements like the hash function and collision handling. Need to reimplement with linked list or BST in a future. */

class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
      this.data[address].push([key, value])
    }
    this.data[address].push([key, value])
  }

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1]
      }
    }
    return undefined
  }

  keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result
  }
}

const myHashTable = new HashTable(2)
myHashTable.set('apples', 9)
myHashTable.set('grapes', 10000)
myHashTable.set('oranges', 10)
myHashTable.get('apples')

console.log(myHashTable)

// Example - Find the first recurring number in the array.

//Solution #1 - Using a Hash Map
// Time Complexity O(n)
// Space Complexity O(n)

var solution1 = function (nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i]
    } else {
      map[nums[i]] = 1
    }
  }
  return undefined
}

let nums = [2, 1, 1, 2, 3, 5, 1, 2, 4]    // returns 1
// let nums = [2, 5, 5, 2, 3, 5, 1, 2, 4] // returns 5
// let nums = [2, 5, 1, 2, 3, 5, 1, 2, 4] // returns 2
// let nums = [2, 1, 1, 2, 3, 5, 1, 2, 4] // returns 1
// let nums = [2, 3, 4, 5]                // returns undefined

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
