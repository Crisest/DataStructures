function insertNodeAtPosition(head, data, position) {

    const newNode = new SinglyLinkedListNode()
    newNode.data = data;
    newNode.next = null

    if(position === 1){
        newNode.next = head
    }
    else{
        let counter = 1
        let current = head
        while(current.next !== null){
            counter++
            current = current.next
            if(counter === position){
                newNode.next = current.next
                current.next = newNode     
                break    
            }
        }
        return head
    }

}