// https://leetcode.com/problems/contains-duplicate-ii/

// Solution #1 - Brute Force - Nested For Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

var solution1 = function (nums, k) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      let condition1 = nums[i] === nums[j]
      let condition2 = i - j <= k

      if (condition1 && condition2) {
        return true
      }
    }
  }
  return false
}

// Solution #2 - Hash Map
// Time Complexity O(n)
// Space Complexity O(n) at worst, normally, the size of the window, O(window)

var solution2 = function (nums, k) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true
    }
    map.set(nums[i], i)
  }
  return false
}

let nums = [1, 2, 3, 1, 2, 3]
let k = 2
// let nums = [1, 2, 3, 1]
// let k = 3
// let nums = [1, 0, 1, 1]
// let k = 1

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, k))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums, k))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
