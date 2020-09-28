

//bad way

const fib = (n) => {
    let result 
    if(n === 1 || n === 2)
        result = 1
    else{
        result = fib(n - 1) + fib(n - 2)
    }
    return result
}

console.log({Recursive: fib(5)});

// better way

const fibMemoized = (n, memo) => {

    let result
    //because the array is initizalized as null, if this is null it means we already have it in memo
    if(memo[n] !== null){
        return memo[n]
    }
    if(n === 1 || n === 2){
        result = 1
    }
    else{
        result = fib(n - 1, memo) + fib(n - 2, memo)
    }
    memo[n] = result
    return result
}

console.log({Memoized: fibMemoized(5, [])})


const fibBottonUp = (n) => {
    if(n === 1 || n === 2){
        return 1
    }
    const bottonUp = new Array(n +1)
    bottonUp[1] = 1
    bottonUp[2] = 1
    for (let i = 3; i < n; i++) {
        bottonUp[i] = bottonUp[i-1] + bottonUp[i-2]
        return bottonUp[n]
    }
}

console.log({BottonUp: fibBottonUp(5)});