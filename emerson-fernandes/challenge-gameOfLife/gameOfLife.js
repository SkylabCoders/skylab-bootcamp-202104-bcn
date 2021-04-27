const tableJS = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];

const newTableJs = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, true, true, true, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];

function isCellCheck(i, j) {
  return (i >= 0 && i < tableJS.length) && (j >= 0 && j < tableJS.length) && tableJS[i][j];
}

function cellsVerification() {
  for (let i = 0; i < tableJS.length; i++) {
    for (let j = 0; j < tableJS[i].length; j++) {
      let countCells = 0;
      if (isCellCheck([i], [j - 1]) === true) {
        countCells++;
      }
      if (isCellCheck([i - 1], [j - 1]) === true) {
        countCells++;
      }
      if (isCellCheck([i - 1], [j]) === true) {
        countCells++;
      }
      if (isCellCheck([i - 1], [j + 1]) === true) {
        countCells++;
      }
      if (isCellCheck([i], [j + 1]) === true) {
        countCells++;
      }
      if (isCellCheck([i + 1], [j + 1]) === true) {
        countCells++;
      }
      if (isCellCheck([i + 1], [j]) === true) {
        countCells++;
      }
      if (isCellCheck([i + 1], [j - 1]) === true) {
        countCells++;
      }

      if ((tableJS[i][j] === false) && (countCells === 3)) {
        newTableJs[i][j] = true;
      } else if ((tableJS[i][j] === true) && (countCells === 2)) {
        newTableJs[i][j] = true;
      } else if ((tableJS[i][j] === true) && (countCells < 2 || countCells > 3)) {
        newTableJs[i][j] = false;
      }
    }
  }
}
cellsVerification();

function changeColor() {
  document.getElementsByTagName('button').style.background = 'red';
}
