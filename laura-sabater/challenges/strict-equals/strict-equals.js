let a = NaN;
let b = NaN;

function strictEquals(a, b) {
  let array = [a];
  let sameValueZero = array.includes(b);
  if (isNaN(a) && isNaN(b)) {
    return false;
  } else {
    return sameValueZero;
  }
}

console.log(a === b);
console.log(strictEquals(a, b));