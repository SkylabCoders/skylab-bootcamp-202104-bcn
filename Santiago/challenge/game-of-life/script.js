let createGrid = (rows, cols) => {

    let grid = new Array(rows);

    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols).fill(0);
    }

    return grid;
}
const fillGrid = createGrid(5, 5);


const modifiedGrid = [...fillGrid];

let coord = (a, b) => {

    return modifiedGrid[a][b] = 1;
}

let createBlinker = () => {
    coord(1, 2);
    coord(2, 2);
    coord(3, 2);

    console.log(modifiedGrid);
}
createBlinker();

let findNeighbours = () => {

    let neighbours = 0;

    for (let x = 0; x < modifiedGrid.length; x++) {
        for (let y = 0; y < modifiedGrid.length; y++) {
            if (modifiedGrid[x][y++] === undefined && modifiedGrid[x--][y++]) {
                neighbours++;
            }
        }
    }
}
findNeighbours();