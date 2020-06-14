const arr = [1, 4 , 3, 2]

const reverseArray = (array) => {
    let reversedArray = []
    for(var i = array.length; i-- > 0; ){
        reversedArray.push(array[i])
    }
    return reversedArray
}
console.log(reverseArray(arr));