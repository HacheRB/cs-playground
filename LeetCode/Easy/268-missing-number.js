// https://leetcode.com/problems/missing-number/

// Solution #1 - Sort and check for missing
// Time Complexity O(n)
// Space Complexity O(n)

var solution1 = function (nums) {
  let length = nums.length
  let sortedNums = nums.sort(function (a, b) {
    return a - b
  })

  if (sortedNums[0] !== 0) return 0
  if (sortedNums[length - 1] !== length) return length

  for (let i = 1; i < length; i++) {
    if (sortedNums[i] !== i) {
      return i
    }
  }
  return -1
}

// Solution #2 - Hash Set
// Time Complexity O(n)
// Space Complexity O(n)

var solution2 = function (nums) {
  let length = nums.length
  let numsSet = new Set(nums)

  for (let i = 0; i <= length; i++) {
    if (!numsSet.has(i)) {
      return i
    }
  }
  return -1
}

// Solution #3 - Bit Manipulation
// Time Complexity O(n)
// Space Complexity O(1)

var solution3 = function (nums) {
  let missing = nums.length
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i]
  }
  return missing
}

// Solution #4 - Gauss Formula
// https://brilliant.org/wiki/sum-of-n-n2-or-n3/
// Time Complexity O(n)
// Space Complexity O(1)

var solution4 = function (nums) {
  let expectedSum = (nums.length * (nums.length + 1)) / 2
  let actualSum = 0
  for (let num of nums) actualSum += num
  return expectedSum - actualSum
}

let nums = [3, 0, 1]
// let nums = [0, 1]
// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
// let nums = [0]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3(nums))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #4')
const t6 = performance.now()
console.log(solution4(nums))
const t7 = performance.now()
console.log(`Took ${t7 - t6} milliseconds.`)
console.log('--------------------------------------')
