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
const ob4 = {
    data: 50,
    next: null
}

ob1.next = ob2
ob2.next = ob3
ob3.next = ob4


const getNode = (head, positionFromTail) => {
    let current = head
    let runner = head

    for (let i = 0; i < positionFromTail; i++) {
        runner = runner.next
    }

    while(runner.next !== null){
        runner = runner.next
        current = current.next
    }

    return current.data
}

console.log(getNode(ob1, 0))