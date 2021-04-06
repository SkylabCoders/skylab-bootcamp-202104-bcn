/* 
ENUNCIADO

le pasarás dos parámetros
el usuario visualizará por consola:
-SUMA
-RESTA
-MULTIPLICACIÓN
-DIVISIÓN

+INDICAR SI NO SON NUMEROS

EXCEPCIÓN: si el usuario introduce solo un número mostrar SU RAÍZ CUADRADA

almacenar en ARRAY -> Output result = [num1 + num2 = resultSum, num1 - num2 = resultRest, ...]

CORRECCIÓN

- NO usar var -> let y const
- NO buena práctica utilizar el loose equality (==), intenta utilizar el stric equality (===) o strict inequality (!==)
- Estas almacenando todos los resultados en una array. Podrías iterar sobre ella con un for e hacer un console.log de cada uno de los resultados.

*/

function calculator(num1, num2) {
  let resultArr = [];
  let squareRoot;

  if (typeof num1 === "number" && num2 === undefined) {
    squareRoot = Math.sqrt(num1);
    resultArr.push(`The square root of ${num1} is = ${squareRoot}`);
  } else if (typeof num1 === "number" && typeof num2 === "number") {
    function sum() {
      let resultSum = num1 + num2;
      if (!(resultSum % 1 === 0)) {
        resultSum = resultSum.toFixed(3);
        resultArr.push(`${num1} + ${num2} = ${resultSum}`);
      } else {
        resultArr.push(`${num1} + ${num2} = ${resultSum}`);
      }
    }
    sum();

    function rest() {
      let resultRest = num1 - num2;
      if (!(resultRest % 1 === 0)) {
        resultRest = resultRest.toFixed(3);
        resultArr.push(`${num1} - ${num2} = ${resultRest}`);
      } else {
        resultArr.push(`${num1} - ${num2} = ${resultRest}`);
      }
    }
    rest();

    function mult() {
      let resultMult = num1 * num2;
      if (!(resultMult % 1 === 0)) {
        resultMult = resultMult.toFixed(3);
        resultArr.push(`${num1} * ${num2} = ${resultMult}`);
      } else {
        resultArr.push(`${num1} * ${num2} = ${resultMult}`);
      }
    }
    mult();

    function div() {
      let resultDiv = num1 / num2;
      if (!(resultDiv % 1 === 0)) {
        resultDiv = resultDiv.toFixed(3);
        resultArr.push(`${num1} / ${num2} = ${resultDiv}`);
      } else {
        resultArr.push(`${num1} / ${num2} = ${resultDiv}`);
      }
    }
    div();
  } else {
    console.log("Wrong character, please insert a number");
    return 0;
  }
  for (let iResult = 0; iResult < resultArr.length; iResult++) {
    console.log(resultArr[iResult]);
  }
  return 0;
}

calculator(5, 7);
