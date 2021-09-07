/*Binary Search finds the position of a target value within a sorted array.

It's recommended to implement a iterative solution, as a recursive one
could use more space depending on the language used.

Iterative Implementation:
Time Complexity O(log n)
Space Complexity O(1)

Recursive Implementation:
Time Complexity O(log n)
Space Complexity O(log n)
*/

//Iterative Implementation
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

//Recursive Implementation, returns true if value is in array.
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
const left = 0
const right = arr.length - 1
const target = 10

console.log(iterativeBinarySearch(arr, target))
console.log('-------------------------')
console.log(recursiveBinarySearch(arr, target, left, right))
