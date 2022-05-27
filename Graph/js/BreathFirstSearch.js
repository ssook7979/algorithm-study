class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }
}

function breathFirstSearch(start) {
  let q = [start];
  let a = [];
  let seen = {}
  let node;

  while (q.length > 0) {
    node = q.shift();
    if (seen[node.value]) {
      continue;
    }
    a.push(node.value);
    q = [...q, ...node.neighbors];
    seen[node.value] = true;
  }

  return a;
}