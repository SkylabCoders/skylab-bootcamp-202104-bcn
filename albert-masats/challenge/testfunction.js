

function strictEquals (a,b) {

    if (isNaN(a) && isNaN(b)) {
        return false;
    }else if (a == 0 && b == -0 || a == -0 && b ==0) {
        return true;  
    }else{
        return Object.is(a,b)
    }
}

