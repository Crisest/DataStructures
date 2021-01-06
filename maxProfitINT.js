// Best times to buy/sell stock

// Example 1: [10, 20, 30, 40, 50]
// Times: [0, 4]

// Example 2: [5, 4, 3, 20, 30]
// Times: [2, 4]

const buySellStock = (arrayInput) => {
    
    let maxProfit = 0;
    let buyIndex = 0;
    let sellIndex = 0;
    
    for(let i = 0; i < arrayInput.length; ++i) {
      for(let j = i + 1; j < arrayInput.length; j++){
          if(arrayInput[j] - arrayInput[i] > maxProfit) {
            maxProfit = arrayInput[j] - arrayInput[i];
            buyIndex = i
            sellIndex = j
          }
      }
    }
  
    return [buyIndex, sellIndex];
  
}

console.log(buySellStock([10, 20, 30, 40, 50]));
console.log(buySellStock([5, 4, 3, 20, 30]));

// Expected output: [2, 4]
console.log(buySellStock([5, 4, 3, 20, 30, 2, 1]));

// Expected output: [2, 3]
console.log(buySellStock([5, 31, 1, 30]));

