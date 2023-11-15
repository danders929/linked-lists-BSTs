const {LinkedList, Node} = require('../src/linked-list');

// ## Linked Lists

// A **Linked List** is a data structure, meaning a concrete programmatic way of managing information in memory. They can be used to implement a number of ADTs, including Queues, Stacks, Lists, and others.

// Linked Lists are collections of *nodes* — wrapper structures which encapsulate a `value` and one or more *pointers* (references) to other nodes. The Linked List instance typically only has a reference to a so-called *handle* node, e.g. the `head` (first node) — it has no direct knowledge of other nodes in the list. However, the handle then points to a `next` node, which itself points to another `next` node, and so on and so forth. A list ends when a node's `next` pointer is `null` or `undefined`. The act of starting from a handle and visiting nodes in sequence is known as "traversing" a linked list.

// Below is a description of a singly-linked list with a `head` handle and three nodes total:

// ```
// Head reference -> Node A
// Node A has value 56 and pointer next -> Node B
// Node B has value 33 and pointer next -> Node C
// Node C has value 12 and pointer next -> null
// ```

// ```
// HEAD  ────┐                                 ┌──── TAIL
//           │                                 │
//           │                                 │
//           ▼                                 ▼
//      ┌────┬────┐      ┌────┬────┐      ┌────┬────┐
//      │    │    │      │    │    │      │    │    │
//      │ 56 │  ──┼────> │ 33 │  ──┼────> │ 12 │  ──┼───> NULL
//      │    │    │      │    │    │      │    │    │
//      └────┴────┘      └────┴────┘      └────┴────┘
// ```

// Linked Lists can come in various flavors. For example, in doubly-linked lists, each node might point both to the `next` node and to the `previous` node as well. In some variations, the parent Linked List instance might maintain both `head` *and* `tail` references. For this workshop, follow the (opinionated) spec to implement a doubly-linked list with both handles.

// *Side note: in JavaScript, an object is maintained in memory so long as there exist references to it. Once an object has no references pointing to it, automatic garbage collection will eventually free that memory so that the program can use it for other variables (it does not matter if the object itself has references to other variables). So the only real way to "delete" an object in JS to remove all references to it.*


describe("Node", () => {
  test('should take a value argument in the constructor and define next and previous to be null by default', () => {
    const node = new Node('test')
    expect(node.value).toEqual('test')
    expect(node.next).toEqual(null)
    expect(node.previous).toEqual(null)
  })
})

