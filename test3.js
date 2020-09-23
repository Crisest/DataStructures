const exp = "4 - 2 = x"
function MathChallenge(str) { 

    const arraySplit = str.split(' ')
    
     const i = arraySplit.lastIndexOf('=')
     const resultSplit = arraySplit.slice(i + 1)
     const expSplit = arraySplit.slice(0 , i )
     const left = expSplit.join('')
     const right =resultSplit.join('')

     const result = left.

    console.log(right);
    console.log(left);
    
  
  }
     
  // keep this function call here 
  console.log(MathChallenge(exp));