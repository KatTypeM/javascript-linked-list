
// Javascript Algorithm


const displayLinkedList = document.querySelector(".display-linked-list")

class Node{
	constructor(element){
		this.element = element;
		this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
		this.size = 0;
	}
	
	add(element){
		let node = new Node(element);
		let current;
		if(this.head == null)
			this.head = node;
		else{
			current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	
	insertAtBegin(element){
		let new_node = new Node(element);
		if(this.head == null){
			this.head = new_node;
		} else {
			new_node.next = this.head;
			this.head = new_node;
		}
		this.size++;
	}
	
	insertAt(element, index){
		if(index < 0 || index > this.size)
			return "Please enter a valid index."
		else{
			let node = new Node(element);
			let current, prev;
			current = this.head;
			
			if (index == 0 ){
				node.next = this.head;
				this.head = node;
			} else{ 
				current = this.head;
				let it = 0;
				while(it < index){
					it++;
					prev = current;
					current = current.next;
				}
				node.next = current;
				prev.next = node;
			}
			this.size++;
		}
	}
	
	insertAtEnd(element){
		let new_node = new Node(element);
		if(this.head == null){
			this.head = new_node;
		} else {
			let current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = new_node;
		}
		this.size++;
	}
	
	indexOf(element){
		let count = 0;
		let current = this.head;
		while(current != null){
			if(current.element === element){
				return count;
			}
			count++;
			current = current.next;
		}
		return -1;
	}
	
	updateNode(val, index){
		let current_node = this.head;
		let position = 0;
		if(position == index){
			current_node.element = val;
		} else {
			while(current_node != null && position != index){
				position++;
				current_node = current_node.next;
			}
			if(current_node != null){
				current_node.element = val;
			} else {
				console.log("Index not present")
			}
		}
	}

	removeFirst(){
		if(this.head == null){
			console.log("There are no items in the linked list")
		} else {
			let current = this.head.next;
			this.head = current;
			this.size--;
		}
	}
	
	removeLast(){
		if(this.head == null){
			console.log("There are no items in the linked list")
		} else {
			let current = this.head;
			while(current.next.next){
				current = current.next;
			}
			current.next = null;
			this.size--;
		}
	}
	
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
			this.size--;
			return current.element;
		}
	}
	
	removeElement(element){
		let current = this.head;
		let prev = null;
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
	
	isEmpty(){
		return this.size == 0;
	}
	
	size_of_list(){
		return this.size
	}
	
	printList(){
		let current = this.head;
		let str = "";
		while(current){
			str += current.element + " ";
			current = current.next;
		}
		return str;
	}
	
	reverseList(){
		let prev = null;
		let current = this.head;
		while(current != null){
			let next = current.next;
			current.next = prev;
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
