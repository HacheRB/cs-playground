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
	for (let row = 0; row < n; row++) {
		let step = ''

		for (let col = 0; col < n; col++) {
			if (col <= row) {
				step += '#'
			} else {
				step += ' '
			}
		}
		console.log(step + '*')
	}
}

// Solution #2 - Recursion
// Time Complexity O()
// Space Complexity O()

var recursiveSteps = function (n, row = 0, step = '') {
	if (n === row) {
		return
	}

	if (n === step.length) {
		console.log(step + '*')
		return recursiveSteps(n, row + 1)
	}

	if (step.length <= row) {
		step += '#'
	} else {
		step += ' '
	}
	recursiveSteps(n, row, step)
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
