// https://leetcode.com/problems/two-sum/

// Solution #1 - Brute Force - Nested For Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

var solution1 = function (nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		const firstNumber = nums[i]
		for (let j = i + 1; j < nums.length; j++) {
			const secondNumber = nums[j]
			if (firstNumber + secondNumber === target) {
				return [i, j]
			}
		}
	}
}

// Solution #2 - Hash Map
// Time Complexity O(n)
// Space Complexity O(n)

var solution2 = function (nums, target) {
	let hashMap = new Map()
	for (let i = 0; i < nums.length; i++) {
		let complement = target - nums[i]
		if (hashMap.has(complement)) {
			return [hashMap.get(complement), i]
		}
		hashMap.set(nums[i], i)
	}
	return false
}

// Solution #2 - Two Pointers - If you only need true/false instead of index
// Time Complexity O(n)
// Space Complexity O(n)

var solution3 = function (nums, target) {
	const sortedNums = nums.sort((a, b) => a - b)
	let left = 0
	let right = nums.length - 1
	console.log(sortedNums)

	while (left < right) {
		let sum = sortedNums[left] + sortedNums[right]
		if (sum === target) return true
		else if (sum < target) {
			left++
		} else {
			right--
		}
	}
	return false
}

let nums = [2, 7, 11, 15]
let target = 9
// let nums = [3, 2, 4]
// let target = 6
// let nums = [3, 3]
// let target = 6

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, target))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums, target))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

let nums2 = [7, 2, 20, 14, 100, 15]
let target2 = 23

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3(nums2, target2))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')
