const createMatrix = (numberRows, numberColumns) => {
    let newMatrix = new Array(numberRows);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(numberColumns).fill(0); 
    }
    return newMatrix;
}



