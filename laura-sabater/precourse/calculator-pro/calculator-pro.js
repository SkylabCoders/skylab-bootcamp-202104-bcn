function roundFloatNumber(num) {
  if (!Number.isInteger(num)) {
    num = Number(num.toFixed(3)); 
  }
  return num;
}

function squareRoot(num) {
  let resultSquareRoot = Math.sqrt(num);
  resultSquareRoot = roundFloatNumber(resultSquareRoot);
  return resultSquareRoot;
}

function sum(numbers) {
  let i;
  let resultSum = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    resultSum += numbers[i];
  }
  resultSum = roundFloatNumber(resultSum);
  return resultSum;
}

function subs(numbers) {
  let i;
  let resultSubs = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    resultSubs -= numbers[i];
  }
  resultSubs = roundFloatNumber(resultSubs);
  return resultSubs;
}

function mult(numbers) {
  let i;
  let resultMult = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    resultMult *= numbers[i];
  }
  resultMult = roundFloatNumber(resultMult);
  return resultMult;
}

function div(numbers) {
  let i;
  let resultDiv = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    resultDiv /= numbers[i];
  }
  resultDiv = roundFloatNumber(resultDiv);
  return resultDiv;
}

function calc(numbers) {
  if (numbers.length === 1) {
    let calcSR = squareRoot(numbers);
    console.log("The square root is: " + calcSR);
  } else {
    let operations = ["sum", "substraction", "multiplication", "division"];
    let calcOp = [sum(numbers), subs(numbers), mult(numbers), div(numbers)];
    for (let i = 0; i < calcOp.length; i++) {
      console.log("The result of the " + operations[i] + " is: " + calcOp[i]);
    }
  }
}

let numbersToCalc = [];

function question1() {
  let answer1 = prompt("Enter a number. To calculate enter 'calc'");
  if (answer1 === "calc") {

    if (numbersToCalc.length === 0) {
      alert("No numbers to calculate");
      question1();
    } else {
      calc(numbersToCalc);
      question2();
    }

  } else if (answer1 === null) {
    alert("Cancel calculation");

  } else if (answer1 === "") {
    alert("Empty value");
    question1();

  } else {
    answer1 = Number(answer1);
  
    if (isNaN(answer1)) {
      alert("This is not a number");
      question1();
    } else {
      numbersToCalc.push(answer1);
      question1();
    }
  }
}

function question2() {
  let answer2 = prompt("For more calculations enter 'yes'. To stop enter 'no'");
  if (answer2 === "yes") {
    numbersToCalc = [];
    question1();

  } else if (answer2 === "no") {
    alert("Bye!");

  } else if (answer2 === null) {
    alert("Cancel calculations");

  } else {
    alert("Invalid answer");
    question2();
  }
}

question1();