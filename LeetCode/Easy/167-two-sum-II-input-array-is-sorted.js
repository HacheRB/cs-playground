// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// Solution #1 - Two Pointers
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) right--
    else left++
  }
}

let numbers = [2, 7, 11, 15]
let target = 9
// let numbers = [2,3,4]
// let target = 6
// let numbers = [-1,0]
// let target = -1

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(numbers, target))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
