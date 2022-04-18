// https://www.algoexpert.io/questions/Validate%20Subsequence

// Solution #1 - While Loop
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (array, sequence) {
	let arrIdx = 0
	let seqIdx = 0
	while (arrIdx < array.length && seqIdx < sequence.length) {
		if (array[arrIdx] === sequence[seqIdx]) seqIdx++
		arrIdx++
	}
	return seqIdx === sequence.length
}

// Solution #2 - For Loop
// Time Complexity O(n)
// Space Complexity O(1)

var solution2 = function (array, sequence) {
	let seqIdx = 0
	for (const value of array) {
		if (seqIdx === sequence.length) break
		if (sequence[seqIdx] === value) seqIdx++
	}
	return seqIdx === sequence.length
}

let arr = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(arr, sequence))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(arr, sequence))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
