const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSizes = maxSize ? maxSize : 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		this.heap.push(data, priority);
		if(this.heap.size() == this.maxSize){
			throw new Error;
		}
	}

	shift() {

	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		if (this.heap.length ===0)
		return true;
	}
}

module.exports = PriorityQueue;
