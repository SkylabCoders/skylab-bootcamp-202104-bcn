function strict(a,b){
    let operadorA = a;
    let operadorB = b;

    if(isNaN( operadorA ) && isNaN( operadorB )){
        return false;
    }else if(operadorA == 0 && operadorB == -0){
        return true;
    }else if(operadorA == -0 && operadorB == 0){
        return true;
    }else{
        return Object.is(operadorA , operadorB); 
    }
};