/* Insertion Sort
https://en.wikipedia.org/wiki/Insertion_sort

Simple implementation, efficient for small data sets, more efficient than other quadratic algorithms such as Selectionr or Bubble Sort. Insertion is good for when you have mostly sorted lists over others like quicksort or mergesort which have better average time complexity but worst best case time complexity.

Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain. */

// Solution #1 - Nested For Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]
    let j

    for (j = i - 1; j >= 0 && numberToInsert < nums[j]; j--) {
      nums[j + 1] = nums[j]
    }
    nums[j + 1] = numberToInsert
  }
  return nums
}

// Solution #2 - While Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

function insertionSort2(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]
    let j = i - 1

    while (j >= 0 && numberToInsert < nums[j]) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = numberToInsert
  }
  return nums
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(insertionSort(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

const nums2 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #2')
const t2 = performance.now()
console.log(insertionSort2(nums2))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
