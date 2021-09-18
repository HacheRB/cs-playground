/* Multiple Pointers Pattern 
Very efficient for solving problems with minimal space complexity. */

/* sumZero Example
Write a function which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that include both values that sum to zero or undefined if a pair doesn't exist. */
// Time Complexity O(n)
// Space Complexity O(1)

var sumZero = function (arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) right--
    else left++
  }
}

let arr = [-3, -2, -1, 0, 1, 2, 3]

console.log('Solution #1')
const t0 = performance.now()
console.log(sumZero(arr))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

/* countUniqueValues Example
Implement a function that accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but will always be sorted. */
// Time Complexity O()
// Space Complexity O()

var countUniqueValues = function (arr) {
  if (arr.length < 0) return 0
  let i = 0 // Slow Pointer
  // j  is the Fast Pointer

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

let arr2 = [1]

console.log('countUniqueValues')
const t2 = performance.now()
console.log(countUniqueValues(arr2))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
