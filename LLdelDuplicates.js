function removeDuplicates(head) {
    
    let current = head
    while(current.next !== null){
        if(current.data === current.next.data){
            current.next = current.next.next
        }
        current = current.next
    }
    return head
}