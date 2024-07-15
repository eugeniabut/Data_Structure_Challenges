class Node {
    constructor(data,next){
        this.data= data
        this.next = next
    }
}

class LinkedList{
    constructor(head,size){
        this.head =null
        this.size = 0
    }

insertFirst(data){
    this.head = new Node (data, this.head)  //create a head
    this.size++
} 

insertlast (data){
    let node = new Node (data)  //create a new node
    let current                  // initialize current

        if(!this.head){
            this.head = node
        }else {
            current = this.head  // current will loop from head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
}

insertAt(data, index) {
    if (index > 0 && index > this.size) { return; }
    if (index === 0) {                              //create a head
        this.head = new Node(data, this.head);
        this.size++;
        return;
    }

    const node = new Node(data);  // Create a new node
    let current, previous;

    current = this.head;  // Initialize pointers
    let count = 0;  // Keeps track of the current position in the list

    while (count < index) {  // Move through the list until count reaches the index
        previous = current;  
        count++;
        current = current.next;  // this is a common synax to move poiner
    }

    node.next = current;  // Point the new node to the current node
    previous.next = node;  // Point the previous node to the new node
    this.size++;  // Increment the size of the list
}




getDataAt(index) {
    if (index < 0 || index >= this.size) {
        return null; // or throw an error
    }
    
    let current = this.head;
    let count = 0;
    
    while (count < index) {
        current = current.next;
        count++;
    }
    
    return current.data;

 
 
}

removeAt(index) {
    let current = this.head;
    let previous;
    let count = 0;

    if (index < 0 || index >= this.size) {
        return; // Invalid index
    }

    if (index === 0) {
        this.head = current.next; // Remove the head node
    } else {
        while (count < index) {
            previous = current; // Node before the one to be removed
            current = current.next; // Node to be removed
            count++;
        }
        previous.next = current.next; // Bypass the node to be removed
    }

    this.size--; // Decrement the size of the list
}

clearList(){
    this.head = null
    this.size =0
}

printData() {
    let current = this.head;
    while (current) {
         console.log(current.data);
 current = current.next;
   
       
    }
}

}
const ll = new LinkedList
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertlast(50)
ll.insertAt(7777,2)
ll.printData()
ll.getDataAt(2)


