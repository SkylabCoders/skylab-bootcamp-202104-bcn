function strictEquals(a,b){
    if (isNaN(a) || isNaN(b)){
        let temp= Object.is(a,b);
        console.log(!temp);
    }
    else{
    console.log(Object.is(a.toString(),b.toString()));
    }
}

    