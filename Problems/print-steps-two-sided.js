/* Write a function that accepts a positive number N.
The function should console log a step shape with N 
levels using the # character. Make sure the step has
spaces on the right hand side!

steps(4)
'#   '
'##  '
'### '
'####'
*/

// Solution #1 - Nested for loops
// Time Complexity O(n^2)
// Space Complexity O(n)

var steps = function (n) {
	const mid = Math.floor((2 * n - 1) / 2)

	for (let row = 0; row < n; row++) {
		let steps = ''

		for (let col = 0; col < 2 * n - 1; col++) {
			if (mid - row <= col && mid + row >= col) {
				steps += '#'
			} else {
				steps += ' '
			}
		}
		console.log(steps + '*')
	}
}

// Solution #2 - Recursion
// Time Complexity O()
// Space Complexity O()

var recursiveSteps = function (n, row = 0, steps = '') {
	const mid = Math.floor((2 * n - 1) / 2)

	if (n === row) {
		return
	}

	if (steps.length === 2 * n - 1) {
		console.log(steps + '*')
		return recursiveSteps(n, row + 1)
	}

	if (mid - row <= steps.length && mid + row >= steps.length) {
		steps += '#'
	} else {
		steps += ' '
	}
	recursiveSteps(n, row, steps)
}

// Solution #3
// Time Complexity O()
// Space Complexity O()

var solution3 = function () {}

let n = 4

console.log('Solution #1')
const t0 = performance.now()
console.log(steps(n))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(recursiveSteps(n))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
