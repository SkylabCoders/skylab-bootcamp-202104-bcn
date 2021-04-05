// Función que enbarca todo el funcionamiento de la calculadora
function calculator() {

    // Variables que obtienen el div del HTML
    let currentNumbers = document.querySelector('.current-numbers');
    let allClear = document.querySelector('.all-clear');
    let clear = document.querySelector('.clear');
    let numbers = document.querySelectorAll('.numbers');
    let additionOperation = document.querySelector('.addition');
    let substractOperation = document.querySelector('.substract');
    let multiplyOperation = document.querySelector('.multiply');
    let divisionOperation = document.querySelector('.division');
    let equal = document.querySelector('.equal');

    let operationSign; // Variable la cual guarda los signos de las operaciones +, -, *, ÷ para ser utilizados en el swicth
    let firstOperant; // Variable la cual guarda el primer número que se introduce por pantalla
    let secondOperant; // Variable la cual guarda el segundo número que se introduce por pantalla

    // Función que despeja la pantalla de la calculadora después de introducir nuestros números en la calculadora
    function clearDisplay() {
        currentNumbers.textContent = "";
    }

    // Método que crea un onClick en el botón AC, que elimina todo lo de la pantalla de la calculadora
    allClear.addEventListener('click', () => {
        clearDisplay();
    })

    // Método para eliminar el último número que hemos escrito, por si nos hemos equivocado
    clear.addEventListener('click', () => {
        // Slice: le pasamos dos parametros, 0 es el starting point y el -1 se refiere a que empesamos desde el final
        currentNumbers.textContent = currentNumbers.textContent.toString().slice(0, -1);
    })

    // Hacemos un forEach para recorrer todos los botones que contienen la clase numbers
    // En cada boton de los numeros, creamos un onClick para que al pulsarse salgan por pantalla y se puedan concatenar
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            currentNumbers.textContent = currentNumbers.textContent + number.textContent;
        })
    })

    // Método para hacer la suma.
    additionOperation.addEventListener('click', () => {
        firstOperant = currentNumbers.textContent; // Guardamos el número introducido en la calculadora en firstOperant
        operationSign = "+"; // Guardamos el signo de la operación para utilizarlo en el switch
        clearDisplay();
    })

    // Método para hacer la resta.
    substractOperation.addEventListener('click', () => {
        firstOperant = currentNumbers.textContent; // Guardamos el número introducido en la calculadora en firstOperant
        operationSign = "-"; // Guardamos el signo de la operación para utilizarlo en el switch
        clearDisplay();
    })

    // Método para hacer la multiplicación.
    multiplyOperation.addEventListener('click', () => {
        firstOperant = currentNumbers.textContent; // Guardamos el número introducido en la calculadora en firstOperant
        operationSign = "x"; // Guardamos el signo de la operación para utilizarlo en el switch
        clearDisplay();
    })

    // Método para hacer la division.
    divisionOperation.addEventListener('click', () => {
        firstOperant = currentNumbers.textContent; // Guardamos el número introducido en la calculadora en firstOperant
        operationSign = "÷"; // Guardamos el signo de la operación para utilizarlo en el switch
        clearDisplay();
    })

    // Método el cual guarda el segundo número que añadimos a la calculadora y luego llama a la función showResult()
    equal.addEventListener('click', () => {
        secondOperant = currentNumbers.textContent;
        showResult();
    })

    // Función que en un switch dependiendo del caso hace la operacion correspondiente
    function showResult() {
        //Convertimos a números con parseFloatm porque antes eran strings
        const firstOp = parseFloat(firstOperant);
        const secondOp = parseFloat(secondOperant);

        if(isNaN(firstOp) || isNaN(secondOp)) return; // Si alguna de las dos constantes no es un número que se pare la función

        let result = 0;
        switch (operationSign) {
            case "+":
                result = firstOp + secondOp;
                break;
            case "-":
                result = firstOp - secondOp;
                break;
            case "÷":
                result = (Math.round(firstOp / secondOp * 1000)/1000);
                break;
            case "x":
                result = firstOp * secondOp;
                break;
        }
        currentNumbers.textContent = result; // Mostramos el resultado en pantalla
    }
}
calculator(); // Llamos a la función calcualdor()