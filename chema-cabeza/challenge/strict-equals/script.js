function strictEquals (a,b) {
    if (isNaN(a)&&isNaN(b)) {
      return false;
  } else if (Object.is (a, -0) && Object.is (0, b)) {
      return true;
  } else if (Object.is (a, 0) && Object.is (-0, b)) {
      return true;
  } else {
      return Object.is (a, b);
    }
}

console.log(strictEquals(1,1));
console.log(strictEquals(NaN,NaN));
console.log(strictEquals(0,-0));
console.log(strictEquals(-0,0));
console.log(strictEquals(1,'1'));
console.log(strictEquals(true,false));
console.log(strictEquals(false,false));
console.log(strictEquals('water','oil'));
console.log(strictEquals('water','water')); 