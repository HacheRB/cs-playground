// https://leetcode.com/problems/design-hashmap/

// Solution #1
// Time Complexity O()
// Space Complexity O()

var solution1 = function () {
  this.data = new Array(1000001)
}

MyHashMap.prototype.put = function (key, value) {
  this.data[key] = value
}

MyHashMap.prototype.get = function (key) {
  let value = this.data[key]
  return value !== undefined ? value : -1
}

MyHashMap.prototype.remove = function (key) {
  delete this.data[key]
}

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1())
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
