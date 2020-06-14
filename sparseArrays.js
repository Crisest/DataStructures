const arrayInput = ['aba', 'baba', 'aba', 'xzxb', 'ab']
const queriesInput = ['aba', 'xzxb', 'ab']

const matchingStrings = (strings, queries) => {
    const result = queries.map((query) => {
        return strings.filter(stringg => stringg === query).length   
    });  
    return result
}

console.log(matchingStrings(arrayInput, queriesInput));



