//CALCULADORA PRO
oper(numeros_operar());
function numeros_operar() {
  const numeros = prompt("Inserta numeros a operar").split(",");
  const operadores = [];
  for (let i = 0; i < numeros.length; i++) {
    if (isNaN(numeros[i])) {
      console.log("Esto no es un numero");
    } else if (numeros.length === 1) {
      console.log("La raiz cuadrada es: " + Math.round(Math.sqrt(numeros[i])));
      otraOperacion();
    } else {
      operadores.push(parseInt(numeros[i]));
    }
  }
  return operadores;
}
function oper(operadores) {
  const suma = operadores.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const resta = operadores.reduce(
    (accumulator, currentValue) => accumulator - currentValue
  );
  const multi = operadores.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  const division = operadores.reduce(
    (accumulator, currentValue) => accumulator / currentValue
  );
  console.log("La suma es: " + suma);
  console.log("La resta es: " + resta);
  console.log("La multiplicacion es: " + multi);
  console.log("La divison es: " + division);
  otraOperacion();
}
function otraOperacion() {
  let ans = prompt("Nuevos numeros? s/n");
  if (ans.toLowerCase() === "n") {
    console.log("Bye");
  } else {
    oper(numeros_operar());
  }
}
