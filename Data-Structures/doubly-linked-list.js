/* Basic Implementation of a Doubly Linked List.

Prepend - O(1)
Append  - O(1)
Lookup  - O(n)
Insert  - O(n)
Delete  - O(n)

The first node of a linked list is called Head and the last node is called Tail and points to null as the next position of the list.

A doubly linked list allows us to traverse our list backwards and lookup could be O(n/2) as we could search from start and end and if we know in which half we can find the result, we can optimize our initial search.

A downside of a doubly linked list would be that it uses more memory than a single linked list.

When to use Single or Double Linked Lists.

Single: 
- Easier to implement
- Requires less memory
- A little bit faster.

Doubly:
- Can traverse backwards
- Better if you need to search regularly through the List
- Easier to delete previous Nodes.

Needs some guards. Maybe a function that checks if index is valid.
*/

class Node {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.next = next
    this.previous = previous
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    newNode.previous = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.previous = newNode
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
    const follower = leader.next
    leader.next = newNode
    newNode.previous = leader
    newNode.next = follower
    follower.previous = newNode
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

const myLinkedList = new DoublyLinkedList(2)
myLinkedList.append(4)
myLinkedList.append(6)
myLinkedList.prepend(0)
myLinkedList.insert(2, 3)
myLinkedList.insert(0, -1)
myLinkedList.insert(20, 11)
myLinkedList.printList()
myLinkedList.remove(20)
myLinkedList.printList()
