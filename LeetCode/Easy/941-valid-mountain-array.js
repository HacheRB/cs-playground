// https://leetcode.com/problems/valid-mountain-array/

// Solution #1 - Two Pointers
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (arr) {
  let left = 0
  let right = arr.length - 1

  while (arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
    if (arr[left] < arr[left + 1]) {
      left++
    }
    if (arr[right] < arr[right - 1]) {
      right--
    }
  }
  if (left !== right || left === arr.length - 1 || right === 0) return false
  return true
}

//Solution #2 - Leetcode Solution - One Pass
// Time Complexity O(n)
// Space Complexity O(1)

var solution2 = function (arr) {
  let length = arr.length
  let i = 0

  // walk up
  while (i + 1 < length && arr[i] < arr[i + 1]) i++

  // peak can't be first or last
  if (i == 0 || i == length - 1) return false

  // walk down
  while (i + 1 < length && arr[i] > arr[i + 1]) i++

  return i == length - 1
}

// let arr = [2, 1]
// let arr = [3, 5, 5]
let arr = [0, 3, 2, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(arr))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(arr))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
