const ob1 = {
    data: 1,
    next: null
}
const ob2 = {
    data: 3,
    next: null
}
const ob3 = {
    data: 7,
    next: null
}
const ob4 = {
    data: 1,
    next: null
}
const ob5 = {
    data: 2,
    next: null
}

ob1.next = ob2
ob2.next = ob3

ob4.next = ob5

const mergeList = (List1, List2) => {

    // return

    // find new head pointer

    //build list

    //attach remaining elements
}

mergeList(ob1, ob4)

// 1 3 7
// 1 2 

// 1 1 2 3 7