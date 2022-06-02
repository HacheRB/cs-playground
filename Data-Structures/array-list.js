/* Basic Implementation of an Array. 
Needs to check for edge cases.
*/

class ArrayList {
	constructor() {
		this.data = {}
		this.length = 0
	}

	push(value) {
		this.data[this.length] = value
		this.length++
	}

	pop() {
		if (this.length < 1) return undefined

		const deleted = this.data[this.length - 1]
		delete this.data[this.length - 1]
		this.length--
		return deleted
	}

	get(index) {
		return this.data[index]
	}

	delete(index) {
		if (index < 0 || index > this.length - 1) return undefined

		const deleted = this.data[index]
		this._collapseTo(index)
		return deleted
	}

	_collapseTo(index) {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1]
		}
		delete this.data[this.length - 1]
		this.length--
	}
	print
}

const myArrayList = new ArrayList()
myArrayList.push(1)
myArrayList.push(2)
myArrayList.push(3)
myArrayList.push(4)
myArrayList.push(5)
myArrayList.push(6)
console.log(myArrayList)
myArrayList.pop()
console.log(myArrayList)
myArrayList.delete(2)
console.log(myArrayList.data)
