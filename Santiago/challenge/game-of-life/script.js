let createGrid = (rows, cols) => {

    let world = document.querySelector('#gol');

    let tbl = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td');

            tr.appendChild(cell);
        }
        tbl.appendChild(tr);
    }
    world.appendChild(tbl);
}

let fillGrid = createGrid(5, 5);
let modifiedGrid = [...fillGrid];

let cellPosition = (a, b) => {
    return modifiedGrid[a][b] = 1;
}


let createBlinker = () => {
    cellPosition(1, 2);
    cellPosition(2, 2);
    cellPosition(3, 2);

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

    let rowBlinker = createGrid(5, 5);

    modifiedGrid.forEach((row, indexRow) => {
        row.forEach((column, indexColumn) => {

            let neighboursOfEveryCell = findNeighbours(indexRow, indexColumn, modifiedGrid);

            if (modifiedGrid[indexRow][indexColumn] === 1) {
                rules(indexRow, indexColumn, rowBlinker, neighboursOfEveryCell);

            } else if (modifiedGrid[indexRow][indexColumn] === 0 && neighboursOfEveryCell === 3) {
                rowBlinker[indexRow][indexColumn] = 1;
            }
        });
    });

    return rowBlinker;
}
let checkCell = checkEveryCell(modifiedGrid);
console.log(checkCell);