/* Basic Implementation of a Queue.

To do: Implement with a linked list. */

class Queue {
	constructor() {
		this._storage = {}
		this._head = 0
		this._tail = 0
	}
	enqueue(value) {
		if (value) {
			this._storage[this._tail] = value
			this._tail++
		}
	}
	dequeue() {
		if (!this.isEmpty) {
			const item = this._storage[this._head]
			delete this._storage[this._head]
			this._head++
			return item
		}
	}
	peek() {
		return this._storage[this._head]
	}
	get length() {
		return this._tail - this._head
	}
	get isEmpty() {
		return this.length === 0
	}
}

let q = new Queue()
for (let i = 1; i <= 7; i++) {
	q.enqueue(i)
}
console.log(q.peek())
console.log(q.length)

while (!q.isEmpty) {
	console.log(q.dequeue())
}
