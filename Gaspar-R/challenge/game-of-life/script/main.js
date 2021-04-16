const arrayWidth = 5
const arrayHeight = 5
const initialArray = [[], [], [], [], []]
for (let i = 0; i < arrayHeight; i++) {
    for (let j = 0; j < arrayWidth; j++) {
        initialArray[i][j] = 0
    }
}
const isCellEmpty = (row, column, array) => {
    if (array[row][column] !== undefined && array[row][column] === 0) {
        return true
    } else {
        return false
    }
}
const createVerticalBlinker = (column, row, array) => {
    const createdVerticalArray = [...array]
    let allOK = true
    isCellEmpty(row - 1, column, array) ? (allOK = true) : (allOK = false)
    isCellEmpty(row, column, array) ? (allOK = true) : (allOK = false)
    isCellEmpty(row + 1, column, array) ? (allOK = true) : (allOK = false)
    if (allOK) {
        createdVerticalArray[row - 1][column] = 1
        createdVerticalArray[row][column] = 1
        createdVerticalArray[row + 1][column] = 1
        return createdVerticalArray
    } else {
        console.log('No hay espacios disponibles')
    }
}
const countNeighbours = (row, column, array) => {
    let neighbours = 0
    array[column - 1][row - 1] === 1 && neighbours++
    array[column - 1][row] === 1 && neighbours++
    array[column - 1][row + 1] === 1 && neighbours++
    array[column][row - 1] === 1 && neighbours++
    array[column][row + 1] === 1 && neighbours++
    array[column + 1][row - 1] === 1 && neighbours++
    array[column + 1][row] === 1 && neighbours++
    array[column + 1][row + 1] === 1 && neighbours++
    return neighbours
    //console.log(neighbours)
}
const newArray = createVerticalBlinker(2, 2, initialArray)
const searchAlives = (array) => {
    let oldArray = [...array]
    let searchedArray = [...array]
    for (let column = 0; column < oldArray.length; column++) {
        for (let row = 0; row < oldArray[column].length; row++) {
            if (oldArray[column][row] === 1) {
                let neighbours = countNeighbours(row, column, oldArray)
                searchedArray = [...oldArray];
                // debugger
                //console.log(neighbours)
                if (neighbours < 2) {
                    // debugger;
                    console.log('old', oldArray)
                    console.log(column, row)

                    searchedArray[column][row] = 'd'

                    console.log('new', searchedArray)
                }
            }
        }
    }
    //console.log('new', newArray)
    //return newArray
}
let array6 = searchAlives(newArray)