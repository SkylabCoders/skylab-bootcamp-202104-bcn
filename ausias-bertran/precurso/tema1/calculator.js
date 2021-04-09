// PROYECTO TEMA 1 - Calculator!


let result = []; // Array donde guardar el resultado de la función calculator
calculator(); //  Introducir 2 números, por favor
 
function calculator(num1, num2) {
    let undefinedValue; // variable con valor "undefined" para mensaje por defecto si la función no presenta argumentos    
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