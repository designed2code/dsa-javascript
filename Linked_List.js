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
  // Create a push method in order to push elements
  push(value)
  {
    // In order to push create a newNode
    const newNode = new Node(value)
  // Check if the LL is empty (edge case)
  if(!this.head){
    this.head = newNode
    this.tail = newNode
  }
  else{
  // If not empty then add the newNode and increase the length
  this.tail.next = newNode
  this.tail = newNode
  }
  this.length++
  return this
  }
  }



const myLL = new LinkedList(7)
myLL.push(4)
console.log(myLL)








