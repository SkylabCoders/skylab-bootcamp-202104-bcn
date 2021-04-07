const NUMBER_KEY = document.querySelectorAll(".number_key");
const OPERATOR = document.querySelectorAll(".operator");
const EQUAL_BUTTON = document.querySelector(".equal");
const CLEAR = document.querySelectorAll(".clear");
const ALL_CLEAR = document.querySelectorAll(".all_clear");
const CURRENT_NUMBER = document.querySelector(".currentnumber");
let calculatorCurrentNumber;
let calculatorPreviousNumber;
let calculatorOperation;
let operation;

allClear();

function concatNumbers(number) {
    if( calculatorCurrentNumber.length > 17 || number === "." && calculatorCurrentNumber.includes(".") || number === "0" && calculatorCurrentNumber[0] === "0"){
        return;
    }else{
        calculatorCurrentNumber = (calculatorCurrentNumber + number).toString();   
    }
}

function display() {
    CURRENT_NUMBER.innerText = calculatorCurrentNumber;
}

function operationAssign(operation) {
    if(calculatorCurrentNumber === "") {
        return;
    }
    calc();
    calculatorOperation = operation;
    calculatorPreviousNumber = calculatorCurrentNumber;
    calculatorCurrentNumber = "";
}

function calc() {
    let calculate;
    const PREVIOUS = parseFloat(calculatorPreviousNumber);
    const CURRENT = parseFloat(calculatorCurrentNumber);
    if( isNaN(PREVIOUS) || isNaN(CURRENT) ) {
        return;
    }
    switch (calculatorOperation) {
        case"+":
            calculate = PREVIOUS + CURRENT;
            break;
        case"-":
            calculate = PREVIOUS - CURRENT;
            break;
        case"x":
            calculate = PREVIOUS * CURRENT;
            break;
        case"/":
            calculate = PREVIOUS / CURRENT;
            break;
        default: 
            calculate = "error";
    }
    calculatorCurrentNumber = calculate;
    calculatorOperation = undefined;
    calculatorPreviousNumber = "";
}
 
function allClear() {
    calculatorCurrentNumber = ""
    calculatorPreviousNumber = "";
    operation = undefined;
}

function clear() {
    calculatorCurrentNumber = calculatorCurrentNumber.slice(0, -1);
}

NUMBER_KEY.forEach(button => {
    button.addEventListener("click",() => { 
        concatNumbers(button.innerText);
        display();
    })
});

OPERATOR.forEach(button => {
    button.addEventListener("click", () => {
        operationAssign(button.innerText);
        display();
    })
});

ALL_CLEAR.forEach(button => {
    button.addEventListener("click", () => {
        allClear();
        display();
    })
});

CLEAR.forEach(button => {
    button.addEventListener("click", () => {
        clear();
        display();
    })
});

EQUAL_BUTTON.addEventListener("click", () => {
    calc();
    display();
});