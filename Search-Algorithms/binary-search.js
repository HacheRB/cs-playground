/*Binary Search finds the position of a target value within a sorted array.
Time Complexity O( log n)
*/

//Recursive Implementation, returns true if value is in array.
function recursiveBinarySearch(arr, start, end, target) {
  if (start > end) return false
  let midIndex = Math.floor((start + end) / 2)
  if (arr[midIndex] === target) return true
  if (arr[midIndex] > target)
    return binarySearch(arr, start, midIndex - 1, target)
  else return binarySearch(arr, midIndex + 1, end, target)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]
let start = 0
let end = arr.length - 1
let target = 10
console.log(recursiveBinarySearch(arr2, start, end, target))
