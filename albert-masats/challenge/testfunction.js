

function strictEquals (a,b) {

    if (isNaN(a) && isNaN(b)) {
        return false;
    }else if (Object.is(0,-0) || Object.is(-0,0)) {
        return true;  
    }else{
        return Object.is(a,b)
    }
}

