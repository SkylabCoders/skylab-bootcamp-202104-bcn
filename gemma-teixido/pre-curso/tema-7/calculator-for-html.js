const pressSum = document.getElementById("sum");
const pressRest = document.getElementById("rest");
const pressMultiplication = document.getElementById("multiplication");
const pressDivision = document.getElementById("division");
const pressPoint = document.getElementById("point");
const pressEqual = document.getElementById("equal");
const pressClear = document.getElementById("clear");

let newNumber;
let newOperator;

for (let i = 0; i <= 9; i++) {
  const pressNumber = document.getElementById("number" + i);
  pressNumber.addEventListener("click", function showNumber() {
    newNumber = i;
    let changeScreen = document.getElementById("result");
    if (changeScreen.innerHTML === "0") {
      changeScreen.innerHTML = newNumber;
    } else {
      changeScreen.innerHTML += newNumber;
    }
  });
}

pressSum.addEventListener("click", function showNumber() {
  newOperator = "+";
  let changeScreen = document.getElementById("result");
  changeScreen.innerHTML += newOperator;
});

pressRest.addEventListener("click", function showOperation() {
  newOperator = "-";
  let changeScreen = document.getElementById("result");
  changeScreen.innerHTML += newOperator;
});

pressDivision.addEventListener("click", function showOperation() {
  newOperator = "/";
  let changeScreen = document.getElementById("result");
  changeScreen.innerHTML += newOperator;
});

pressMultiplication.addEventListener("click", function showOperation() {
  newOperator = "x";
  let changeScreen = document.getElementById("result");
  changeScreen.innerHTML += newOperator;
});

pressPoint.addEventListener("click", function showOperation() {
  newOperator = ".";
  let changeScreen = document.getElementById("result");
  changeScreen.innerHTML += newOperator;
});

pressEqual.addEventListener("click", function showOperation() {
  let changeScreen = document.getElementById("result");

  let result = eval(changeScreen.innerHTML);
  changeScreen.innerHTML = result;
});

pressClear.addEventListener("click", function showOperation() {
  let changeScreen = document.getElementById("result");
  changeScreen.innerHTML = "0";
  console.clear();
});
