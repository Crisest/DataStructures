function palindrome(str) {

    const inputArray = str.toLowerCase().split('')

    console.log(inputArray)
    const alphabet = 'abcdefghijklmnopqrstuvxyz123456789'.split('')
    const arrayString = inputArray.filter((letter) => {
        return alphabet.includes(letter)
    })

    for(let i=0;i<arrayString.length;i++){

      if(arrayString[i] !== arrayString[arrayString.length - i -1]){
        
        return false   
      }
    }
    return true
  
  }
  
  
  
 console.log( palindrome("1 eye for of 1 eye."))
  