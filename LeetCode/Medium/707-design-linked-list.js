class Node {
	constructor(val, next = null) {
		this.val = val
		this.next = next
	}
}

var MyLinkedList = function () {
	this.head = null
	this.tail = null
	this.length = 0
}

MyLinkedList.prototype.get = function (index) {
	if (this.length === 0 || index < 0 || index > this.length - 1) return -1

	let currentNode = this.head
	let count = 0

	while (count !== index) {
		currentNode = currentNode.next
		count++
	}
	return currentNode.val
}

MyLinkedList.prototype.addAtHead = function (val) {
	const newNode = new Node(val)

	if (!this.head) {
		this.head = newNode
		this.tail = newNode
	} else {
		newNode.next = this.head
		this.head = newNode
	}
	this.length++
}

MyLinkedList.prototype.addAtTail = function (val) {
	const newNode = new Node(val)

	if (!this.head) {
		this.head = newNode
		this.tail = newNode
	} else {
		this.tail.next = newNode
		this.tail = newNode
	}
	this.length++
}

MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (index > this.length) return
	if (index <= 0) {
		return this.addAtHead(val)
	}
	if (index === this.length) {
		return this.addAtTail(val)
	}

	let count = 0
	const newNode = new Node(val)
	let currentNode = this.head

	while (count !== index - 1) {
		currentNode = currentNode.next
		count++
	}

	newNode.next = currentNode.next ? currentNode.next : null
	currentNode.next = newNode
	this.length++
}

MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index >= this.length || index < 0) return
	if (index === 0) {
		this.head = this.head.next
		this.length--
		return this
	}

	let count = 0
	let currentNode = this.head

	while (count !== index - 1) {
		currentNode = currentNode.next
		count++
	}

	currentNode.next = currentNode.next.next ? currentNode.next.next : null

	if (!currentNode.next) {
		this.tail = currentNode
	}

	this.length--
}
