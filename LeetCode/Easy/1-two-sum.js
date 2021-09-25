// https://leetcode.com/problems/two-sum/

// Solution #1 - Brute Force - Nested For Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

var solution1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

//Solution #2 - Hash Map
// Time Complexity O(n)
// Space Complexity O(n)

var solution2 = function (nums, target) {
  let hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i]
    }
    hashMap.set(nums[i], i)
  }
  return false
}

let nums = [2, 7, 11, 15]
let target = 9
// let nums = [3, 2, 4]
// let target = 6
// let nums = [3, 3]
// let target = 6

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, target))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums, target))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
