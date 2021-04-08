function calculator(num1 = undefined, num2 = undefined) { //La funcion de la calculadora con dos parametros que los defino como undefined para que si el usuario no introduce ningún argumento la función los ejecuta como undefined
    const results = []; //Para poner el array con los resultados: suma, resta, multiplicacion y division
    //Si no se ingresa un número
    if (isNaN(num1) && isNaN(num2)) {
      return console.log('Por favor, introduzca dos números en la calculadora :)');
      //Si solamente se ingresa un número se hará su raíz cuadrada con tres decimales
    } else if (arguments.length === 1 && typeof arguments[0] === 'number') {
      return 'El resultado de la raíz cuadrada es: ' + Math.sqrt(arguments[0]).toFixed(3);
    } else if (arguments.length >= 2) {
      /*En este condicional he metido otros tres condicionales anidados:
      Primero: si el primer argumento no es un número y el segundo sí -> hacer la raíz cuadrada del segundo
      Segundo: si el segundo argumento no es un número y el primero sí -> hacer la raíz cuadrada del primero
      Tercero: si los dos argumentos son números hacer las cuatro operaciones
      */
      if (isNaN(arguments[0]) && typeof arguments[1] === 'number') {
        return 'El resultado de la raíz cuadrada del segundo valor es ' + Math.sqrt(arguments[1]).toFixed(3);
      } else if (isNaN(arguments[1]) && typeof arguments[0] === 'number' && !isNaN(arguments[0])){
        return 'El resultado de la raíz cuadrada del primer valor es ' + Math.sqrt(arguments[0]).toFixed(3);
      } else if (typeof num1 === 'number' && typeof num2 === 'number') {
        //Primero se definen las diferentes variables de cada operacion matematica con su definicion
        const sumResult = num1 + num2;
        const restResult = num1 - num2;
        const mulResult = num1 * num2;
        const divResult = num1 / num2;
        //Despues las operaciones en si
        results.push('El resultado de la suma es: ' + (sumResult).toFixed(3));
        results.push('El resultado de la resta es: ' + (restResult).toFixed(3));
        results.push('El resultado de la multiplicación es: ' + (mulResult).toFixed(3));
        results.push('El resultado de la división es: ' + (divResult).toFixed(3));
        //return results tenía este return aquí el cual quito para poder itinerar los resultados de las operaciones más adelante
      }
      //Se hace una iteración para que en consola no se imprima en forma de array, si no en cuatro líneas para que sea más amigable para el usuario 
      results.forEach( result => {
        console.log(result);
        })
    }
  }
  calculator(4, 'n') //Se invoca la funcion calculator donde se meteran los argumentos numericos para los parametros num1 y num2