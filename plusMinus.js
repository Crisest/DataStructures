const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    const lengthArr = arr.length
    const positives = arr.filter((number) => number > 0)
    const negatives = arr.filter((number) => number < 0)
    const zeros = arr.filter((number) => number === 0)
    console.log(positives.length / lengthArr);
    console.log(negatives.length/ lengthArr);
    console.log(zeros.length/ lengthArr);
    
}
plusMinus(arr)