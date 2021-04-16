createMatrix = function(files, columns){
    let newMatrix = new Array(files);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(columns).fill(0); 
    }
    return newMatrix;
}



const matrix = createMatrix(5, 5);
