
const generateMatrix = (rows, columns)=> {
    const table = [];
    for(let i=0; i<rows; i++){
        const  row = [];
        for(let j=0; j<columns; j++){
            const col = 0;
            row.push(col);
        }
        table.push(row)
    }
    return table;
}
const createBlinker = (table) =>{
    const copyTable = [...table];

    copyTable[1][2] = 1;
    copyTable[2][2] = 1;
    copyTable[3][2] = 1;
    return copyTable;

}

const gameRules = (copyTable) => {
    copyTable.forEach((fila, filaIndex) => {
        fila.forEach((columna, columnaIndex) => {

            const counterNeighbors = evaluateElement(copyTable, filaIndex, columnaIndex)
            console.log(filaIndex, columnaIndex,counterNeighbors)

        })
    })
}
const evaluateElement = (matrixTable, filaIndex, columnaIndex)=> {
    let counter = 0;

    /*   if(matrixTable[columnaIndex] && matrixTable[columnaIndex][filaIndex-1] && matrixTable[columnaIndex][filaIndex-1] === 1){
           console.log(4)
          counter++
       }*/

    if( matrixTable[columnaIndex][filaIndex-1] === 1){

        counter = counter +1;
    }
    /*    console.log('CONTADOR ' + counter)*/
    return counter
}
const initGame = () =>{
    const rows = 5;
    const columns = 5;
    const matrix = generateMatrix(rows, columns);
    const copyMatrix = createBlinker(matrix);
    gameRules(copyMatrix)
}

window.onload = initGame;