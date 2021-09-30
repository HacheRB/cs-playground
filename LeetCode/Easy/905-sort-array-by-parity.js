// https://leetcode.com/problems/sort-array-by-parity/

// Solution #1 - In Place
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (nums) {
  let insertIndex = 0 // Slow runner
  if (nums.length === 0) return 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let temp = nums[insertIndex]
      nums[insertIndex] = nums[i]
      nums[i] = temp
      insertIndex++
    }
  }
  return nums
}

//Solution #2 - LeetCode Solution - Quicksort
// Time Complexity O(n)
// Space Complexity O(1)

var solution2 = function (nums) {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
    if (nums[i] % 2 === 0) i++
    if (nums[j] % 2 === 1) j--
  }
  return nums
}

let nums = [3, 1, 2, 4]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

let nums2 = [3, 1, 2, 4]

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums2))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
