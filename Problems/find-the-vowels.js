/*
Write a function that returns the number of vowels
used in a string('a', 'e', 'i', 'o', 'u')
*/

// Solution #1
// Time Complexity O(n*m)
// Space Complexity O(1)

var solution1 = function (str) {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	let counter = 0

	for (let char of str.toLowerCase()) {
		if (vowels.includes(char)) {
			counter++
		}
	}
	return counter
}

// Solution #2
// Time Complexity O()
// Space Complexity O()

var solution2 = function (str) {
	const matches = str.match(/[aeiou]/gi)
	return matches ? matches.length : 0
}

const str = 'Hi there!'

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(str))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(str))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3())
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')
