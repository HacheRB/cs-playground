/*Linear Search starts from the beginning and keeps looking until the end of the array.

Time Complexity O(n)
Space Complexity O(1)
*/

//Implementation
function linearSearch(array, target) {
  if (!array || array.length === 0) {
    return false
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true
    }
  }
  return false
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const arr2 = undefined
const arr3 = null
const target = 14

console.log(linearSearch(arr1, target))
console.log('-------------------------')
console.log(linearSearch(arr2, target))
console.log('-------------------------')
console.log(linearSearch(arr3, target))
console.log('-------------------------')
