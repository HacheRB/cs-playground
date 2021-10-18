/* Basic Implementation of a Linked List.

Prepend - O(1)
Append  - O(1)
Lookup  - O(n)
Insert  - O(n)
Delete  - O(n)

The first node of a linked list is called Head and the last node is called Tail and points to null as the next position of the list.

Needs some guards. Maybe a function that checks if index is valid.
*/

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  insert(index, value) {
    if (index <= 0) {
      return this.prepend(value)
    }
    if (index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    newNode.next = leader.next
    leader.next = newNode
    this.length++
  }

  remove(index) {
    if (index <= 0) {
      this.head = this.head.next
      return
    }

    if (index > this.length - 1) {
      index = this.length - 1
    }

    const leader = this.traverseToIndex(index - 1)
    const nodeBeingDeleted = leader.next
    leader.next = nodeBeingDeleted.next
    this.length--
  }

  traverseToIndex(index) {
    let count = 0
    let currentNode = this.head
    while (count !== index) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

const myLinkedList = new LinkedList(2)
myLinkedList.append(4)
myLinkedList.append(6)
myLinkedList.prepend(0)
myLinkedList.insert(2, 3)
myLinkedList.insert(0, -1)
myLinkedList.insert(20, 11)
myLinkedList.printList()
myLinkedList.remove(20)
myLinkedList.printList()

// Example -

//Solution #1 - Using a Hash Map
// Time Complexity O(n)
// Space Complexity O(n)

var solution1 = function () {}

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1())
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
