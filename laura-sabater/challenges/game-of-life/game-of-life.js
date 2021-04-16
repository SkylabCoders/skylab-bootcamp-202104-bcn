let cellMatrix = [
  [],
  [],
  []
];

function cellState(cell) {
  if (cell === 1) {
    return true;
  } else {
    return false;
  }
}

function countLiveCells(cellMatrix){
  for (let cellArray of cellMatrix) {
    for (let cell of cellArray) {
      let cellNeighbours = function;
      let cellAlive = cellState(cell); 
      let aliveNeighbours = cellNeighbours.filter((cell) => cell(cellState));
      if (cellAlive) {
        if (aliveNeighbours.length < 2) {
          cellAlive = false;
        } else if (aliveNeighbours > 3) {
          cellAlive = true;
        }
      } else {
        if (aliveNeighbours.length = 3) {
          cellAlive = true;
        } else {
          cellAlive = false;
        }
      }
    }
  }
}
