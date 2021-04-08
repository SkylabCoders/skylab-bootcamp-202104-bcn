let num1 = "";
let operator = "";
let num2 = "";
let result = "";
let screen;

function init() {
  screen = document.getElementById("screen"); 
  
  let numberButtons = document.getElementsByClassName("numberButtons");
  for (let numberButton of numberButtons) {
    numberButton.addEventListener('click', introNumber);
  }   
  
  let operationButtons = document.getElementsByClassName("operationButtons");
  for (let operationButton of operationButtons) {
    operationButton.addEventListener('click', introOperator);
  }

  let decimalButton = document.getElementById("decimalButton");
  decimalButton.addEventListener('click', introDecimal);
  
  let resultButton = document.getElementById("resultButton");
  resultButton.addEventListener('click', calc);
 
  let delButton = document.getElementById("delButton");
  delButton.addEventListener('click', deleteLastValue);
  
  let acButton = document.getElementById("acButton");
  acButton.addEventListener('click', clearAll);
}

function introNumber() {
  if (operator === "") {
    if (num1 === result) {
      num1 = this.value;
      screen.value = this.value;
      result = "";
    } else if (result === "error") {
      num1 = this.value;
      screen.value = this.value;
      result = "";
    } else if (num1.startsWith(0) && num1.includes(".") === false) {
      num1 = this.value;
      screen.value = this.value;
    } else {
      num1 += this.value;
      screen.value += this.value;
    }
  } else {
    if (num2.startsWith(0) && num2.includes(".") === false) {
      num2 = this.value;
      screen.value = num1+operator+num2;
    } else {
      num2 += this.value;
      screen.value += this.value;
    }
  }
}

function introOperator() {
  if (num1 === "") {
    screen.value = "";
  } else {
    if (operator === "") {
      operator = this.value;
      screen.value += this.value;
    } else if (operator !== "" && num2 === "") {
      operator = this.value;
      screen.value = num1+operator;
    } else {
      calc();
      if (result !== "error") {
        operator = this.value;
        screen.value += this.value;
      }
    }
  }
}

function introDecimal() {
  if (operator === "") {
    if (num1.includes(".") === false) {
      if (num1 === "") {
        num1 = 0+this.value;
        screen.value = num1;
      } else if (num1.startsWith(00)) {
        num1 = 0+this.value;
        screen.value = num1;
      } else {
        num1 += this.value;
        screen.value += this.value;
      }
    }
  } else {
    if (num2.includes(".") === false) {
      if (num2 === "") {
        num2 = 0+this.value;
        screen.value += num2;
      } else if (num2.startsWith(00)) {
        num2 = 0+this.value;
        screen.value = num1+operator+num2;
      } else {
        num2 += this.value;
        screen.value += this.value;
      }
    }
  }
}

function calc() {
  let calcResult;
  if (num2 === "") {
    calcResult = num1;
  } else {
    switch (operator) {
      case "+":
        calcResult = Number(num1)+Number(num2);
        break;
      case "-":
        calcResult = Number(num1)-Number(num2);
        break;
      case "*":
        calcResult = Number(num1)*Number(num2);
        break;
      case "/":
        calcResult = Number(num1)/Number(num2);
        break;
    }
    if (!Number.isInteger(calcResult)) {
      calcResult = calcResult.toFixed(3);
    } else if (Number.isSafeInteger(calcResult)) {
      calcResult = calcResult.toFixed();
    }
  }
  if (calcResult === "NaN" || calcResult === "Infinity") {
    calcResult = "error";
    screen.value = calcResult;
    result = calcResult;
    num1 = ""
    operator = "";
    num2 = "";
    calcResult = "";
  } else {
    screen.value = calcResult;
    result = calcResult.toString();
    num1 = calcResult;
    operator = "";
    num2 = "";
    calcResult = "";
  }
}

function deleteLastValue() {
  if (num2 !== "") {
    let lastIndexNum2 = num2.length - 1;
    let modifiedNum2 = num2.slice(0, lastIndexNum2);
    num2 = modifiedNum2;
    screen.value = num1+operator+num2;
  } else if (operator !== "") {
    operator = "";
    screen.value = num1;
  } else {
    let lastIndexNum1 = num1.length - 1;
    let modifiedNum1 = num1.slice(0, lastIndexNum1);
    num1 = modifiedNum1;
    screen.value = num1;
  }
}

function clearAll() {
  num1 = "";
  operator = "";
  num2 = "";
  result = "";
  textResult = "";
  screen.value = "";
}