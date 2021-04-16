let arr = [];

function setGrid(a, b) {
  const arr2 = [];
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr2[i] = 0;
    }
    arr[i] = arr2;
  }
}

setGrid(5, 5);
