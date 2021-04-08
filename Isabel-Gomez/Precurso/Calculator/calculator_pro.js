
let numbers;
let result = [];
const calculator = () => {
  numbers = prompt("Insert all numbers to calculate, separated by hyphen");
  while (numbers === " " || numbers === "-") {
    numbers = prompt("Please, insert valids numbers, separated by hyphen");
  }
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
        }
      }
    }
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
      }
    } else {
      console.log(`Square root result: ${Math.round(Math.sqrt(numbers[0]) * 1000) / 1000}`);
    }
    const response = confirm("Do you want to do another operation?");
    if (response) {
      calculator();
    } else {
      alert("See you soon!");
    }
  }
}
calculator();