const ob1 = {
    data: 1,
    next: null
}
const ob2 = {
    data: 2,
    next: null
}
const ob3 = {
    data: 3,
    next: null
}
ob1.next = ob2
ob2.next = ob3

class LinkedList {

}




function reversePrint(head) {
    if(head != null){
        reversePrint(head.next)
        
        console.log(head.data)
    }

}

reversePrint(ob1)


