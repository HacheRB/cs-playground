/* Selection Sort
https://en.wikipedia.org/wiki/Selection_sort
https://www.geeksforgeeks.org/selection-sort/

Sorts an array by finding the smallest element from the unsorted part of an array and places it in the sorted part of the array.
[2, 1, 3, 6, 4, 0, 8]
After a first iteration, the array would look like:
[0, 2, 1, 3, 6, 4, 8] */

// Solution #1 -
// Time Complexity O(n^2)
// Space Complexity O(1)

function selectionSort(nums) {
	const length = nums.length

	for (let i = 0; i < length; i++) {
		let min = i
		for (let j = i + 1; j < length; j++) {
			if (nums[j] < nums[min]) {
				min = j
			}
		}
		let temp = nums[i]
		nums[i] = nums[min]
		nums[min] = temp
	}
	return nums
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(selectionSort(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
