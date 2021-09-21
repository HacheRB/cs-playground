// https://leetcode.com/problems/max-consecutive-ones-ii/

// Solution #1 - Brute Force - Double For Loop
// Time Complexity O(n^2)
// Space Complexity O()
var solution1 = function (nums) {
  let maxConsecutive = 0
  for (let i = 0; i < nums.length; i++) {
    let numberOfZeros = 0
    for (let j = i; j < nums.length; j++) {
      if(nums[j]=== 0){
        numberOfZeros++
      }
      if( numberOfZeros <= 1) {
        maxConsecutive = Math.max(maxConsecutive, j - i +1)
      }      
    }
  }
  return maxConsecutive
}

//Solution #2 - Sliding Window
// Time Complexity O()
// Space Complexity O()
var solution2 = function (nums) {
  let maxConsecutive = 0
  let left = 0
  for (let right = 1; right < nums.length; i++) {
    
  }
}

//Solution #3
// Time Complexity O()
// Space Complexity O()
var solution3 = function () {}

let nums = [1, 0, 1, 1, 0]

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
