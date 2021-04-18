let createGrid = (rows, cols) => {

    let grid = new Array(rows);

    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols).fill(0);
    }

    return grid;
}

let fillGrid = createGrid(5, 5);
let modifiedGrid = [...fillGrid];

let coord = (a, b) => {
    return modifiedGrid[a][b] = 1;
}


let createBlinker = () => {
    coord(1, 2);
    coord(2, 2);
    coord(3, 2);

    return modifiedGrid;
}
let blinker = createBlinker();
console.log(blinker);



let findNeighbours = (a, b, modifiedGrid) => {

    let neighbours = 0;

    if (modifiedGrid[a + 1] && modifiedGrid[a + 1][b - 1] === 1) {
        neighbours++;
    }
    if (modifiedGrid[a + 1] && modifiedGrid[a + 1][b] === 1) {
        neighbours++;
    }
    if (modifiedGrid[a + 1] && modifiedGrid[a + 1][b + 1] === 1) {
        neighbours++;
    }
    if (modifiedGrid[a] && modifiedGrid[a][b - 1] === 1) {
        neighbours++;
    }
    if (modifiedGrid[a - 1] && modifiedGrid[a - 1][b - 1] === 1) {
        neighbours++;
    }
    if (modifiedGrid[a - 1] && modifiedGrid[a - 1][b] === 1) {
        neighbours++;
    }
    if (modifiedGrid[a - 1] && modifiedGrid[a - 1][b + 1] === 1) {
        neighbours++;
    }
    if (modifiedGrid[a] && modifiedGrid[a][b + 1] === 1) {
        neighbours++;
    }

    return neighbours;
}
let neighboursNumber = findNeighbours(2, 2, modifiedGrid);
console.log(` Número de vecinos de la posición indicada: ${neighboursNumber}`);

let rules = (a, b, modifiedGrid, neighboursNumber) => {

    if (neighboursNumber < 2) {
        modifiedGrid[a][b] = 0;
    }
    if (neighboursNumber === 2 || neighboursNumber === 3) {
        modifiedGrid[a][b] = 1;
    }
    if (neighboursNumber > 3) {
        modifiedGrid[a][b] = 0;
    }
}

let checkEveryCell = modifiedGrid => {

    let lastArray = createGrid(5, 5);

    modifiedGrid.forEach((row, indexRow) => {
        row.forEach((column, indexColumn) => {

            let neighboursOfEveryCell = findNeighbours(indexRow, indexColumn, modifiedGrid);
            if (modifiedGrid[indexRow][indexColumn] === 1) {
                rules(indexRow, indexColumn, lastArray, neighboursOfEveryCell);
            } else if (modifiedGrid[indexRow][indexColumn] === 0 && neighboursOfEveryCell === 3) {
                lastArray[indexRow][indexColumn] = 1;
            }
        });
    });

    console.log(lastArray)
    return lastArray;
}
checkEveryCell(modifiedGrid);