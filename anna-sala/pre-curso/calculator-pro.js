
/*
- Pasar x parametros 
- Suma, resta, multiplicación y división 
- 3 decimales
- Informar de no numeros introducidos 
- si 1 numero solo raíz cuadrada 
- Resultados almacenados dentro de array
- PRO: 
- Consejo Javi: let question = prompt('Hola, como te llamas?') 
*/

let numbersArray = [];
calculatorPro();
function calculatorPro() {

    getNumbers();
    numbersOperations();
    newOperations();
}

function getNumbers(){
    let individualNumber;
    do {
        individualNumber = prompt('Please introduce a number to make the operations or press cancel to see the result');
        
        if (isNaN(parseInt(individualNumber)) === true && individualNumber !== null && individualNumber != ""){
            alert('Invalid input. Please introduce numbers only');
            getNumbers();
        }
        else if (individualNumber == null || individualNumber == ""){
            break;
        }
        else {
            numbersArray.push(parseInt(individualNumber));
        }

        } while (individualNumber !== null)        
}

function numbersOperations(){
    if (numbersArray.length == 1){ // en caso que solo se introduzca un solo numero
        console.log("The square root of " + numbersArray + " equals " + Math.sqrt(numbersArray).toFixed(3));
        }
        else {
                let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue);
                let sub = numbersArray.reduce((accumulator, currentValue) => accumulator - currentValue);
                let mult= numbersArray.reduce((accumulator, currentValue) => accumulator * currentValue);
                let div = numbersArray.reduce((accumulator, currentValue) => accumulator / currentValue).toFixed(3);
            console.log("The sum of the numbers introduced equals to " + sum );
            console.log("The subtraction of the numbers introduced equals to " + sub);
            console.log("The multiplication of the numbers introduced equals to " + mult);
            console.log("The division of the numbers introduced equals to " + div);
        }
}

function newOperations(){
    let newNumbers = prompt('Would you like to make more calculations? yes/no');
    if (newNumbers==="yes" || newNumbers==="Yes"){
        numbersArray = [];
        calculatorPro();
    }
    else {
        alert('Thank you :)');
    }
}


