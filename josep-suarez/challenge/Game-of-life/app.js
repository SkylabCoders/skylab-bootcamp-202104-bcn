let arrayWidth = 5;
let arrayHeight = 5;

const initialArray = [[], [], [], [], []];

for (let i = 0; i < arrayWidth; i++) {
  for (let j = 0; j < arrayHeight; j++) {
    initialArray[i][j] = 0;
  }
}

function gameOfLife(array) {
  const returnArray = [];

  return returnArray;
}
function createHorizontalBlinker(x, y, array) {
  const newArray = [...array];
  let isSuccesInit = true;
  isCellEmpty(x, y - 1, array) ? (isSuccesInit = true) : (isSuccesInit = false);
  isCellEmpty(x, y + 1, array) ? (isSuccesInit = true) : (isSuccesInit = false);
  isCellEmpty(x, y, array) ? (isSuccesInit = true) : (isSuccesInit = false);
  if (isSuccesInit) {
    newArray[x][y + 1] = 1;
    newArray[x][y - 1] = 1;
    newArray[x][y] = 1;
    return newArray;
  }
}
const isCellEmpty = (x, y, array) => {
  if (array[x][y] !== undefined && array[x][y] === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(initialArray);
const newArray = createHorizontalBlinker(2, 2, initialArray);
console.log(newArray);
