// Create a Node class
class Node {
// Add a constructor function
constructor(value){
// Initialize the value and pointer
this.value = value
this.next = null
}
}

// Create a LL class
class LinkedList{
  // Add a constructor function
  constructor(value){
  // Create a newNode
  const newNode = new Node(value)
  // Point the newNode to head and tail
  this.head = newNode
  this.tail = this.head
  // Keep track of length
  this.length = 1
  }
}






