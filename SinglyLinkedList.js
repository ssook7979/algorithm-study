class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedLilst {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let node = this.head;
    let tmp = null;

    while (node.next) {
      tmp = node;
      node = node.next;
    }

    if (!tmp) {
      this.head = null;
    }

    this.tail = tmp;
    this.tail.next = null
    this.length--;
    return node;
  }

  shift() {
    if (!this.head) return undefined;
    
    const node = this.head;
    node.next = null;

    this.head = node;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return node;
  }

  unshift(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.length) {
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;

    let node = this.head;
    
    while (idx) {
      node = node.next;
      idx--;
    }
    return node;
  }

  set(idx, val) {
    const node = this.get(idx);

    if (!node) return false;
    
    node.val = val;
    return true; 
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) {
      this.push(val)
    } else if (idx === 0) {
      this.unshift(val);
    } else {
      const nodeBefore = this.get(idx - 1);
      const nodeAfter = nodeBefore.next
      const newNode = new Node(val);
  
      nodeBefore.next = newNode;
      newNode.next = nodeAfter;
    }
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;

    let nodeRemoved;

    if (idx === this.length - 1) {
      nodeRemoved = this.pop();
    } else if (idx === 0) {
      nodeRemoved = this.shift();
    } else {
      const nodeBefore = this.get(idx - 1);
      nodeRemoved = nodeBefore.next;
      const nodeAfter = nodeRemoved.next;
      nodeBefore.next = nodeAfter;
    }
    this.length--;
    return nodeRemoved;
  }

  // inplace
  reverse() {
    const oldHead = this.head;
    const oldTail = this.tail;

    let node = this.head;
    let tmpBefore = null;
    let tmpAfter = null;
    let iter = 0;

    while(iter < this.length - 1) {
      tmpAfter = node.next
      node.next = tmpBefore;
      node = tmpAfter;
      tmpBefore = node;
      
      if (iter === this.length - 2) {
        oldTail.next = node;
        
        this.tail = oldHead;
        this.head = oldTail;
      }
    }

  }
}

let sll = new SinglyLinkedLilst();
console.log(sll.push(1))
console.log(sll.push(2))
console.log(sll.push(3))
console.log(sll.reverse());
console.log(sll);
