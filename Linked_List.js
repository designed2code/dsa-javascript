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
  pop(){
    // Case 1. When the LL is already empty
    if(this.head && this.tail == null) return undefined
        // Two extra pointers (pre becomes the tail and temp becomes the popped off item)
    let temp = this.head
    let pre = this.head
    // Case 2. When the LL has items
    // The loop runs until the temp.next points to null
    while(temp.next){
      // Put temp in pre
      pre = temp
      // Put temp.next that is the next pointer to temp
      temp = temp.next
    }
    // Once the loop breaks
    // pre becomes the tail
    this.tail = pre 
    this.tail.next = null 
    this.length--

    // Case 3. When the LL has only one item
    if(this.length == 0){
      this.head = null
      this.tail = null
    }
    // Temp coonsists of the popped item
    return temp
  }
  unshift(value){
    const newNode = new Node(value)
    // If the LL is empty both head and tail point to the newNode
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }else{
        // Make the pointer of the newNode point to the head
        newNode.next = this.head
        // Make the head point to the newNode
        this.head = newNode
    }
    // Increment the Length
    this.length++
    // return the entire LL
    return this
}
  }



const myLL = new LinkedList(7)
myLL.push(4)
myLL.push(5)
myLL.push(6)
myLL.pop()
myLL.unshift(10)
console.log(myLL)








