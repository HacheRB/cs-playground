/* Divide and Conquer Pattern
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can decrease time complexity. A good example of Divide and Conquer would be Binary Search. */

// Solution #1 - Iterative Binary Search
// Time Complexity O(log n)
// Space Complexity O(1)

function iterativeBinarySearch(array, target) {
  return iterativeBinarySearchHelper(array, target, 0, array.length - 1)
}

function iterativeBinarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]
    if (target === potentialMatch) {
      return middle
    } else if (target < potentialMatch) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const target = 10

console.log('Solution #1')
const t0 = performance.now()
console.log(iterativeBinarySearch(arr, target))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
