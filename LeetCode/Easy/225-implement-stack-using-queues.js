// https://leetcode.com/problems/implement-stack-using-queues/

// Solution #1
// Time Complexity - Push O(1) Pop 0(n)
// Space Complexity O(1)

var MyStack = function () {
	this.queue = []
	this.tmp = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.queue.push(x)
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
	let lastPosition = this.queue.length - 1
	let top = this.queue[lastPosition]

	for (let i = 0; i < lastPosition; i++) {
		this.tmp.push(this.queue[i])
	}

	this.queue = this.tmp
	this.tmp = []
	return top
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
	return this.queue[this.queue.length - 1]
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return this.queue.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
