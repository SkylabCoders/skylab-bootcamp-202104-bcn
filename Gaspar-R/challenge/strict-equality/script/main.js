//strict equality challenge

function strictEquals(a,b) {
    if (Object.is(a,b)) {
        if(Object.is(a,NaN) && Object.is(NaN,b)){
            return false;
        }else { return true;}      
    } else if ( (Object.is(a,0) && Object.is(-0,b)) || (Object.is(a,-0) && Object.is(0,b))){
        return false;
    }else {return true;
    }
}

console.log(strictEquals(1,1));         //true
console.log(strictEquals(NaN,NaN));     //false
console.log(strictEquals(0,-0));        //true
console.log(strictEquals(-0,0));        //true
console.log(strictEquals(1,"1"));       //false
console.log(strictEquals(true,false));  //false
console.log(strictEquals(false,false)); //true
console.log(strictEquals("water","oil"));   //false
console.log(strictEquals("water","water")); //trues