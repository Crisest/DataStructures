
function deleteNode(head, position) {

    if(position === 1){
        return head.next
    }
    else{
        let counter = 1
        let current = head
        if(current.next === null){
            return head
        }
        while(current.next !== null){
            counter++
            current = current.next
            if(counter === position){
                current.next = current.next.next
                break
                    
            }
        }
        return head
    }

}