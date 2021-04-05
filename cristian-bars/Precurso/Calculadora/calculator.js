function operaciones(num1,num2){
    if (num1 != "" && num2 != ""){
        
        resultado = new Array()
        let operaciones = [num1+num2,num1-num2,num1*num2,num1/num2];
        let signos = ["+", "-", "*", "/"]
        
        for (i=0;i<operaciones.length;i++){
            opera = operaciones[i];
            operacion = num1 + " " + signos[i] + " " + num2 + " = " + opera;
            console.log(operacion);
        }
        
    }else if (num1 != "" && num2 == ""){
        console.log("La raíz cuadrada del numero " + num1 + " es " + Math.sqrt(num1).toFixed(3));
    }else if (num1 == "" && num2 != ""){
        console.log("La raíz cuadrada del numero " + num2 + " es " + Math.sqrt(num2).toFixed(3));
    }else{
        console.log("No introduciste ningún numero");
    }
}

let num1;
let num2;
let opera;
let operacion;
let resultado;


num1 = prompt("Entra el primer numero");
    
if (num1 == ""){
    alert("Dejaste en blanco el primer numero");
}else if (isNaN(num1)){
    alert("Entraste letras en vez de numeros");
    num1 = "";
}else {
    num1 = Number(num1);
}

num2 = prompt("Entra el segundo numero");

if (num2 == ""){
    alert("Dejaste en blanco el segundo numero");
}else if (isNaN(num2)){
    alert("Entraste letras en vez de numeros");
    num2 = "";
}else {
    num2 = Number(num2);
}

operaciones(num1,num2);


