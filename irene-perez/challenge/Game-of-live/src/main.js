const grid = createGrid(5, 5);
const newGrid = [...grid];

const createGrid = (rows, columns) => {
    const grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill('0');
    }
    return grid;
}

console.log(grid);

const coordsCreation = (num1, num2) => {
    newGrid[num1][num2];
}

const blinkerCreation = () => {
    coordsCreation(1, 2);
    coordsCreation(2, 2);
    coordsCreation(3, 2);
    console.log(newGrid);
}
