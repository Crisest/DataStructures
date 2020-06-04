const array = [1,2,3,4,5]

const miniMaxSum = (arr) => {
    let minValue, maxValue
    const ascendingArray = arr.sort((a,b) => a - b)

    const smallestNumber = ascendingArray[0]
    const biggestNumber = ascendingArray[ascendingArray.length -1]

    if(smallestNumber !== biggestNumber){

        const biggestArray = arr.filter((number) => {
            return number !== smallestNumber
         })
     
         const smallestArray = arr.filter((number) => {
             return number !== biggestNumber
          })
         
         minValue = smallestArray.reduce((a,b) => a + b, 0)
         maxValue = biggestArray.reduce((a,b) => a + b, 0)
         console.log(minValue, maxValue);
    }
    else{
        const arraySliced = arr.slice(0, 4)
        
        const value = arraySliced.reduce((a,b) => a + b, 0)
        console.log(value, value);
    }    
}

miniMaxSum(array)
//sort
//