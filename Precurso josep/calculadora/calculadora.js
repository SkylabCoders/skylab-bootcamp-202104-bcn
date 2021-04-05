//CALCULADORA
function calculadora(num1, num2) {
  if (num2 === undefined) {
    console.log(Math.sqrt(num1));
  } else {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    var operaciones = [
      suma.toFixed(3),
      resta.toFixed(3),
      multiplicacion.toFixed(3),
      division.toFixed(3),
    ];
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Esto no es un número!");
    } else {
      console.log(
        "suma= " + operaciones[0],
        "resta= " + operaciones[1],
        "multiplicacion= " + operaciones[2],
        "division= " + operaciones[3]
      );
    }
  }
}
