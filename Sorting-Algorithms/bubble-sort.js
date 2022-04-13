/* Bubble Sort
https://en.wikipedia.org/wiki/Bubble_sort

Loops through the array, compares one position with the next, if the first one is bigger it swaps places, then repeats the process until there's no change in ordering (you need to keep track of changes).
The biggest number will bubble up to the last position of the array so we can optimize each iteration by checking until array.length -i 

Matches the human mental model olf sorting, it's a educational algorithm as other n^2 sorting aLgorithms like insertion sort run faster, so bubble sort is not practical. More efficient algorithms are quicksort, timsort or mergesort. */

// Solution #1 - Nested For Loops - Iterates over entire array each time
// Time Complexity O(n^2)
// Space Complexity O(1)

function bubbleSort(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (nums[j] > nums[j + 1]) {
				swap(nums, j, j + 1)
			}
		}
	}
	return nums
}

// Solution #2 - Optimized Nested For Loops - Starts by the end and each iteration starts from the unordered part of the array
// Time Complexity O(n^2)
// Space Complexity O(1)

function bubbleSort2(nums) {
	for (let i = nums.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				swap(nums, j, j + 1)
			}
		}
	}
	return nums
}

// Optimized Bubble sorts - Include swapped variable, if false at end of iteration, list is ordered.

// Solution #3 - Optimized Nested For Loops with swapped variable
// Time Complexity O(n^2)
// Space Complexity O(1)

function bubbleSort3(nums) {
	var swaps
	for (var i = nums.length; i > 0; i--) {
		swaps = false
		for (var j = 0; j < i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				swap(nums, j, j + 1)
				swaps = true
			}
		}
		if (swaps) break
	}
	return nums
}

// Solution #4 - While Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

function bubbleSort4(nums) {
	let swapped = true
	while (swapped) {
		swapped = false
		for (let i = 1; i < nums.length; i++) {
			if (nums[i] < nums[i - 1]) {
				swap(nums, i, i - 1)
				swapped = true
			}
		}
	}
	return nums
}

// Solution #5 - Do While Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

function bubbleSort5(nums) {
	let swapped = false

	do {
		swapped = false
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] > nums[i + 1]) {
				swap(nums, i, i + 1)
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

const nums3 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #3')
const t4 = performance.now()
console.log(bubbleSort3(nums3))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')

const nums4 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #4')
const t6 = performance.now()
console.log(bubbleSort3(nums4))
const t7 = performance.now()
console.log(`Took ${t7 - t6} milliseconds.`)
console.log('--------------------------------------')

const nums5 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]

console.log('Solution #5')
const t8 = performance.now()
console.log(bubbleSort3(nums4))
const t9 = performance.now()
console.log(`Took ${t9 - t8} milliseconds.`)
console.log('--------------------------------------')

// You could create a swap function and call that instead:
function swap(arr, idx1, idx2) {
	let temp = arr[idx1]
	arr[idx1] = arr[idx2]
	arr[idx2] = temp
}

// ES2015 Destructuring
const swapDestructuring = (arr, idx1, idx2) => {
	return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
}
