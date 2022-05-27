class Person {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.isAlive = true;
  }
  addChild(child) {
    this.children.push(child);
  }
}

class Monarchy {
  constructor(nameOfHead) {
    this.head = new Person(nameOfHead);
    this.map = {
      [nameOfHead]: this.head
    }
  }

  birth(child, parent) {
    if (this.map[parent]) {
      const childNode = new Person(child);
      this.map[parent].addChild(childNode);
      this.map[child] = childNode;
    }
  }
  death(name) {
    if (this.map[name]) {
      this.map[name].isAlive = false;
    }
  }
  getOrderOfSuccession() {
    const order = [];
    function depthFirst(p) {
      if (p.isAlive) {
        order.push(p.name);
      }

      for (let i = 0; i < p.children.length; i++) {
        depthFirst(p.children[i])
      }
    }
    depthFirst(this.head);
    return order;
  }
}

const m = new Monarch('Jake');
m.birth('Catherine', 'Jake')
m.birth('Jane', 'Catherine')
m.birth('Farah', 'Jane')
m.birth('Tom', 'Jake')
m.birth('Celine', 'Jake')
m.birth('Mark', 'Catherine')
m.birth('Peter', 'Celine')
m.death('Jake')
m.death('Jane')
console.log(m.getOrderOfSuccession());