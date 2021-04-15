function strictEquals(a, b) {
    let result = (a == b);
    if (typeof (a) != "string" && typeof (b) == "string") {
        result = false;
    }
    return result;
}

console.log("a=1, b=1", strictEquals(1, 1));
console.log("a=NaN, b=NaN", strictEquals(NaN, NaN));
console.log("a=0, b=-0", strictEquals(0, -0));
console.log("a=-0, b=0", strictEquals(-0, 0));
console.log("a=1, b='1'", strictEquals(1, '1'));
console.log("a=true, b=false", strictEquals(true, false));
console.log("a=false, b=false", strictEquals(false, false));
console.log("a='Water', b='oil'", strictEquals('Water', 'Oil'));

