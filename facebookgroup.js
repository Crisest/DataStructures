const string = 'qqcqccqcqqccqqqqqqcq'

let array = []

for (let i = 0; i < string.length; i++) {
    let counter = 0;
    if(string[i] === string[i+1]){
        counter++
    }
    array.push(counter)
}

console.log(array)