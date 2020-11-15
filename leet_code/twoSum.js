const nums = [2,7,11,15]
const target = 26

const twoSum = (array, result) => {
    const values = new Map()
  
  for (let i = 0; i < array.length; i++) {
    console.log(values)
    const targetSubtract = result - array[i]
    const matchingValue = values.get(targetSubtract)
    if (matchingValue !== undefined) {
      return [matchingValue, i]
    }
    values.set(array[i], i)
  }
}

console.log(twoSum(nums, target))