// https://leetcode.com/problems/top-k-frequent-elements/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(n)

var solution1 = function (nums, k) {
	const map = new Map()
	const bucket = []
	const result = []

	for (let num of nums) {
		map.set(num, (map.get(num) || 0) + 1)
	}

	for (let [num, freq] of map) {
		bucket[freq] = (bucket[freq] || new Set()).add(num)
	}

	for (let i = bucket.length - 1; i >= 0; i--) {
		if (bucket[i]) result.push(...bucket[i])
		if (result.length === k) break
	}
	return result
}

let nums = [1, 1, 1, 2, 2, 3]
let k = 2

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, k))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
