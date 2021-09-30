// https://leetcode.com/problems/design-hashset/

// Solution #1
// Time Complexity O()
// Space Complexity O()

var myHashSet = function () {
  this.data = []
  this.size = 1000
}

MyHashSet.prototype._hash = function (key) {
  return key % this.size
}

MyHashSet.prototype.add = function (key) {
  const index = this._hash(key)
  if (this.data.includes(key)) {
    return
  }
  this.data.push(key)
}

MyHashSet.prototype.remove = function (key) {
  const index = this._hash(key)
  this.data = this.data.filter((x) => x !== key)
}

MyHashSet.prototype.contains = function (key) {
  const index = this._hash(key)
  return this.data.includes(key)
}

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1())
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
