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


console.log(strictEquals(NaN, NaN));










