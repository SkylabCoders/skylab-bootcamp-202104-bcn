function strictEquals(a,b){
    if(Number.isNaN(a) && Number.isNaN(b)) return false;
    if((!isNaN(a) && !isNaN(b)) && isNaN(a % b))
       return true;
    return Object.is(a,b)
} 
  
  
