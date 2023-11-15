class Node {
  // YOUR CODE HERE
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  // YOUR CODE HERE
  constructor(){
    this.head = null;
    this.tail = null;
  }
  addToTail(value){
    const newNode = new Node(value);
    if(!this.tail){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  }
  addToHead(value){
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  }
  removeHead(){
    if(!this.head){
      return null;
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    } else {
      this.tail = null; 
    }
    return removedValue;
  }
  removeTail(){
    if(!this.tail){
      return null;
    }
    const removedValue = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null; 
    }
    return removedValue;
  }
  search(value){
    let current = this.head;
    while (current) {
      if(typeof value === 'function'){
        if (value(current.value)) {
          return current.value;
        }
      } else {
        if (current.value === value) {
          return current.value;
        }
      }
      current = current.next;
    }
    return null;
  }
}

module.exports = {
  Node,
  LinkedList
}