describe("Linked List", () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  test('should take no arguments in the constructor and define head and tail to be null', () => {
    expect(linkedList.head).toEqual(null)
    expect(linkedList.tail).toEqual(null)
  })

  test('has methods `addToTail`, `addToHead`, `removeHead`, `removeTail`, and `search`', () => {
    expect(typeof linkedList.addToTail).toEqual('function')
    expect(typeof linkedList.addToHead).toEqual('function')
    expect(typeof linkedList.removeHead).toEqual('function')
    expect(typeof linkedList.removeTail).toEqual('function')
    expect(typeof linkedList.search).toEqual('function')
  })

  test('`addToTail` method should take a value as a parameter', () => {
    // the length of a function returns how many parameters it has
    expect(linkedList.addToTail.length).toEqual(1)
  })

  test('`addToTail` method should use `Node` class to add nodes', () => {
    linkedList.addToTail('first')
    expect(linkedList.tail instanceof Node).toEqual(true)
  })

  test('`addToTail` method should be able to add to tail without removing or overwriting existing nodes', () => {
    linkedList.addToTail('first')
    expect(linkedList.tail.value).toEqual('first')

    linkedList.addToTail('second')
    expect(linkedList.tail.value).toEqual('second')
    expect(linkedList.tail.previous.value).toEqual('first')
  })

  test('if the linked list consists of a single node after adding to tail, that node should be both the head and the tail', () => {
    linkedList.addToTail('only')
    expect(linkedList.head.value).toEqual('only')
    expect(linkedList.head).toEqual(linkedList.tail)
    expect(linkedList.head.next).toEqual(null)
    expect(linkedList.head.previous).toEqual(null)
  })

  test('`addToHead` method should take a value as a parameter', () => {
    // the length of a function returns how many parameters it has
    expect(linkedList.addToHead.length).toEqual(1)
  })

  test('`addToHead` method should use `Node` class to add nodes', () => {
    linkedList.addToHead('first')
    expect(linkedList.head instanceof Node).toEqual(true)
  })

  test('`addToHead` method should be able to add to head without removing or overwriting existing nodes', () => {
    linkedList.addToHead('first')
    expect(linkedList.head.value).toEqual('first')

    linkedList.addToHead('zeroth')
    expect(linkedList.head.value).toEqual('zeroth')
    expect(linkedList.head.next.value).toEqual('first')
  })

  test('if the linked list consists of a single node after adding to head, that node should be both the head and the tail', () => {
    linkedList.addToHead('only')
    expect(linkedList.head.value).toEqual('only')
    expect(linkedList.head).toEqual(linkedList.tail)
    expect(linkedList.head.next).toEqual(null)
    expect(linkedList.head.previous).toEqual(null)
  })

  test('`removeHead` method should return the `value` of the removed head node', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toEqual('first')
    expect(linkedList.removeHead()).toEqual('second')
    expect(linkedList.removeHead()).toEqual('third')
  })

  test('`removeHead` method should reassign the `head` after the current head node is removed', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')

    linkedList.removeHead() // remove 'first'
    expect(linkedList.head.value).toEqual('second')

    linkedList.removeHead() // remove 'second'
    expect(linkedList.head.value).toEqual('third')
  })

  test('`removeHead` method should make sure the `previous` of any newly appointed head is null', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')

    linkedList.removeHead()
    expect(linkedList.head.value).toEqual('second')
    expect(linkedList.head.previous).toEqual(null)

    linkedList.removeHead()
    expect(linkedList.head.value).toEqual('third')
    expect(linkedList.head.previous).toEqual(null)
  })

  test('`removeHead` method returns null if there is no head to remove (ie: the list is empty, or all nodes have been removed)', () => {
    expect(linkedList.removeHead()).toEqual(null)

    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    linkedList.removeHead()
    linkedList.removeHead()
    linkedList.removeHead()
    expect(linkedList.removeHead()).toEqual(null)
  })

  test('`removeHead` method should reset head and tail to null when last node is removed', () => {
    linkedList.addToTail('first')
    linkedList.removeHead()
    expect(linkedList.head).toEqual(null)
    expect(linkedList.tail).toEqual(null)
  })

  test('`removeTail` method should return the `value` of the removed tail node', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeTail()).toEqual('third')
    expect(linkedList.removeTail()).toEqual('second')
    expect(linkedList.removeTail()).toEqual('first')
  })

  test('`removeTail` method should reassign the `tail` after the current tail node is removed', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')

    linkedList.removeTail() // remove 'third'
    expect(linkedList.tail.value).toEqual('second')

    linkedList.removeTail() // remove 'second'
    expect(linkedList.tail.value).toEqual('first')
  })

  test('`removeTail` method should make sure the `next` of any newly appointed tail is null', () => {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')

    linkedList.removeTail()
    expect(linkedList.tail.value).toEqual('second')
    expect(linkedList.tail.next).toEqual(null)

    linkedList.removeTail()
    expect(linkedList.tail.value).toEqual('first')
    expect(linkedList.tail.next).toEqual(null)
  })

  test('`removeTail` method returns null if there is no tail to remove (ie: the list is empty, or all nodes have been removed)', () => {
    expect(linkedList.removeTail()).toEqual(null)

    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    linkedList.removeTail()
    linkedList.removeTail()
    linkedList.removeTail()
    expect(linkedList.removeTail()).toEqual(null)
  })

      // The `search` method takes a "comparator" as a parameter, traverses the linked list, and returns the `value` of the matching node if found, or `null` if not found.
    // The "comparator" could be a string or a function.
    // When the comparator is a string, the `search` method will compare each node's `value` with the comparator string.
    // When the comparator is a function, that function will accept a value as a parameter and return a boolean indicating if the value is a match. The `search` method will use the comparator function on each node's `value` to determine if it is a match.

  test('should return the correct values when searching for a string or number', () => {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    linkedList.addToTail('three')
    expect(linkedList.search('one')).toEqual('one')
    expect(linkedList.search('sdd')).toEqual(null)
    expect(linkedList.search('three')).toEqual('three')
  })

  test('should be able to take functions as search inputs', () => {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    const foundNode = linkedList.search((nodeValue) => {
      return nodeValue === 'two'
    })
    expect(foundNode).toEqual('two')
  })

  // This spec demonstrates the utility of the previous spec.
  // If you are passing the last one correctly, this one should already pass!
  test('should therefore be able to store and search for objects, not just strings', () => {
    function UserNode (name, email, city) {
      this.name = name
      this.email = email
      this.city = city
    }

    linkedList.addToHead(new UserNode('Nimit', 'nimit@fs.com', 'New York'))
    linkedList.addToHead(new UserNode('David', 'david@fs.com', 'New York'))
    linkedList.addToHead(new UserNode('Paul', 'paul@yc.com', 'Mountain View'))

    const foundNode1 = linkedList.search((userNode) => {
      return userNode.name === 'Nimit'
    })
    expect(foundNode1.email).toEqual('nimit@fs.com')

    const foundNode2 = linkedList.search((userNode) => {
      return userNode.email === 'david@fs.com'
    })
    expect(foundNode2.city).toEqual('New York')

    const foundNode3 = linkedList.search((userNode) => {
      return userNode.city === 'Mountain View'
    })
    expect(foundNode3.name).toEqual('Paul')
  })
})
