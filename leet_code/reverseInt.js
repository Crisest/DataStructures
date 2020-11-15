const reverse = (x) => {

    const max = Math.pow(2,31) - 1
    const min = -Math.abs(max)
    if(x === 0){
        return 0
    }

    const array = x.toString().split('')

    if(array[0] === '-'){
        try {
            const result = -Math.abs(parseInt(array.reverse().join(''))) 
            if(result > max || result < min ){
                return 0
            }
            else{
                return result
            }
        } catch (error) {
            return 0
        }
        
    }
    else{
        const ArrayNum = x.toString().split('').reverse().join('')
        try {
            const result = parseInt(ArrayNum)
            if(result > max || result < min){
                return 0
            }
            else{
                return result
            }

        } catch (error) {
            return 0
        }
    }  

}

const nums = -123

console.log(reverse(nums))