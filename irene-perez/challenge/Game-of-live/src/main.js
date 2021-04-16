let grid = [];

function printGrid(row) {
    for (let i = 0; i < row.length; i++ ) {
        grid.push(row);
    }
    console.log(grid);
    return grid;
}

printGrid([0, 0, 0, 0, 0]);


