/*
- Pasar dos parametros 
- Suma, resta, multiplicación y división 
- 3 decimales
- Informar de no numeros introducidos 
- si 1 numero solo raíz cuadrada 
- Resultados almacenados dentro de array
*/
function calculator(a, b){
    if (isNaN(a) && isNaN(b)){
        console.log("El valor introducido es incorrecto. Por Favor introduzca solo números.")
    }
    else if (typeof a==='undefined'){
        console.log("La raiz cuadrada de " + b + " es igual a " + Math.sqrt(b).toFixed(3));
    }
    else if (typeof b==='undefined'){
        console.log("La raiz cuadrada de " + a + " es igual a " + Math.sqrt(a).toFixed(3));
    }
    else if (typeof a!=='number'){
        console.log("El valor introducido " + a + " es incorrecto. Por Favor introduzca solo números.")
        console.log("La raiz cuadrada de " + b + " es igual a " + Math.sqrt(b).toFixed(3));
    }
    else if (typeof b!=='number'){
        console.log("La raiz cuadrada de " + a + " es igual a " + Math.sqrt(a).toFixed(3));
        console.log("El valor introducido " + b + " es incorrecto. Por Favor introduzca solo números.")
    }

    /* Esto es lo que he intentado antes de darme cuenta que me olvidaba de los arrays 
    else { 
    console.log("La suma de " + a + " + " + b + " es igual a " + (a+b).toFixed(3));
    console.log("La resta de " + a + " - " + b + " es igual a " + (a-b).toFixed(3));
    console.log("La multiplicación de " + a + " x " + b + " es igual a " + (a*b).toFixed(3));
    console.log("La división de " + a + " / " + b + " es igual a " + (a/b).toFixed(3));
    }
    */

   else { //Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
       let resultados ={suma:a+b,resta: a-b, mult: a*b, div:a/b}
       console.log("La suma de " + a + " + " + b + " es igual a " + resultados.suma);
       console.log("La resta de " + a + " - " + b + " es igual a " + resultados.resta);
       console.log("La multiplicación de " + a + " x " + b + " es igual a " + resultados.mult);
       console.log("La división de " + a + " / " + b + " es igual a " + resultados.div);
   }
}
calculator (5, 3);
calculator (4);
calculator (7,);
calculator ("Hola");
calculator ("Hola", 7);
calculator (7, "Hola");