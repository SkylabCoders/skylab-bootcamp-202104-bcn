let createGrid = (rows, cols) => {

    let grid = new Array(rows);

    for (let i = 0; i < rows; i++) {

        grid[i] = new Array(cols).fill(0);
    }

    return grid;
}

let fillGrid = createGrid(2, 5);

console.log(fillGrid);