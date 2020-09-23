
function solution(n) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = []
    if(n == 1) {
        result[0] = 0
        return result
    }
    let number = n / 2
    //even number
    if(n % 2 == 0) {
        for (let i = 0; i < n; i++) {
            result[i] = number
            result[i + 1] = - number
            i += 2
            number-- 
        }
    }
    else{
        result[0] = 0
        for (let i = 1; i < n; i++) {
            result[i] = number
            result[i + 1] = -number
            i += 2
            number--          
        }
    }
    return result
}


console.log(solution(4));


function solution2(X, Y) {
    // write your code in JavaScript (Node.js 8.9.4)
    
}
