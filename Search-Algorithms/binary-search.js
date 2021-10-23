/* Binary Search 
Finds the position of a target value within a sorted array.

It's recommended to implement a iterative solution, as a recursive one
could use more space depending on the language used. 

https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html
int mid = low + ((high - low) / 2);
*/

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

// Solution #2 - Recursive Implementation
// Time Complexity O(log n)
// Space Complexity O(log n)

function recursiveBinarySearch(array, target) {
  return recursivebinarySearchHelper(array, target, 0, array.length - 1)
}

function recursivebinarySearchHelper(array, target, left, right) {
  if (left > right) return false
  let middle = Math.floor((left + right) / 2)
  const potentialMatch = array[middle]
  if (potentialMatch === target) return true
  if (potentialMatch > target)
    return recursivebinarySearchHelper(array, target, left, middle - 1)
  else return recursivebinarySearchHelper(array, target, middle + 1, right)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const target = 10

console.log('Solution #1')
const t0 = performance.now()
console.log(iterativeBinarySearch(arr, target))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(recursiveBinarySearch(arr, target))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
