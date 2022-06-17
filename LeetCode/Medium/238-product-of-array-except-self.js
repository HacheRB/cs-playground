// https://leetcode.com/problems/product-of-array-except-self/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (nums) {
	let solutionArr = new Array(nums.length).fill(1)
	let prefix = 1

	for (let i = 0; i < nums.length; i++) {
		solutionArr[i] *= prefix
		prefix *= nums[i]
	}

	let postfix = 1

	for (let j = nums.length - 1; j >= 0; j--) {
		solutionArr[j] *= postfix
		postfix *= nums[j]
	}

	return solutionArr
}

let nums = [1, 2, 3, 4]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
