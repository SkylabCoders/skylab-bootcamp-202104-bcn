const arrayWidth = 5
const arrayHeight = 5
const initialArray = [[], [], [], [], []]
let killerArray = [];
let resurrectArray = [];
let nextGenChanges = [];



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
const countLiveCellsNeighbours = (row, column, array) => {
    
    let neighbours = 0

    if ( checkNeighbours(column, row, -1, -1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, -1, +1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, -1, 0, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, 0, -1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, 0, +1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, +1, -1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, +1, 0, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, +1, +1, array) === true) {neighbours++}
    
    if (neighbours < 2 || neighbours >= 4)  {
        killerArray.push([column,row]);
    }
}

function checkNeighbours(column, row, columnDesplacement, rowDisplacement, array){
    let currentColumn = column + columnDesplacement;
    let currentRow = row + rowDisplacement;
    
    if (array[currentRow][currentColumn] === 0) {checkNeighboursFromLiveNeighbours (currentColumn,currentRow,array)}
    if (array[currentRow][currentColumn] === 1) {
     
        return true;
      }
}

const newArray = createVerticalBlinker(2, 2, initialArray)


const searchAlives = (array) => {
    let oldArray = [...array]


    for (let column = 0; column < oldArray.length; column++) {
        for (let row = 0; row < oldArray[column].length; row++) {
            if (oldArray[column][row] === 1) {
                neighbours = countLiveCellsNeighbours(column, row, oldArray)    
            }
        }
    }
    applyChanges (nextGenChanges,oldArray)
    //return newArray
}
let array6 = searchAlives(newArray)

function applyChanges(nextGenChanges,newArray){         //guardar posiciones de cambio para la proxima generacion
         nextGenChanges = [...newArray];
         console.log(nextGenChanges) 

        }   


function checkNeighboursFromLiveNeighbours (currentColumn,currentRow,array) {
    
        let neighboursFromZeroCells = 0

        if (countNeighboursFromLiveNeighbours(currentColumn, currentRow, -1, -1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromLiveNeighbours(currentColumn, currentRow, -1, +1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromLiveNeighbours(currentColumn, currentRow, -1, 0, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromLiveNeighbours(currentColumn, currentRow, 0, -1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromLiveNeighbours(currentColumn, currentRow, 0, +1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromLiveNeighbours(currentColumn, currentRow, +1, -1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromLiveNeighbours(currentColumn, currentRow, +1, 0, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromLiveNeighbours(currentColumn, currentRow, +1, +1, array) === true) {neighboursFromZeroCells++};
        // console.log("zero cell column",currentColumn,"row",currentRow,"neighbours",neighboursFromZeroCells)
        console.log("column", currentColumn,"row", currentRow,"vecinos de zero cells", neighboursFromZeroCells);
        if (neighboursFromZeroCells === 3 ) {
            if (checkRepetedValues (resurrectArray,currentColumn,currentRow) ===true){
            
            resurrectArray.push([currentColumn,currentRow])
         }
        } 
    
}

function countNeighboursFromLiveNeighbours (column, row, columnDesplacement, rowDisplacement, array){

   
    let currentColumn = column + columnDesplacement;
    let currentRow = row + rowDisplacement; 
    if (array[currentColumn][currentRow] !==undefined){
         if (array[currentRow][currentColumn] === 1 ) {
               return true;
             }
    }         
}

function checkRepetedValues (resurrectArray,currentColumn,currentRow){
    let currentPosition = (element) => element[0]===currentColumn && element[1]===currentRow;

     result = resurrectArray.findIndex(currentPosition)
     if (result === -1){
         return true;
     }
}

console.log("killer",killerArray)
console.log("resurrect",resurrectArray)