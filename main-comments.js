
// Javascript Algorithm

// linked list how to for Javascript
// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
// annotated and edited by Kat Type M Productions

/*
things to add for linked list

class node with data and next 
class linked list with following functions
	constructor
	add
	insert at begin
	insert at index
	insert at end
	update data node
	remove first
	remove last
	remove from index
	remove element (node)
	index of
	is empty
	size of list
	print list
	reverse

*/

// open index in browser 
const displayLinkedList = document.querySelector(".display-linked-list")

// create class node constructor
class Node{
	constructor(element){
		this.element = element;
		this.next = null;
	}
}

// Linked list class with each function
class LinkedList{
	// conscructor inside class object
	constructor(){
		this.head = null;
		this.size = 0;
	}
	
	// add a node to the linked list
	add(element){
		// creates new node
		let node = new Node(element);
		// sets current node
		let current;
		// checks if linked list is empty
		if(this.head == null)
			this.head = node;
		else{
			// sets head of linked list after check
			current = this.head;
			// loop to find the last node in the linked list
			while(current.next){
				current = current.next;
			}
			// sets the last nodes next element in linked to the new node
			current.next = node;
		}
		// adds counter to size element
		this.size++;
	}
	
	// add node at beginning of linked list
	insertAtBegin(element){
		// creates new node
		let new_node = new Node(element);
		// checks if linked list is empty
		if(this.head == null){
			this.head = new_node;
		} else {
			// sets the pointer of the new node to the node currently as the head
			new_node.next = this.head;
			// sets the new node as the starting node
			this.head = new_node;
		}
		// adds counter to size element
		this.size++;
	}
	
	// add node at a particular index of the linked list
	insertAt(element, index){
		// checks if index is out of bounds
		if(index < 0 || index > this.size)
			return "Please enter a valid index."
		else{
			// creates new node
			let node = new Node(element);
			// sets two different temp elements
			let current, prev;
			// sets the current at the beginning of the linked list
			current = this.head;
			// checks if the new node index is at beginning
			if (index == 0 ){
				node.next = this.head;
				this.head = node;
			} else{ 
				// setup initial conditions for loop
				current = this.head;
				let iteration = 0;
				// loop through the linked list
				while(iteration < index){
					iteration++;
					// sets the current to past temp element
					prev = current;
					// sets the current to the next element
					current = current.next;
				}
				// sets the new node next pointer to the current index position data
				node.next = current;
				// sets the previous pointer to point to the inserted node
				prev.next = node;
			}
			// adds counter to size element
			this.size++;
		}
	}
	
	// add node at the end of the linked list
	insertAtEnd(element){
		// creates new node
		let new_node = new Node(element);
		// checks if the linked list is empty
		if(this.head == null){
			this.head = new_node;
		} else {
			// set initial conditions for while loop
			let current = this.head;
			// checks if current next node is not null
			while(current.next){
				current = current.next;
			}
			// after loop findes current next  equals null, sets pointer to new node
			current.next = new_node;
		}
		// adds counter to size element
		this.size++;
	}
	
	// display the index of the element(data) of the linked list
	indexOf(element){
		// setup counts
		let count = 0;
		// starts at beginning of linked list
		let current = this.head;
		// loops through the linked list 
		while(current != null){
			// check each step if the element is the one that is being searched for
			if(current.element === element){
				return count;
			}
			// adds count for the index
			count++;
			// setup the next loop
			current = current.next;
		}
		// if no item was found returns -1 which is false
		return -1;
	}
	
	// update data at a node
	updateNode(val, index){
	// updateNode(element, val, index){
		// setup of counters and start of linked list
		let position = 0;
		let current_node = this.head;
		// check if first node is the correct one to update
		if(position == index){
			current_node.element = val;
		} else {
			// loop through the index looking for the exact index
			while(current_node != null && position != index){
				// adds to the count 
				position++;
				// sets the current node to point to next node
				current_node = current_node.next;
			}
			if(current_node != null){
				current_node.element = val;
			} else {
				console.log("Index not present")
			}
		}
	}
	
	// remove first node
	removeFirst(){
		if(this.head == null){
			console.log("There are no items in the linked list")
		} else {
			let current = this.head.next;
			this.head = current;
			// subtracts counter to size element
			this.size--;
		}
	}
	
	// remove last node
	removeLast(){
		if(this.head == null){
			console.log("There are no items in the linked list")
		} else {
			let current = this.head;
			while(current.next.next){
				current = current.next;
			}
			current.next = null;
			// subtracts counter to size element
			this.size--;
		}
	}
	
	// remove node at index
	removeFrom(index){
		if(index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else{
			let current, prev, it = 0;
			current = this.head;
			prev = current;
			if(index === 0){
				this.head = current.next;
			} else {
				while(it < index){
					it++;
					prev = current;
					current = current.next;
				}
				prev.next = current.next;
			}
			// subtracts counter to size element
			this.size--;
			return current.element;
		}
	}
	
	// remove node of element 
	removeElement(element){
		// sets the beginning of the linked list
		let current = this.head;
		// sets the initial condition of a temp to null
		let prev = null;
		// loops through looking for the element
		while(current != null){
			if(current.element === element){
				if(prev == null){
					this.head = current.next;
				}else{
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}
	
	// returns if linked list is empty
	isEmpty(){
		return this.size == 0;
	}
	
	// returns the count of the linked list
	size_of_list(){
		console.log(this.size)
		return this.size
	}
	
	// loops through the list and prints each item 
	printList(){
		let current = this.head;
		let str = "";
		while(current){
			str += current.element + " ";
			current = current.next;
		}
		console.log(str);
		return str;
	}
	
	// reverses the order of the linked list
	reverseList(){
		// sets up initial conditions
		let prev = null;
		let current = this.head;
		// loops through each node in the linked list
		while(current != null){
			let next = current.next;
			current.next = prev;
			// sets up the next loop 
			prev = current;
			current = next;
		}
		this.head = prev;
	}
}


let llist = new LinkedList();
llist.add("a")
llist.add("b")
llist.add("c")
llist.insertAt("D", 1)	
llist.add("e")
llist.add("f")
llist.add("g")
llist.insertAtBegin("h")

llist.updateNode( "zz", 3)
llist.removeElement("c")

llist.insertAtEnd("A");
llist.insertAtEnd("B");
llist.removeFirst();
llist.removeLast();

displayLinkedList.innerHTML += `
<p>
Linked List Data:  ${llist.printList()}
</p>
<p>
Size of Linked List:  ${llist.size_of_list()}
</p>
<p>
isEmpty:  ${llist.isEmpty()}
</p>
`;

llist.reverseList()
displayLinkedList.innerHTML += `
<p>
Reversed Linked List Data:  ${llist.printList()}
</p>
`;
