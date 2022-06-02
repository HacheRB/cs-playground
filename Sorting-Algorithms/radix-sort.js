/* Radix Sort
https://en.wikipedia.org/wiki/Radix_sort
https://www.geeksforgeeks.org/radix-sort/
https://btholt.github.io/complete-intro-to-computer-science/radix-sort

*/

// Solution #1
// Time Complexity O ( n * k) n = number of keys, k = key length
// Space Complexity O( n + k)
function radixSort(nums) {
	const longestNumber = findLongestNumber(nums)

	const buckets = new Array(10).fill().map(() => [])

	for (let i = longestNumber - 1; i >= 0; i--) {
		while (nums.length) {
			const current = nums.shift()
			buckets[getDigit(current, i, longestNumber)].push(current)
		}

		for (let j = 0; j < 10; j++) {
			while (buckets[j].length) {
				nums.push(buckets[j].shift())
			}
		}
	}

	return nums
}

function getDigit(number, place, longestNumber) {
	const string = number.toString()
	const size = string.length
	const mod = longestNumber - size

	return string[place - mod] || 0
}

function findLongestNumber(array) {
	let longest = 0
	for (let i = 0; i < array.length; i++) {
		const currentLength = array[i].toString().length
		longest = Math.max(currentLength, longest)
	}
	return longest
}

const nums = [
	20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
	3001, 1200, 633,
]

console.log('Solution #1')
const t0 = performance.now()
console.log(radixSort(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
