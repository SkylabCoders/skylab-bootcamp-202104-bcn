const strictEquals = (a, b) => {

    let result = (a == b);

    if((typeof a == 'string' && typeof b != 'string') || (typeof b == 'string' && typeof a != 'string')) {
        result = false;
    }

    return result;

}

    console.log(strictEquals(1,1));
    console.log(strictEquals(NaN,NaN));
    console.log(strictEquals(0,-0));
    console.log(strictEquals(-0,0));
    console.log(strictEquals(1,'1'));
    console.log(strictEquals(true,false));
    console.log(strictEquals(false,false));
    console.log(strictEquals('water','oil'));
    console.log(strictEquals('water','water'));