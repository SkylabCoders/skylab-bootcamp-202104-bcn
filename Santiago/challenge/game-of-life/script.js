const createGrid = (rows, cols) => {
  const grid = new Array(rows);
  for (let i = 0; i < rows; i += 1) {
    grid[i] = new Array(cols).fill(0);
  }
  return grid;
};
const fillGrid = createGrid(5, 5);
const modifiedGrid = [...fillGrid];

const cellPosition = (a, b) => modifiedGrid[a][b] = 1;

const createBlinker = () => {
  cellPosition(1, 2);
  cellPosition(2, 2);
  cellPosition(3, 2);

  return modifiedGrid;
};
const blinker = createBlinker();
console.log(blinker);

const findNeighbours = (a, b) => {
  let neighbours = 0;

  if (modifiedGrid[a + 1] && modifiedGrid[a + 1][b - 1] === 1) {
    neighbours += 1;
  }
  if (modifiedGrid[a + 1] && modifiedGrid[a + 1][b] === 1) {
    neighbours += 1;
  }
  if (modifiedGrid[a + 1] && modifiedGrid[a + 1][b + 1] === 1) {
    neighbours += 1;
  }
  if (modifiedGrid[a] && modifiedGrid[a][b - 1] === 1) {
    neighbours += 1;
  }
  if (modifiedGrid[a - 1] && modifiedGrid[a - 1][b - 1] === 1) {
    neighbours += 1;
  }
  if (modifiedGrid[a - 1] && modifiedGrid[a - 1][b] === 1) {
    neighbours += 1;
  }
  if (modifiedGrid[a - 1] && modifiedGrid[a - 1][b + 1] === 1) {
    neighbours += 1;
  }
  if (modifiedGrid[a] && modifiedGrid[a][b + 1] === 1) {
    neighbours += 1;
  }

  return neighbours;
};
const neighboursNumber = findNeighbours(2, 2, modifiedGrid);

const rules = (a, b, modifiedGrid, neighboursNumber) => {
  if (neighboursNumber < 2) {
    modifiedGrid[a][b] = 0;
  }
  if (neighboursNumber === 2 || neighboursNumber === 3) {
    modifiedGrid[a][b] = 1;
  }
  if (neighboursNumber > 3) {
    modifiedGrid[a][b] = 0;
  }
};

const checkEveryCell = () => {
  const rowBlinker = createGrid(5, 5);

  modifiedGrid.forEach((row, indexRow) => {
    row.forEach((column, indexColumn) => {
      const neighboursOfEveryCell = findNeighbours(indexRow, indexColumn, modifiedGrid);

      if (modifiedGrid[indexRow][indexColumn] === 1) {
        rules(indexRow, indexColumn, rowBlinker, neighboursOfEveryCell);
      } else if (modifiedGrid[indexRow][indexColumn] === 0 && neighboursOfEveryCell === 3) {
        rowBlinker[indexRow][indexColumn] = 1;
      }
    });
  });

  return rowBlinker;
};
const checkCell = checkEveryCell(modifiedGrid);
console.log(checkCell);