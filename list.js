// import Node from './node.js'

class LinkedList {
    constructor(head = null){
        this.head = head !== null ? new Node(head) : head;
        this.length = head !== null ? 1 : 0;
    }

    // Set a new node in the end of the list

    append(value){
        const node = new Node(value);
        if(!this.head){
           this.head = node;
        }

        let tail = this.head;
        while (tail.next != null){
            tail = tail.next;
        }
        tail.next = node;
        this.length+= 1;
    }

    // Set a new node before the head and convert it in the head
    
    prepend(value){
        let temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        this.length++;
    }

    size(){
        return this.length;
    }
    head(){
        return this.head;
    }
    tail(){
        let tail = this.head;
        while (tail.next != null){
            tail = tail.next;
        }
        return tail
    }

    // Returns Node with asked index (starting from 0)
    at(index){
        if(isNaN(index)) return 'Please, provide a number';
        if(index > this.length-1 || this.length === 0) return "Can't find index";
        let counter = 0;
        let finder = this.head;
        while(counter != index){
            finder = finder.next;
            counter++;
        }
        return finder
    }

    // Removes last Node

    pop(){
        if(this.length == 0) return "No elements found";
        if(this.head.next === null){
            this.head = null;
            this.length-=1;
            return
        }
        let beforeTail = this.head();
        while(beforeTail.next !== this.tail()){
            beforeTail = beforeTail.next;
        }
        beforeTail.next = null;
        this.length-= 1; 
    }

    // Returns true if the value is found in a node.data

    contains(value){
        let node = this.head;
        while(node.data !== value && node.next != null){
            node = node.next;
        }
        if(node.data === value) return true;
        return false;
    }

    // Returns index of the node containing value; or null if not found

    find(value){
        let counter = 0;
        let finder = this.head;
        while(finder !== null && finder.data !== value){
            finder = finder.next;
            counter++;
        }
        return finder ? counter : null 
    }

    // Print the values in format : ( value ) -> ( value ) -> ( value ) -> null

    toString(){
        let sum = '';
        let node = this.head;
        for(let i = this.length;i >= 0 ; i--){
            if(node != null){
                sum += `( ${node.data} ) -> `;
            }else {
                sum += 'null'
                console.log(sum);
                return
            }
            node = node.next;
        }
        return this
    }

    // Inserts a new Node at the given index

    insertAt(value, index){
        if(!this.head || this.length -1 < index) return null;
        const node = new Node(value);
        let finder = this.head;
        let i = 0;
        while(i < index - 1){
            finder = finder.next;
            i++;
        }
        if(index === 0) return this.prepend(value);
        let temp = finder.next
        finder.next = node;
        node.next = temp;
        this.length+=1;
    }

    // Remove Node at index given

    removeAt(index){
        if(!this.head || this.length -1 < index) return null;
        let pointer = this.head;
        for(let i = 0; i < index - 1; i++){
            pointer = pointer.next;
        }
        const toBeRemovedLink = pointer.next.next;
        pointer.next = toBeRemovedLink;
        this.length-=1;
    }

}

class Node {
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

const list = new LinkedList(0);
list.append(1);
list.append(2);
list.append(3);
