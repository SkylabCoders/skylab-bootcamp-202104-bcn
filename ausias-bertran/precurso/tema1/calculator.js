// PROYECTO TEMA 1 - Calculator!

/*
 Requisitos:

 Dos valores que se tienen que sumar, restar, multiplicar y dividir entre si
 Guardar el resultado en un array.
 Separar los diferentes resultados de las operaciones entre los dos números en diferentes strings visulamente fácil de comprender
 Si solo aparece un valor, debe mostrar la raiz quadrada
 Si el valor introducido no es un número el programa debe informar
 En caso de haber decimales, mostrar sólo hasta 3.


>>CORRECCIONES:

 Al declarar una variable, preferiblemente utilizamos let y const. No es buena práctica utilizar let. Te paso un articulo que he encontrado donde lo explican bastante bien:
https://medium.com/@tatymolys/let-let-y-const-donde-cuando-y-por-qu%C3%A9-d4a0ee66883b   >> OK: He sustituido las declaraciones de variable "var" por "let". Visto (y espero que asimilado) el video>

Tampoco es buena práctica utilizar el loose equality (==), intenta utilizar el stric equality (===) o strict inequality (!==)    >> OK: Corregido.

Cuando muestras los resultados en pantalla estás devolviendo el array directamente, intenta que se vea de una forma más amigable para el usuario.   >> OK: He añadido un loop for con console.log para mostrar el resultado de cada operación.
*/



let result = []; // Array donde guardar el resultado de la función calculator
 
function calculator(num1, num2) {

    let undefinedValue; // variable con valor "undefined" para mensaje por defecto si la función no presenta argumentos

    function isNumber(num) {

        if (typeof num === typeof 1) {
            return true;

        } else {
            return false;

        }
    }

    function shortestDecimals(num) {

        if (num === Math.floor(num)) {
            return num;

        } else if (num === num.toFixed(1)) {
            return num.toFixed(1);

        } else if (num === num.toFixed(2)) {
            return num.toFixed(2);

        } else {
            return num.toFixed(3);

        }

    }


    if (typeof num1 === typeof undefinedValue && typeof num2 === typeof undefinedValue) { // Mensaje por defecto para la función sin argumentos

        console.log("Enter 2 numbers to run Calculator, please");

    } else if (isNumber(num1) === true && num2 === undefinedValue) { // Resultado si solo se introduce un número

        return console.log(Math.sqrt(num1));

    } else if (isNumber(num1) === true && isNumber(num2) === true) { // Cálculos de la calculadora con dos números, reducción de decimales y adición del resultado al array "result"

        let resultSumFixed = num1 + num2;
        let resultSum = shortestDecimals(resultSumFixed);
        result.push(`${num1} + ${num2} = ${resultSum}`);

        let resultRestFixed = num1 - num2;
        let resultRest = shortestDecimals(resultRestFixed);
        result.push(`${num1} - ${num2} = ${resultRest}`);

        let resultProductFixed = num1 * num2;
        let resultProduct = shortestDecimals(resultProductFixed);
        result.push(`${num1} x ${num2} = ${resultProduct}`);

        let resultFractionFixed = num1 / num2;
        let resultFraction = shortestDecimals(resultFractionFixed);
        result.push(`${num1} / ${num2} = ${resultFraction}`);

    } else {
        return console.log("Invalid input. Enter numbers to run Calculator, please"); // Mensaje si los inputs NO son números
    }

    for (let i = 0; i < result.length; i++) {  // Resultados por consola
        console.log(result[i]);
    }
}
calculator(); //  Introducir 2 números, por favor