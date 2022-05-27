class PriorityQueue {
  constructor(comparator) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return 2 * idx + 1;
  }
  
  _rightChild(idx) {
    return 2 * idx + 2;
  }

  _swap(idx1, idx2) {
    [this._heap[idx1], this._heap[idx2]] = [this._heap[idx2], this._heap[idx1]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() && this._compare(this._leftChild(nodeIdx), nodeIdx)) || 
      (this._leftChild(nodeIdx) < this.size() && this._compare(this._leftChild(nodeIdx), nodeIdx))
    ) {  
        const tempIdx = this._rightChild(nodeIdx) < this.size() && this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);
        
        this._swap(nodeIdx, tempIdx);
        nodeIdx = tempIdx;
    }
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();
    return this.size();
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }
    const removed = this._heap.pop();
    this._siftDown();
    return removed;
  }
}