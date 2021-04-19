function strictEquals(a, b) {
    if (Object.is(a,NaN) && Object.is(NaN,b)) {
        return false;
    } 
    if (Object.is( a, -0) && Object.is( 0 , b) ) {
        return true;
    }
    if (Object.is( a, 0) && Object.is( -0 , b) ) {
        return true;
    } 
    else {
        return Object.is(a, b);
    }
}
console.log("1 === 1 is " + strictEquals(1, 1));
console.log("NaN === Nan is " + strictEquals(NaN, NaN));
console.log("0 === -0 is " + strictEquals(0, -0));
console.log("-0 === 0 is " + strictEquals(-0, 0));
console.log("1 === '1' is " + strictEquals(1, "1"));
console.log("true === false is " + strictEquals(true, false));
console.log("false === false is " + strictEquals(false, false));
console.log("'water' === 'oil' is " + strictEquals("water", "oil"));