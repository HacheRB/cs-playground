/* Bubble Sort
Loops through the array, compares one position with the next, if the first one is bigger it swaps places, then repeats the process until there's no change in ordering (you need to keep track of changes).
The biggest number will bubble up to the last position of the array so we can optimize each iteration by checking until array.length -i 

Matches the human mental model olf sorting, it's a educational algorithm as other n^2 sorting aLgorithms like insertion sort run faster, so bubble sort is not practical. More efficient algorithms are quicksort, timsort or mergesort.
*/

// Solution #1 - While Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

function bubbleSort(nums) {
  let swapped = true

  while (swapped) {
    swapped = false
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        let temp = nums[i]
        nums[i] = nums[i - 1]
        nums[i - 1] = temp
        swapped = true
      }
    }
  }
  return nums
}

// Solution #2 - Do While Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

function bubbleSort2(nums) {
  let swapped = false

  do {
    swapped = false
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return nums
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(bubbleSort(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

const nums2 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #2')
const t2 = performance.now()
console.log(bubbleSort2(nums2))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
