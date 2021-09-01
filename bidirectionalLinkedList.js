class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null
  }
}

class LinkedList {
  constructor(node) {
    this.head = node || null;
    this.tail = node || null;
    this.length = node ? 1 : 0;
  }

  setTail(node) {
    this.tail = node
  }

  push(node) {
    this.length++
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  pop() {
    this.length--
    this.tail = this.tail.prev
    this.tail.next = null
  }

  unshift(node) {
    this.head.prev = node
    node.next = this.head
    this.head = node
    this.length++
  }

  shift() {
    this.length--
    this.head = this.head.next
    this.head.prev = null
  }

  getByIndex(index) {
    let i = 0
    let current = this.head
    while (i !== index) {
      i++
      current = current.next
    }

    return current
  }

  addByIndex(node, index) {
    const current = this.getByIndex(index)
    node.next = current
    node.prev = current.prev
    current.prev.next = node
    current.prev = node
    this.length++
  }

  removeByIndex(index) {
    const current = this.getByIndex(index)
    current.prev.next = current.next
    current.next.prev = current.prev
    this.length--
  }

  reverse() {
    let current = this.head
    while (current) {
      let temp = current.next
      current.next = current.prev
      current.prev = temp
      current = temp
    }
    let temp = this.head
    this.head = this.tail
    this.tail = temp
  }
}

const node = new Node(1)

const list = new LinkedList(node)
list.push(new Node(2))
list.push(new Node(3))
list.push(new Node(4))
list.addByIndex(new Node("A"), 2)
list.removeByIndex(2)
list.reverse()


console.log(list)
