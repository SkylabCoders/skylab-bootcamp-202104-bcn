function roundFloatNumber(num) {
  if (!Number.isInteger(num)) {
    num = num.toFixed(3);
  }
  return num;
}

function squareRoot(num) {
  let resultSquareRoot = Math.sqrt(num);
  resultSquareRoot = roundFloatNumber(resultSquareRoot);
  return resultSquareRoot;
}

function sum(num1, num2) {
  let resultSum = num1 + num2;
  resultSum = roundFloatNumber(resultSum);
  return resultSum;
}

function subs(num1, num2) {
  let resultSubs = num1 - num2;
  resultSubs = roundFloatNumber(resultSubs);
  return resultSubs;
}

function mult(num1, num2) {
  let resultMult = num1 * num2;
  resultMult = roundFloatNumber(resultMult);
  return resultMult;
}

function div(num1, num2) {
  let resultDiv = num1 / num2;
  resultDiv = roundFloatNumber(resultDiv);
  return resultDiv;
}

function calc(num1, num2) {
  let operations = ["sum", "substraction", "multiplication", "division"];
  let calcResults = [sum(num1, num2), subs(num1, num2), mult(num1, num2), div(num1, num2)];
  for (let i = 0; i < calcResults.length; i++ ) {
    console.log("The result of the " + operations[i] + " is: " + calcResults[i]);
  } 
}

let number1 = prompt("Pick a number");
if (number1 === null) {
  number1 = NaN;
} else if (number1 === "") {
  number1 = NaN;
  alert("Empty value");
} else {
  number1 = Number(number1);
  if (isNaN(number1)) {
    alert("This is not a number");
  }
}

let number2 = prompt("Pick another number");
if (number2 === null) {
  number2 = NaN;
} else if (number2 === "") {
  number2 = NaN;
  alert("Empty value");
} else {
  number2 = Number(number2);
  if (isNaN(number2)) {
    alert("This is not a number");
  }
}

if (!isNaN(number1) && !isNaN(number2)) {
  calc(number1, number2);
} else if (isNaN(number1) && isNaN(number2)) {
  console.log("No numbers to calc");
} else if (isNaN(number1) && !isNaN(number2)) {
  console.log("The square root is: " + squareRoot(number2));
} else if (!isNaN(number1) && isNaN(number2)) {
  console.log("The square root is: " + squareRoot(number1));
}