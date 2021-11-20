// https://leetcode.com/problems/duplicate-zeros/

// Solution #1 - For Loop - Not in place
// Time Complexity O(n)
// Space Complexity O(n)

var solution1 = function (arr) {
  let numberOfZeros = 0
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
    if (arr[i] === 0) {
      newArr.push(arr[i])
      numberOfZeros++
    }
  }
  return newArr.slice(0, arr.length)
}

// Solution #2 - In Place - Leetcode Solution.
// Time Complexity O()
// Space Complexity O()

var solution2 = function (arr) {
  let possibleDups = 0
  let length = arr.length - 1

  // Find the number of zeros to be duplicated
  // Stopping when left points beyond the last element in the original array
  // which would be part of the modified array
  for (let left = 0; left <= length - possibleDups; left++) {
    // Count the zeros
    if (arr[left] == 0) {
      // Edge case: This zero can't be duplicated. We have no more space,
      // as left is pointing to the last element which could be included
      if (left == length - possibleDups) {
        // For this zero we just copy it without duplication.
        arr[length] = 0
        length -= 1
        break
      }
      possibleDups++
    }
  }

  // Start backwards from the last element which would be part of new array.
  let last = length - possibleDups

  // Copy zero twice, and non zero once.
  for (let i = last; i >= 0; i--) {
    if (arr[i] == 0) {
      arr[i + possibleDups] = 0
      possibleDups--
      arr[i + possibleDups] = 0
    } else {
      arr[i + possibleDups] = arr[i]
    }
  }
}

let arr = [1, 0, 2, 3, 0, 4, 5, 0]
// let arr = [1, 2, 3]

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
