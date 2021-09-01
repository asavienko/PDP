class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node || null;
    this.length = 0;
  }

  addToEnd(node) {
    if (!this.head) {
      this.length++;
      return (this.head = node);
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;

    this.length++;
  }

  pop() {
    if (this.length === 1) {
      this.length--;
      return (this.head = null);
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.length--;
  }

  unshift(node) {
    const prev = this.head;
    this.head = node;
    this.head.next = prev;
    this.length++;
  }

  shift() {
    this.head = this.head.next;
    this.length--;
  }

  insertByIndex(node, index) {
    let indexInner = 0;
    let cur = this.head;
    let prev = null;
    if (index === 0) {
      return this.unshift(node);
    }
    while (indexInner < index) {
      prev = cur;
      cur = cur.next;
      indexInner++;
    }
    prev.next = node;
    node.next = cur;
    this.length++;
  }

  removeByIndex(index) {
    if (index === 0) {
      return this.shift();
    }
    let indexInner = 0;
    let cur = this.head;
    let prev = null;
    while (indexInner < index) {
      prev = cur;
      cur = cur.next;
      indexInner++;
    }
    prev.next = cur.next;
    this.length--;
  }

  reverse() {
    let cur = this.head;
    let reversedList = null;
    let tmp = null;
    while (cur) {
      tmp = cur.next;
      cur.next = reversedList;
      reversedList = cur;
      cur = tmp;
    }
    return reversedList;
  }
}

const sumLinkedLists = (linkedList1, linkedList2) => {
  const resultLinkedList = new LinkedList()

  let linkedListCurrent1 = linkedList1.head
  let linkedListCurrent2 = linkedList2.head

  while (linkedListCurrent1) {
    resultLinkedList.addToEnd(new Node(linkedListCurrent1.value + linkedListCurrent2.value))
    linkedListCurrent1 = linkedListCurrent1.next
    linkedListCurrent2 = linkedListCurrent2.next
  }

  return resultLinkedList
}

const linkedList1 = new LinkedList();
linkedList1.addToEnd(new Node(1));
linkedList1.addToEnd(new Node(2));
linkedList1.addToEnd(new Node(3));
// const reversedList = linkedList1.reverse();

const linkedList2 = new LinkedList()
linkedList2.addToEnd(new Node(4))
linkedList2.addToEnd(new Node(5))
linkedList2.addToEnd(new Node(6))

// console.log(reversedList);
console.log(sumLinkedLists(linkedList1, linkedList2));
