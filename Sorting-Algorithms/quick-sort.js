/* Quick Sort
https://en.wikipedia.org/wiki/Quicksort
https://www.geeksforgeeks.org/quick-sort/
https://btholt.github.io/complete-intro-to-computer-science/quick-sort

Divide and conquer, recursive algorithm. You select a pivot element from the array, then partition the other elements into two sub-arrays according to wether they are less or greater than the pivot. 

Different strategies to select pivot can influence Time Complexity like quicksort3. */

// Solution #1 -
// Time Complexity O(n^2)
// Space Complexity O(n)

function quickSort(nums) {
	if (nums.length <= 1) return nums

	const pivot = nums[nums.length - 1]
	const left = []
	const right = []

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] < pivot) {
			left.push(nums[i])
		} else {
			right.push(nums[i])
		}
	}

	// const sortedLeft = quickSort(left)
	// const sortedRight = quickSort(right)
	// return sortedLeft.concat(pivot, sortedRight)

	return [...quickSort(left), pivot, ...quickSort(right)]
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(quickSort(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
