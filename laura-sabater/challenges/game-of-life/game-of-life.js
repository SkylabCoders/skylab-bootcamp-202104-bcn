let environment = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
]

let selectedCellPosition = environment[2][2];

let neighbours = [
  environment[1][1],
  environment[1][2],
  environment[1][3],
  environment[2][1],
  environment[2][3],
  environment[3][1],
  environment[3][2],
  environment[3][3],
]

let numberAliveNeighbours = countAliveNeighbours(neighbours);

function showCells(cells) {
	for (let line of cells) {
		console.log(line.join(" "));
		console.log("\n");
	}
	console.log("\n");
}

function cellState(cell) {
  if (cell === 0) {
    return true;
  } if (cell === 1) {
    return false;
  }
}

// function defineNeighbours(selectedCell, matrix) {
//   let neighbours = [];

//   neighbour = matrix[1,1]


// }
// console.log(defineNeighbours(selectedCell, environment));

function countAliveNeighbours(neighbours, environment) {
  let aliveNeighbours = [];
  for (let neighbour of neighbours) {
    neighbour = cellState(cell);
    if (neighbour) {
      aliveNeighbours.push(neighbour);
    }
  }
  return aliveNeighbours.length;
}

function nextState (cell, aliveCells) {
  let aliveCell = cellState(cell);
  if (aliveCell) {
    if (aliveCells.length < 2) {
      return false;
    } else if (aliveCells > 3) {
      return 0;
    } else {
      return 1;
    }
  } else {
    if (aliveCells.length === 3) {
      return 0;
    } else {
      return 1;
    }
  }
}

function nextEnvironment (cellsMatrix, aliveCells) {
  let newEnvironment =[];
  for (let cellsArray of cellsMatrix) {
    let newArray = [];
    for (let cell of cellsArray) {
      cell = nextState(cell, aliveCells);
      newArray.push(cell);
    }
    newEnvironment.push(newArray);
  }
  return newEnvironment;
}
let newEnvironment = nextEnvironment(environment, aliveNeighbours);

showCells(environment);
showCells(neighbours);
console.log(selectedCell);
console.log(cellState(selectedCell));
console.log(countAliveNeighbours(neighbours));
console.log(nextState(selectedCell, aliveNeighbours));
showCells(newEnvironment);
