
let numbers;
let result = [];
const calculator = () => {
  numbers = prompt("Insert all numbers to calculate, separated by hyphen");
  while (numbers === " " || numbers === "-") {
    numbers = prompt("Please, insert valids numbers, separated by hyphen");
  };
  if (numbers === null) {
    alert("See you soon!");
  } else {
    numbers = numbers.split("-");
    for (let i = 0; i < numbers.length; i++) {
      while (isNaN(numbers[i]) || numbers === " ") {
        numbers = prompt("Please, insert valids numbers, separated by hyphen");
        if (numbers === null) {
          alert("See you soon!");
        } else {
          numbers = numbers.split("-");
        };
      };
    };
    if (numbers.length !== 1) {
      const sum = numbers.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue));
      const rest = numbers.reduce((accumulator, currentValue) => Number(accumulator) - Number(currentValue));
      const mult = numbers.reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue));
      const div = numbers.reduce((accumulator, currentValue) => Number(accumulator) / Number(currentValue));
      result.push((`Sum result: ` + Math.round(sum * 1000) / 1000),
        (`Rest result: ` + Math.round(rest * 1000) / 1000),
        (`Multiplication result: ` + Math.round(mult * 1000) / 1000),
        (`Division result: ` + Math.round(div * 1000) / 1000));
      for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
      };
    } else {
      console.log(`Square root result: ${Math.round(Math.sqrt(numbers[0]) * 1000) / 1000}`);
    }
    const response = confirm("Do you want to do another operation?");
    if (response) {
      calculator();
    } else {
      alert("See you soon!");
    };
  };
};
calculator();



/* ESTA ES LA PRIMERA VERSION QUE HICE DE CALCULATOR_PRO:

let result = [];
const calculator = (...args) => {

  // Las declaraciones de estas variables las he hecho asi para que los calculos se realicen correctamente
  //con i=0, sobretodo para los casos de resta y la division, pero no me acaba de convencer,
  //es posible que haya alguna forma mas limpia de hacerlo?

  let sum = args[0];
  let rest = args[0];
  let mult = args[0];
  let div = args[0];
  for (let i = 1; i < args.length; i++) {
    sum += args[i];
    rest -= args[i];
    mult *= args[i];
    div /= args[i];
  }
  result.push((`Sum result: ` + Math.round(sum * 1000) / 1000),
    (`Rest result: ` + Math.round(rest * 1000) / 1000),
    (`Multiplication result: ` + Math.round(mult * 1000) / 1000),
    (`Division result: ` + Math.round(div * 1000) / 1000));
  for (let i = 0; i < result.length; i++) { // añado este for para ver el resultado más amigable para el usuario
    console.log(result[i]);
  };
};
const anotherOperation = () => {
  const response = confirm("Do you want to do another operation?");
  if (response == true) {
    calculator(2, 2, 3, 5);
  } else {
    alert("See you soon!");
  };
};
calculator(4, 2, 1);
anotherOperation()

*/