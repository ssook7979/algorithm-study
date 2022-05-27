class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let node = this.root;
      while(true) {
        if (value === node.value) return undefined;
        if (value > node.value) {
          if (!node.right) {
            node.right = newNode;
            return this;
          }
          node = node.right
        } else {
          if (!node.left) {
            node.left = newNode;
            return this;
          }
          node = node.left
        }
      }

    }
  }

  find(value) {
    let node = this.root;
    while (node) {
      if (value === node.value) return true;
      node = value < node.value? node.left : node.right;
    }

    return false;
  }

  breadthFirstSearch() {
    const queue = [this.root];
    const visited = [];

    while (queue.length) {
      const dequeued = queue.pop();
      visited.push(dequeued.value);
      if (dequeued.left) queue.unshift(dequeued.left);
      if (dequeued.right) queue.unshift(dequeued.right);
    }

    return visited;
  }

  depthFirstSearchPreOrder() {
    const visited = [ this.root.value ];
    let current = this.root;
    
    function visitNode(node, visited) {
      if (!node) return;

      visited.push(node.value);
      
      if (node.left) {
        visitNode(node.left, visited);
      }
      
      if (node.right) {
        visitNode(node.right, visited);
      }
    }

    visitNode(current.left, visited);
    visitNode(current.right, visited);

    return visited;
  }

  depthFirstSearchPostOrder() {
    const visited = [];
    let current = this.root;

    function visitNode(node, visited) {
      if (!node) return;
      if (node.left) {
        visitNode(node.left, visited);
      }
      
      if (node.right) {
        visitNode(node.right, visited);
      }

      visited.push(node.value)
    }
    visitNode(current, visited);
    return visited;
  }

  depthFirstSearchInOrder() {
    const visited = [];
    let current = this.root;

    function visitNode(node) {
      if (!node) return;
      if (node.left) {
        visitNode(node.left);
      }
      visited.push(node.value);
      if (node.right) {
        visitNode(node.right);
      }
    } 

    visitNode(current);
    return visited;
  }

  // bc: space O(logN), time O(N)
  // wc: space O(N), time O(N)
  findMaxDepth() {
    function traverse(node, depth) {
      if (!node) return depth;
      depth++;
      return Math.max(
        traverse(node.left, depth), 
        traverse(node.right, depth)
      );
    }
    
    return traverse(this.root, 0);
  }

  //BFS
  findMaxDepth1() {
    let depth = 0;
    let current;
    let nodes = [this.root];
    let children = []

    while (nodes.length || children.length) {
      current = nodes.pop();
      current.left && children.unshift(current.left);
      current.right && children.unshift(current.right);
      
      if (nodes.length === 0) {
        nodes = children;
        children = [];
        depth++;
      }
    }
    return depth;
  }

  getLevelOrder() {
    const levelOrder = [];
    let nodes = [this.root];
    let children = [];
    let values = [];
    let dequeued;

    while (nodes.length || children.length) {
      dequeued = nodes.pop();
      values.push(dequeued.value);
      dequeued.left && children.unshift(dequeued.left);
      dequeued.right && children.unshift(dequeued.right);
      if (!nodes.length) {
        nodes = children;
        children = [];
        levelOrder.push(values);
        values = [];
      }
    }
    
    return levelOrder;
  }

  getRightSideView() {
    const nodes = [this.root];
    const values = [];
    let length = 1, count = 1;
    while(nodes.length) {
      for (let i = 0; i++; i < length) {
        let current = nodes.pop();
        current.right && nodes.unshift(current.right) && count++;
        current.left && nodes.unshift(current.left) && count++;
        if (i === 0) {
          values.push(current.value);
        }
      }
      length = count;
      count = 0;
    }

    return values;
  }
}

function validateBinarySearchTree(bst) {
  let result = true;
  function traverse2(node, leftLimit=-Infinity, rightLimit=Infinity) {
    if (node.left) {
      if (node.left.value < node.value && node.left.value > leftLimit) {
        result = result && traverse(node.left, leftLimit, node.value);
      } else {
        return false;
      }
    }

    if (node.right) {
      if (node.right.value > node.value && node.right.value < rightLimit) {
        result = result && traverse(node.right, node.value, rightLimit);
      } else {
        return false;
      }
    }
  }
  function traverse(node, min=-Infinity, max=Infinity) {
    if (node.left) {
      if (node.left.value > node.value || (prev && node.left.valu)) {
        return false;
      }
      result = result && traverse(node.left);
    }

    if (node.right) {
      if (node.value > node.right.value) {
        return false;
      }
      result = result && traverse(node.right);
    }

    return result;
  }

  return traverse(bst.root);
}

/*
  ## recap
  - non-linear dta structures
  ## tree의 search에 recursion을 이용하므로 각 depth를 하나의 cycle로 생각하면 된다.
  ## DFS - PreOrder
  - flatten, construct or copy a tree structure
  ## BFS vs. DFS ?
  - 모든 node를 방문하므로 time complexity는 n으로 모두 같다.
  - BFS의 경우, 만일 depth가 많은 Full tree라면 각 depth별 데이터는 2^n 으로 증가하므로 queue에 저장되는 데이터는 2^n.
  반면, DFS의 경우 n space 만이 필요하다.
  - 그러나 불균형한 tree일 경우, (최악의 경우 linkedlist같은 형태..almost one sided) BFS는 각 cycle 당 fewer node를 메모리에 저장하고 있는다. 
  - 만일 depth가 매우 큰 불균형 tree라면 depth first의 경우 BFS보다 더 많은 memory를 필요로 한다.
  - wide tree라면 depth first, narrow and deep tree라면 breadth first가 유리

DFS
1. In order: left - root - right
2. Pre order: root - left - right
3. Post order: left - right - root

*/


const bst = new BinarySearchTree();
bst.insert(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7).insert(8);
//bst.root.left.left = new Node(100);
//const visited = bst.depthFirstSearchInOrder();
console.log(validateBinarySearchTree(bst));