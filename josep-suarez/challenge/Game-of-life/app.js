const arrayWidth = 5;
const arrayHeight = 5;
const initialArray = [[], [], [], [], []];
function gameOfLife(array) {
  const returnArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j; j < array.length; j++) {
      initialArray[i][j] = 0;
    }
  }
  return returnArray;
}
function checkBeforeArray() {}
function checkNextArray() {}
