/* Merge Sort
https://en.wikipedia.org/wiki/Merge_sort
https://www.geeksforgeeks.org/merge-sort/

*/

// Solution #1 -
// Time Complexity O(n log n)
// Space Complexity O(n)

function mergeSort(nums) {
	if (nums.length <= 1) return nums

	const middle = Math.floor(nums.length / 2)
	const left = nums.slice(0, middle)
	const right = nums.slice(middle)

	const sortedLeft = mergeSort(left)
	const sortedRight = mergeSort(right)

	return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
	const results = []

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			results.push(left.shift())
		} else {
			results.push(right.shift())
		}
	}
	return results.concat(left, right)
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(mergeSort(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
