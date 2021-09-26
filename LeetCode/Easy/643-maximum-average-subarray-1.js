// https://leetcode.com/problems/maximum-average-subarray-i/

// Solution #1 - Brute Force
// Time Complexity O(n * k)
// Space Complexity O(1)

var solution1 = function (nums, k) {
  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = 0; j < k; j++) {
      if (!(i + (k - 1) > nums.length - 1)) {
        sum += nums[i + j]
      } else {
        i = nums.length
        j = k
      }
    }
    if (sum !== 0) {
      max = Math.max(max, sum / k)
    }
  }
  if (max === -Infinity) return 0
  return max
}

//Solution #2 - Sliding Window
// Time Complexity O(n)
// Space Complexity O(1)

var solution2 = function (nums, k) {
  let max = -Infinity
  let windowSum = 0
  let start = 0

  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end]
    if (end - start + 1 === k) {
      max = Math.max(max, windowSum / k)
      windowSum -= nums[start]
      start++
    }
  }
  return max
}

let nums = [1, 12, -5, -6, 50, 3]
let k = 4
// let nums = [5]
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
