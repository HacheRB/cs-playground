// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Solution #1
// Time Complexity O()
// Space ComplexityO()
var solution1 = function (nums) {
  let insertIndex = 1
  if (nums.length === 0) return 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertIndex] = nums[i]
      insertIndex++
    }
  }
  return insertIndex
}

//Solution #2
// Time Complexity O()
// Space ComplexityO()
var solution2 = function () {}

//Solution #3
// Time Complexity O()
// Space ComplexityO()
var solution3 = function () {}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2())
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3())
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')
