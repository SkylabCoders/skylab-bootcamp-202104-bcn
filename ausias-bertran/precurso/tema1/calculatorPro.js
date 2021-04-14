// PROYECTO TEMA 1 - Calculator PRO!


let result = []; // Array donde guardar el resultado de la función calculator

function calculator() {

    let emptyObject = [];   // Objeto vacio para validacion mensaje de inicio de programa

    let numsValue = arguments;   // Variable con los argumentos de la funcion calculator

    
    function sum() {    //Función para la suma
        let total = numsValue[0];
            for( let i = 1; i < numsValue.length; i++){total += numsValue[i]};
        return total;
    }
    
    function rest() {   //Función para la resta
        let total = numsValue[0];
            for( let i = 1; i < numsValue.length; i++){total -= numsValue[i]};
        return total;
    }
    
    function product() {    //Función para la multiplicación
        let total = numsValue[0];
            for( let i = 1; i < numsValue.length; i++){total *= numsValue[i]};
        return total;
    }

    function fraction() {    //Función para la división
        let total = numsValue[0];
            for( let i = 1; i < numsValue.length; i++){total /= numsValue[i]};
        return total;
    }

    function isNumber() {      // Validación de input como número
        for (let i = 0; i <numsValue.length; i++)
        if (typeof numsValue[i] !== typeof 1) {
            return true;
        }         
    }

    function shortestDecimals(num) {   /// Reducción de decimales en los resultados

        if (num == num.toFixed(0)) {
            return num;
        } else if (num == num.toFixed(1)) {
            return num.toFixed(1);
        } else if (num == num.toFixed(2)) {
            return num.toFixed(2);
        } else {
            return num.toFixed(3);
        }
    }

  
    if (emptyObject.length === arguments.length) { // Mensaje por defecto para la función sin argumentos

        console.log("Enter numbers, please");

    } else if (isNumber(arguments) !== true) {  // Cálculos de la calculadora con todos los argumentos, reducción de decimales y adición del resultado al array "result"

        function numChain(sign) {   // Concatenación de los argumentos para mostrar al usuario con el operador correspondiente (+,-,x,/)

            let total = "";

            for (let i = 0; i < numsValue.length; i++) {
                if (i >= 0 && i < numsValue.length-1) {
                    total = total + numsValue[i] + ` ${sign} `;
                } else if (i === numsValue.length-1) {
                    total = total + numsValue[i] + " = ";
                }
            }

            return total;
        }    
        
        if (arguments.length === 1) {           /// Resultado si SOLO se introduce un número como argumento
            let betaAloneValue = arguments[0];
            let decimalAloneValue = Math.sqrt(betaAloneValue);
            let aloneValue = shortestDecimals(decimalAloneValue);

            if (aloneValue >= 0) {
                result.push(`The square root of ${betaAloneValue} is: ${aloneValue}`);
            } else {
                console.log(`${betaAloneValue} is a negative number and has no square root.`)
            }
        } else if (arguments.length > 1) {

        let resultSumFixed = sum(arguments);    // Cálculos con todos los argumentos
        let resultSum = shortestDecimals(resultSumFixed);   // Reducción de decimales 
        result.push(numChain("+") + resultSum);   //Adición del resultado al array "result"

        let resultRestFixed = rest(arguments);
        let resultRest = shortestDecimals(resultRestFixed);
        result.push(numChain("-") + resultRest);

        let resultProductFixed = product(arguments);
        let resultProduct = shortestDecimals(resultProductFixed);
        result.push(numChain("x") + resultProduct);

        let resultFractionFixed = fraction(arguments);
        let resultFraction = shortestDecimals(resultFractionFixed);
        result.push(numChain("/") + resultFraction);

        }

    } else {
        return console.log("Invalid input. Enter numbers to run Calculator, please"); // Mensaje si los inputs NO son números
    }

    for (let i = 0; i<result.length; i++) {    //  Resultados por consola
        console.log(result[i]);
    }
}

let emptyObjectOut = "";   // Objeto vacio para validar mensaje del prompt  


if (result.length === emptyObjectOut.length) {  // Programa esperando la primera secuencia de números 

    calculator(); // <<<<<<<< Introducir números, por favor

}

if (result.length !== emptyObjectOut.length) {  //Confirmación de resultados si se ha ejecutado la función "calculator" por primera vez

    

    let tryAgain = prompt("Do you want to do more operations?", "YES");  


    if (tryAgain === "YES") {

        do {

            let stringValues = prompt("Enter numbers! Please, let a single space between them.","1 -2 3,5 4,5 5"); // 
            let numValues = [];  // Array de números convertidos del prompt "stringValues"            
            let convertBody = stringValues;

            function stringToNums() {   // Función para convertir el string del prompt "stringValues" a elementos typeof === number

                let numString = "";
      
                if (convertBody.length !== numString.length) {  

                    for (let i = 0; i < convertBody.length; i++) {

                        switch (convertBody[i]) {
                            case "-": 
                            numString = numString + "-";
                            break;
                            case "0": 
                            numString = numString + "0";
                            break;
                            case "1": 
                            numString = numString + "1";
                            break;
                            case "2": 
                            numString = numString + "2";
                            break;
                            case "3": 
                            numString = numString + "3";
                            break;
                            case "4": 
                            numString = numString + "4";
                            break;
                            case "5": 
                            numString = numString + "5";
                            break;
                            case "6": 
                            numString = numString + "6";
                            break;
                            case "7": 
                            numString = numString + "7";
                            break;
                            case "8": 
                            numString = numString + "8";
                            break;
                            case "9": 
                            numString = numString + "9";
                            break;
                            case ",": 
                            numString = numString + ".";
                            break;
                            case ".": 
                            numString = numString + ".";
                            break;
                            case " ": 
                            let changeValue = Number.parseFloat(numString);
                            numValues.push(changeValue);  
                            numString = "";
                            break;
                            default: 
                            alert(`Invalid input! "${convertBody[i]}" does not refer to a number. Try again.`);                            
                            break;               
                        } 
                    } 
                } 

                let changeValue = Number.parseFloat(numString);
                numValues.push(changeValue);         
            }

            result = [];   //  Reset del array para evitar duplicar resultados por consola. Borrar si se desea acumular todos los resultados en el array "result"

            stringToNums();   //  Ejecutar funcion para obtener números del prompt "stringValues"

            function noNaN() {   //  Para comprovar que no existen elementos NaN procedentes de Invalids Inputs desde el prompt
                for (let i = 0; i < numValues.length; i ++) {
                    if (Number.isNaN(numValues[i]) === true) {
                        return true                                
                    }
                }
            }

            let noNanDef = noNaN();

            if (noNanDef !== true) {  
            let moreOperations = calculator.apply(this,numValues);  //  invocar "calculator" con los argumentos del prompt
            }
        }      
        while (confirm("Do you want to do more operations?")); 
    }
    alert("bye!");    
}