function CompareLists(llist1, llist2) {

    if(llist1 === null || llist2 === null ){
        return 0
    }

    let current1 = llist1
    let current2 = llist2

    while(current1.next !== null){
        current1 = current1.next
    }
    while(current2.next !== null){
        current2 = current2.next
    }

    if(current1.data !== current2.data){
        return 0
    }

    return 1

}