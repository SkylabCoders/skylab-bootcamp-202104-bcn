const getNumberOfNeighbours = (array, row, column) => {
    let counter = 0;
    
    if(array[row - 1] && array[row - 1][column] === 1 ) counter ++;
    if(array[row - 1] && array[row - 1][column + 1] === 1 ) counter ++;
    if(array[row] && array[row][column + 1] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column + 1] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column - 1] === 1 ) counter ++;
    if(array[row] && array[row][column - 1] === 1) counter ++;
    if(array[row - 1] && array[row - 1][column - 1] === 1 ) counter ++;
    
    return counter;
}
