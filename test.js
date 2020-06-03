const array = []
for (let index = 1; index < 101; index++) {
    array.push(index)
}
array.forEach((number, index) => {
    const isFive = number % 5 === 0
    if(isFive){
        array[index] = 'asdasd'
    }
})
console.log('foreach: ', array);

const modified = array.map((number) => {
    if(number === 'asdasd'){
        return 'EZ'
    }
    else{
        return number
    }
})

console.log(modified);


