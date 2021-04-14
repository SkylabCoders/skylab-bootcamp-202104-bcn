function strictEquals(a,b){
    if(isNaN(a) && isNaN(b)) return false;
    if((!isNaN(a) && !isNaN(b)) && isNaN(a % b))
       return true;
    return Object.is(a,b)
} 
  
  