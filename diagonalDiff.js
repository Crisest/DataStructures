const matrix = [[-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1]]

function diagonalDifference(arr) {
    let primaryDiagonal = 0 , secondaryDiagonal = 0
    const length = arr.length
    for (let i = 0; i < arr.length; i++) {
        primaryDiagonal += arr[i][i]
        secondaryDiagonal += arr[length - 1 -i][i]
    }
    return (Math.abs(primaryDiagonal - secondaryDiagonal))
}

const result = diagonalDifference(matrix)
console.log(result);