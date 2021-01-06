const array = [1, 2, 3 ,4, 5]

const oneNumber = (arr) => {
    const stringJoinedNumber = arr.join('')
     return parseInt(stringJoinedNumber)
    
}
console.log(oneNumber(array))