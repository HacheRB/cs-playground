// https://leetcode.com/problems/rotate-array/

// Solution #1 - Using auxiliary array to rotate original.
// Time Complexity O(n)
// Space Complexity O(n)
var solution1 = function (nums, k) {
  let arr = []
  console.log('nums length', nums.length)
  for (let i = 0; i < nums.length; i++) {
    console.log(i, (i + k) % nums.length)
    arr[(i + k) % nums.length] = nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i]
  }
}

// Solution #2
// 1. Reverse full Array.
// 2. Then reverse the first part until, from position 0 to K-1.
// 3. Finally reverse the last part, from position K to arr.lenghth -1
// Time Complexity O(n)
// Space Complexity O(1)
var solution2 = function (nums, k) {
  k = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}

var reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, k))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

let nums2 = [1, 2, 3, 4, 5, 6, 7]

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums2, k))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
