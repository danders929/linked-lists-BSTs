class BinarySearchTree {
  // YOUR CODE HERE
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }
  insert(newValue){
    const newTree = new BinarySearchTree(newValue);
    if(newValue < this.value) {
      if(this.left === null){
        this.left = newTree;
      } else {
        this.left.insert(newValue)
      }
    } else if(newValue > this.value) {
      if(this.right === null) {
        this.right = newTree;
      } else {
        this.right.insert(newValue);
      }
    }
    this.magnitude += 1;
  }
  size(){
    return this.magnitude;
    }
  contains(value){
    if(value === this.value){
      return true;
    } else if (value < this.value && this.left !== null){
      return this.left.contains(value);
    } else if (value > this.value && this.right !== null){
      return this.right.contains(value);
    }
    return false;
  }
  depthFirstForEach(callback, order = 'in-order'){
    if (order === 'in-order') {
      if (this.left) {
        this.left.depthFirstForEach(callback, order);
      }
      callback(this.value); // in order has callback in middle
      if (this.right) {
        this.right.depthFirstForEach(callback, order);
      }
    } else if (order === 'pre-order') {
      callback(this.value); // pre order has callback at top
      if (this.left) {
        this.left.depthFirstForEach(callback, order);
      }
      if (this.right) {
        this.right.depthFirstForEach(callback, order);
      }
    } else if (order === 'post-order') {
      if (this.left) {
        this.left.depthFirstForEach(callback, order);
      }
      if (this.right) {
        this.right.depthFirstForEach(callback, order);
      }
      callback(this.value); // post order has callback at end
    }
  }
  breadthFirstForEach(callback){
    const queue = [this];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      callback(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
}

module.exports = BinarySearchTree
