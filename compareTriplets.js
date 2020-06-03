const arrOne = [5, 6, 7]
const arrTwo = [3, 6, 10]

const compareTriplets = (a, b) => {
    if(a.length === b.length){
        let aPoints = 0
        let bPoints = 0
        for (let i = 0; i < a.length; i++) {
             if( a[i] > b[i] ){
                 aPoints++
             }
             else if( a[i] < b[i] ){
                 bPoints++
             }
        }
        return [aPoints, bPoints]
    }
    return []
}

const result = compareTriplets(arrOne, arrTwo)
console.log(result);