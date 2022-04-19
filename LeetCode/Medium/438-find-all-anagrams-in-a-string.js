// https://leetcode.com/problems/find-all-anagrams-in-a-string/

// Solution #1 - Sliding Window
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (s, p) {
	let count = p.length
	const indexes = []
	let left = 0
	let right = 0
	const substring = {}

	for (let char of p) {
		if (char in substring) {
			substring[char]++
		} else substring[char] = 1
	}

	while (right < s.length) {
		if (substring[s[right]] > 0) count--

		substring[s[right]]--
		right++

		if (count === 0) indexes.push(left)

		if (right - left == p.length) {
			if (substring[s[left]] >= 0) count++
			substring[s[left]]++
			left++
		}
	}
	return indexes
}

function buildHashMap(string) {
	const hashMap = new Map()
	for (let char of string) {
		hashMap[char] = hashMap[char] + 1 || 1
	}
	return hashMap
}

let s = 'cbaebabacd'
let p = 'abc'
// Output: [0, 6]
// let s = 'abab'
// let p = 'ab
// Output: [0, 1, 2]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(s, p))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
