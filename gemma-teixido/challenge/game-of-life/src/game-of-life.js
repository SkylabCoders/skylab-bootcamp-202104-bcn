function creationOfTable(row, column) {
  let creationOfMatrix = [];
  let parentTable = document.querySelector("#matrix");
  let table = document.createElement("table");
  for (let i = 0; i < row; i++) {
    let rowTable = document.createElement("tr");
    rowTable.className = "row";

    creationOfMatrix[i] = [];
    for (let j = 0; j < column; j++) {
      let deadCell = document.createElement("td");
      deadCell.className = "cell";
      deadCell.innerHTML = "o";
      rowTable.appendChild(deadCell);
      creationOfMatrix[i][j] = "o";
    }
    table.appendChild(rowTable);
  }
  parentTable.appendChild(table);
  return creationOfMatrix;
}

function creationOfBlinkerVertical(array, row, column) {
  array[row][column] = "x";
  array[row + 1][column] = "x";
  array[row - 1][column] = "x";

  console.log(array);

  let rowTable2 = document.getElementsByClassName("row");

  for (let i = 0; i < rowTable2.length; i++) {
    let deadCell2 = rowTable2[i].getElementsByClassName("cell");
    for (let j = 0; j < deadCell2.length; j++) {
      deadCell2[j].innerHTML = array[i][j];
    }
  }
  return array;
}

function checkNeighbours(a, b, array) {
  let neighbour = 0;

  if (array[a] && array[a][b + 1] && array[a][b + 1] === "x") {
    neighbour++;
  }
  if (array[a] && array[a][b - 1] && array[a][b - 1] === "x") {
    neighbour++;
  }
  if (array[a + 1] && array[a + 1][b] && array[a + 1][b] === "x") {
    neighbour++;
  }
  if (array[a - 1] && array[a - 1][b] && array[a - 1][b] === "x") {
    neighbour++;
  }
  if (array[a + 1] && array[a + 1][b + 1] && array[a + 1][b + 1] === "x") {
    neighbour++;
  }
  if (array[a - 1] && array[a - 1][b - 1] && array[a - 1][b - 1] === "x") {
    neighbour++;
  }
  if (array[a - 1] && array[a - 1][b + 1] && array[a - 1][b + 1] === "x") {
    neighbour++;
  }
  if (array[a + 1] && array[a + 1][b - 1] && array[a + 1][b - 1] === "x") {
    neighbour++;
  }
  return neighbour;
}

function changeCells(a, b, array, num) {
  if (num < 2) {
    array[a][b] = "o";
  }
  if (num === 2 || num === 3) {
    array[a][b] = "x";
  }
  if (num > 3) {
    array[a][b] = "o";
  }
}

function checkEveryPosition(array) {
  let evolutionOfBlinker = creationOfTable(5, 5);
  console.log("new cell", array);

  array.forEach((row, indexRow) => {
    row.forEach((column, indexColumn) => {
      let numOfNeighbors = checkNeighbours(indexRow, indexColumn, array);
      if (array[indexRow][indexColumn] === "x") {
        changeCells(indexRow, indexColumn, evolutionOfBlinker, numOfNeighbors);
      } else if (array[indexRow][indexColumn] === "o" && numOfNeighbors === 3) {
        evolutionOfBlinker[indexRow][indexColumn] = "x";
      }
    });
  });
  console.log("last Array ", evolutionOfBlinker);
  return evolutionOfBlinker;
}

function gameOfLife() {
  let matrix = creationOfTable(5, 5);
  let newCells = [...matrix];

  creationOfBlinkerVertical(newCells, 2, 2);
  //checkNeighbours(2, 2, newCells);
  checkEveryPosition(newCells);
}

gameOfLife();
