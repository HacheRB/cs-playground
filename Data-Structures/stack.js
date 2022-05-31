/* Basic Implementation of a Stack. */

class Stack {
	constructor() {
		this._length = 0
		this._storage = {}
	}

	push(value) {
		if (value) {
			this._storage[this._length] = value
			this._length++
		}
	}

	pop() {
		if (this._length >= 1) {
			const lastValue = this._storage[this._length - 1]
			this._storage[this._length - 1] = undefined
			this._length--
			return lastValue
		}
	}

	peek() {
		if (this._length >= 1) {
			return this._storage[this._length - 1]
		}
	}
}

const myStack = new Stack()
console.log(myStack.push())
console.log(myStack.pop())
myStack.push('first')
console.log(myStack)
myStack.push('second')
console.log(myStack)
myStack.pop()
console.log(myStack)
