
function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
        let firstItem = arr.shift()      
        arr.push(firstItem)
    }
    return arr
}

// 2
// [1, 2, 3]
// [3, 1, 2]





