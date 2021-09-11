// https://leetcode.com/problems/single-number/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(n)
var solution1 = function (nums) {
  const hashTable = {}
  for (let num of nums) {
    hashTable[num] = hashTable[num] + 1 || 1
  }
  for (let num of nums) {
    if (hashTable[num] === 1) return num
  }
}

let nums = [4, 1, 2, 1, 2]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
