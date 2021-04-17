const createGrid = (rows, columns) => {

    let newGrid = new Array(rows);

    for (let i = 0; i < rows; i++) {
    newGrid[i] = new Array(columns).fill('0');
    }

    return newGrid;
}


