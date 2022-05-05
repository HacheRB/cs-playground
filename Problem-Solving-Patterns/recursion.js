/* Recursion 
Useful to break a large difficult problem into smaller ones.

An example would be sorting a really big array. We would break it into two smaller arrays, then repeat the process with the new arrays until they are sorted. This would be how merge sort works.

A typical recursion problem would be the fibonacci sequence.

Always set your base case first, so that your recursive function has a stop condition and doesn't go into an infinite loop. */

// Fibonacci Sequence
// Time Complexity O(2^n)
// Space Complexity O(n)

var fibonacci = function (n) {
	if (n === 1 || n === 2) return 1
	if (n === 0) return 0

	return fibonacci(n - 1) + fibonacci(n - 2)
}

// Iterated Fibonacci
// Time Complexity O(n)
// Space Complexity O(1)

var iteratedFibonacci = function (n) {
	const sequence = [0, 1]
	for (let i = 2; i < n + 1; i++) {
		sequence.push(sequence[i - 2] + sequence[i - 1])
	}
	return sequence[n]
}

// Memoized Fibonacci
// Time Complexity O(n)
// Space Complexity O(1)

var memoizedFibonacci = function (n, memoized = [0, 1, 1]) {
	if (memoized[n]) {
		return memoized[n]
	}
	memoized[n] =
		memoizedFibonacci(n - 1, memoized) + memoizedFibonacci(n - 2, memoized)
	return memoized[n]
}

let n = 32

console.log('Fibonacci')
const t0 = performance.now()
console.log(fibonacci(n))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Iterated Fibonacci')
const t2 = performance.now()
console.log(iteratedFibonacci(n))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Memoized Fibonacci')
const t4 = performance.now()
console.log(memoizedFibonacci(n))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')

// Nested Addition - Recursion
// Time Complexity O(nk) probably, K would be the depth of the nested arrays/size of subarrays
// Space Complexity O(n) probably

var nestedAddition = function (nums) {
	let sum = 0
	for (let i = 0; i < nums.length; i++) {
		if (typeof nums[i] === 'number') {
			sum += nums[i]
		} else {
			sum += nestedAddition(nums[i])
		}
	}
	return sum
}

let nums = [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]]

console.log('Nested Addition')
const t6 = performance.now()
console.log(nestedAddition(nums))
const t7 = performance.now()
console.log(`Took ${t7 - t6} milliseconds.`)
console.log('--------------------------------------')

// Factorial - Recursion
// Time Complexity O()
// Space Complexity O(n) probably

var factorial = function (m) {
	if (m <= 1) return 1
	return m * factorial(m - 1)
}

let m = 8

console.log('Factorial')
const t8 = performance.now()
console.log(factorial(m))
const t9 = performance.now()
console.log(`Took ${t9 - t8} milliseconds.`)
console.log('--------------------------------------')

// String Reversal
// Time Complexity O()
// Space Complexity O(n) probably

var reverseString = function (str) {
	if (str === '') return ''

	return reverseString(str.substring(1)) + str.charAt(0)
}

let str = 'Hello'

console.log('String Reversal')
const t10 = performance.now()
console.log(reverseString(str))
const t11 = performance.now()
console.log(`Took ${t11 - t10} milliseconds.`)
console.log('--------------------------------------')

// Palindrome checker
// Time Complexity O()
// Space Complexity O(n) probably

var isPalindrome = function (str) {
	if (str.length <= 1) return true

	if (
		str.charAt(0).toLowerCase() === str.charAt(str.length - 1).toLowerCase()
	) {
		return isPalindrome(str.substring(1, str.length - 1))
	}

	return false
}

let str2 = 'Racecar'

console.log('Palindrome checker')
const t12 = performance.now()
console.log(isPalindrome(str2))
const t13 = performance.now()
console.log(`Took ${t11 - t10} milliseconds.`)
console.log('--------------------------------------')

// Decimal to Binary
// Time Complexity O()
// Space Complexity O(n) probably

var decimalToBinary = function (num) {
	if (num >= 1) {
		// If num is not divisible by 2 then recursively return proceeding binary of the num minus 1, 1 is added for the leftover 1 num
		if (num % 2) {
			return decimalToBinary((num - 1) / 2) + 1
		} else {
			// Recursively return proceeding binary digits
			return decimalToBinary(num / 2) + 0
		}
	} else {
		// Exit condition
		return ''
	}
}

let num = 2

console.log('Decimal to Binary')
const t14 = performance.now()
console.log(decimalToBinary(num))
const t15 = performance.now()
console.log(`Took ${t15 - t14} milliseconds.`)
console.log('--------------------------------------')
