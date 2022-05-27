class Vertex {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }
}

class PriorityQueue {
  constructor(comparator) {
    this.heap = [];
    this._comparator = comparator;
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  _compare(i, j) {
    return this._comparator(this.heap[i].weight, this.heap[j].weight);
  }

  _siftUp() {
    let idx = this.heap.length - 1;
    while (this._parent(idx) > 0 && this._compare(idx, this._parent(idx))) {
      this._swap(this._parent(idx), idx);
      idx = this._parent(idx);
    }
  }

  _siftDown() {
    let idx = 0;
    while ((this._leftChild(idx) < this._size() && this._compare(this._leftChild(idx), idx)) ||
      (this._rightChild(idx) < this._size() && this._compare(this._rightChild(idx), idx))
    ) {
      const tempIdx = this.rightChild(idx) < this.size() && this._compare(this._rightChild(idx), this._leftChild(idx))
        ? this.rightChild(idx)
        : this.leftChild(idx);
      this._swap(idx, tempIdx);
    }
  }

  _push(value) {
    this.heap.push(value);
    this._siftUp();
    return this._size();
  }

  size() {
    return this.heap.length;
  }

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _leftChild(i) {
    return 2 * i + 1;
  }

  _rightChild(i) {
    return 2 * i + 2;
  }

  _pop() {
    if (this.size() > 0) {
      this._swap(0, this.size() - 1);
    }
    const removed = this.heap.pop();
    this._siftDown();
    return this.size();
  }
}

function dijkstra(links, k) {
  const initK = k;
  const pq = new PriorityQueue();
  const visited = {};
  let weightedGraph = {};
  
  for (let i = 0; i < links.length; i++) {
    let start, end, weight = links[i];
    if (!weightedGraph[start]) {
      weightedGraph[start] = {};
    }
    weightedGraph[end] = weight;
    visited[start] = Infinity;
  }

  pq.push(new Vertex(k, 0));
  visited[k] = 0;

  while (pq.size() > 0) {
    let v = pq.pop();
    for (key in weightedGraph[k]) {
      visited[key] = Math.min(v.weight + weightedGraph[k][key], visited[key]);
      pq.push(new Vertex(key, visited[key]));
    }
    k = key;
  }
  let result = -Infinity;
  for (let key in visited) {
    result = Math.max(result, visited[key]);
  }
  return result < Infinity? result : null;
}