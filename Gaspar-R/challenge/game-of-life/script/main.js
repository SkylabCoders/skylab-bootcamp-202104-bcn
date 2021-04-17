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

    if ( checkNeighbours(column, row, -1, -1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, -1, +1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, -1, 0, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, 0, -1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, 0, +1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, +1, -1, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, +1, 0, array) === true) {neighbours++}
    if ( checkNeighbours(column, row, +1, +1, array) === true) {neighbours++}
 
     return neighbours
}

function checkNeighbours(column, row, columnDesplacement, rowDisplacement, array){
    let currentColumn = column + columnDesplacement;
    let currentRow = row + rowDisplacement;
    
    if (array[currentRow][currentColumn] === 0) {checkNeighboursFromNeighbours (currentColumn,currentRow,array)}
    if (array[currentRow][currentColumn] === 1) {
     
        return true;
      }
}

const newArray = createVerticalBlinker(2, 2, initialArray)

// function markDead (column,row,array){
//    let newArrayy = [];
//     newArray[column][row] = "D";
//     console.log(newArrayy, "killfunctionarray");
//     //return newArrayy;
// }

const searchAlives = (array) => {
    let oldArray = [...array]
    let nextGenChanges = [[], [], [], [], []];


    for (let column = 0; column < oldArray.length; column++) {
        for (let row = 0; row < oldArray[column].length; row++) {
            if (oldArray[column][row] === 1) {
                neighbours = countNeighbours(column, row, oldArray)

                if (neighbours < 2 || neighbours >= 4)  {
                    // console.log(row,column)
                   nextGenChanges[column][row] = "D";
                }
            }
        }
    }
    applyChanges (nextGenChanges,oldArray)
    //return newArray
}
let array6 = searchAlives(newArray)

function applyChanges(nextArray,originalArray){         //guardar posiciones de cambio para la proxima generacion
   }



function checkNeighboursFromNeighbours (currentColumn,currentRow,array) {
    
        let neighboursFromZeroCells = 0

        if (countNeighboursFromNeighbours(currentColumn, currentRow, -1, -1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromNeighbours(currentColumn, currentRow, -1, +1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromNeighbours(currentColumn, currentRow, -1, 0, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromNeighbours(currentColumn, currentRow, 0, -1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromNeighbours(currentColumn, currentRow, 0, +1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromNeighbours(currentColumn, currentRow, +1, -1, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromNeighbours(currentColumn, currentRow, +1, 0, array) === true) {neighboursFromZeroCells++};
        if ( countNeighboursFromNeighbours(currentColumn, currentRow, +1, +1, array) === true) {neighboursFromZeroCells++};
        // console.log("zero cell column",currentColumn,"row",currentRow,"neighbours",neighboursFromZeroCells)
        console.log("column", currentColumn,"row", currentRow,"vecinos de zero cells", neighboursFromZeroCells);
     
    
}

function countNeighboursFromNeighbours (column, row, columnDesplacement, rowDisplacement, array){
//   console.log(column,row)
   
    let currentColumn = column + columnDesplacement;
    let currentRow = row + rowDisplacement; 
    
    let currentArrayCheck =[];
    let positionChecked=[]
 


    if (array[currentColumn][currentRow] !==undefined && !positionChecked.includes(currentArrayCheck) ){
    // console.log(currentRow,currentColumn)
         if (array[currentRow][currentColumn] === 1 ) {
               return true;
             }
    }         
}

