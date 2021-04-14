
function strictEquals(a,b){
let primero=typeof(a);
let segundo=typeof(b);
let resultado= a==b;
if (primero!=segundo){
    return false;
}
return resultado;
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