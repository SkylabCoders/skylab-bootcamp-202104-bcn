const screen = document.getElementsByClassName('screen')[0];
let finishResult = null;
let value;
let isOperator;
let isPoint;
let isNumber;
let isFirstOperation = true;
let saveNumberOne = null;
let saveNumberTwo = null;
let saveOperatorOne = null;
let saveOperatorTwo = null;
let calculation;
let classOperators;


const typeOfResult = () => {
    if (finishResult === Infinity || isNaN(finishResult)) {
        screen.innerHTML = 'Error';
        finishResult = 'Error';
    } else {
        screen.innerHTML = parseFloat(finishResult);
    }
}

const resetSizeResult = () => {
    screen.classList.remove('screenTwo');
    screen.classList.remove('screenThree');
    screen.classList.remove('screenFour');
}


const getReset = () => {
    screen.innerHTML = "0";
    resetSizeResult();
    resetCalculationVariables();
    finishResult = null;
}

const resetCalculationVariables = () => {
    saveNumberOne = null;
    saveNumberTwo = null;
    saveOperatorOne = null;
    saveOperatorTwo = null;
    isFirstOperation = true;
}

const removeClassesOperators = () => {
    classOperators = document.querySelectorAll(".operators");
    classOperators.forEach((elem) => elem.classList.remove("OperatorActive"));
}


const deleteElement = () => {
    removeClassesOperators();
    if (screen.innerHTML.length === 1) {
        screen.innerHTML = "0";
    } else {
        screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
    }
    decideWhereSaveNumber();
}

const typeOfClick = (elem) => {
    if ((value === "+" || value === "-" || value === "*" || value === "/")) {
        removeClassesOperators();
        elem.classList.add("OperatorActive");
        isOperator = true;
        isPoint = false;
        isNumber = false;
        if (saveOperatorOne === null || (saveOperatorOne !== null && saveNumberTwo === null)) {
            saveOperatorOne = value;
        } else {
            saveOperatorTwo = value;
            if (saveNumberTwo !== null) {
                getCalculationWithOperator();
            }
        }
    } else if (value === ".") {
        isOperator = false;
        isPoint = true;
        isNumber = false;
    } else {
        isOperator = false;
        isPoint = false;
        isNumber = true;
    }
}


const decideWhereSaveNumber = () => {
    if (isFirstOperation && saveOperatorOne === null) {
        saveNumberOne = screen.innerHTML;
    } else if (isFirstOperation && saveOperatorOne !== null) {
        saveNumberTwo = screen.innerHTML;
    } else {
        saveNumberTwo = screen.innerHTML;
    }
}

const setResult = (elem) => {
    typeOfClick(elem);
    if (saveOperatorOne !== value && saveOperatorTwo !== value) {
        if (screen.innerHTML === "0") {
            if (isPoint) {
                screen.innerHTML = "0" + value;
            } else {
                screen.innerHTML = value;
            };
        } else {
            if (saveOperatorOne === null) {
                if (!(screen.innerHTML.includes(".") && isPoint === true)) {
                    screen.innerHTML += value;
                }
            } else if (saveOperatorOne !== null && saveNumberTwo === null) {
                if (!(screen.innerHTML.includes(".") && isPoint === true)) {
                    screen.innerHTML = value;
                }
            } else if (saveOperatorOne !== null && saveNumberTwo !== null) {
                if (!(screen.innerHTML.includes(".") && isPoint === true)) {
                    screen.innerHTML += value;
                }
            }
        };
        decideWhereSaveNumber();
    }
}


const sizeResult = (elem) => {
    value = elem.getAttribute("value");
    if (screen.innerHTML.length < 8) {
        resetSizeResult();
        setResult(elem);
    } else if (screen.innerHTML.length >= 8 && screen.innerHTML.length < 10) {
        screen.classList.add('screenTwo');
        setResult(elem);
    } else if (screen.innerHTML.length >= 10 && screen.innerHTML.length < 13) {
        screen.classList.add('screenThree');
        setResult(elem);
    } else if (screen.innerHTML.length >= 13 && screen.innerHTML.length <= 14) {
        screen.classList.add('screenFour');
        setResult(elem);
    } else {
        screen.classList.add('screenFour');
        screen.innerHTML = "Demasiados digitos";
    };

}

const percentage = () => {
    removeClassesOperators();
    screen.innerHTML = parseFloat(screen.innerHTML) / 100;
    decideWhereSaveNumber();
}

const decimal = () => {
    if ((calculation % 1 === 0)) {
        screen.innerHTML = calculation;
    } else {
        screen.innerHTML = calculation.toFixed(4);
    }
}


const getCalculation = () => {
    switch (saveOperatorOne) {
        case "+":
            calculation = parseFloat(saveNumberOne) + parseFloat(saveNumberTwo);
            decimal();
            finishResult = calculation;
            screen.innerHTML = finishResult;
            break;
        case "-":
            calculation = parseFloat(saveNumberOne) - parseFloat(saveNumberTwo);
            decimal();
            finishResult = calculation;
            screen.innerHTML = finishResult;
            break;
        case "*":
            calculation = parseFloat(saveNumberOne) * parseFloat(saveNumberTwo);
            decimal();
            finishResult = calculation;
            screen.innerHTML = finishResult;
            break;
        case "/":
            calculation = parseFloat(saveNumberOne) / parseFloat(saveNumberTwo);
            decimal();
            finishResult = calculation;
            screen.innerHTML = finishResult;
            break;
    }
    typeOfResult();
}

const getCalculationWithEqual = () => {
    removeClassesOperators();
    getCalculation();
    resetCalculationVariables();
    saveNumberOne = finishResult;
}

const getCalculationWithOperator = () => {
    getCalculation();
    if (saveOperatorTwo !== null) {
        saveOperatorOne = saveOperatorTwo;
        saveOperatorTwo = null;
    }
    saveNumberOne = finishResult;
    saveNumberTwo = null;
    isFirstOperation = false;
}

/* REFACTORIZACION ONCLICKS DE HTML:

- Para los botones de html que actualmente tienen el onclick="sizeResult(this)", elimino esta opci'on en html y a
cada uno de ellos les anyado una classe llamada "button".
- En JS hago lo siguiente:

const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
    button.addEventListener('click', function(event) {
        value = event.target.button.value; --> si substituyo button.value por .innerHTML obtengo el innerHTML, pero no consigo obtener el value de ninguna de las maneras....
        sizeResult(event);
    });
};

- En la funcion sizeResult() elimino la linea:
    value = elem.getAttribute("value");

*/
