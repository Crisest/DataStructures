// find the biggest number count how many of that in the array

const array = [3, 2, 1, 3]

const birthdayCakeCandles = (arr) => {
    //spread operator will fail after 65536
    const largest = Math.max(...arr)
    const filteredArr = arr.filter((number) => number === largest)
    console.log(filteredArr.length);
}

birthdayCakeCandles(array)