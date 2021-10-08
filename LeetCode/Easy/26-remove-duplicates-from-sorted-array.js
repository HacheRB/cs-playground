// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Solution #1 - In Place Two Pointers
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (nums) {
  let insertIndex = 1 // Slow runner
  if (nums.length === 0) return 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertIndex] = nums[i]
      insertIndex++
    }
  }
  return insertIndex
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
