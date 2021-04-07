//Función para obtener los números que introduzca el usuario con prompt
function getNumbers() {
    //Variable con prompt donde el usuario introducirá los números. No se pone .slipt() aquí por si el usuario le da a cancelar, lo cual devuelve null y no se puede hacer este método sobre este valor 
    let numbers = prompt("Introduzca los números, separados por comas, que desee");
    //Ponemos un condicional si el usuario introduce algo que devuelve el valor null o no pone nada
    if (!numbers || numbers === '') {
        console.log("Por favor, asegúrese de introducir números, ¡inténtelo de nuevo! :)");
        return getNumbers();
    }
    //Trim elimina espacios (si el usuario los pone entre la coma y el siguiente número) y se pone aquí el split porque aquí numbers ya sí tiene el valor de un string
    numbers = numbers.trim().split(',');
    //Se pone un condicional si el usuario añade un elemento pero no tiene valor numérico  
    if (numbers.length === 1) {
        const number = parseFloat(numbers[0]);
        if (typeof number !== 'number' || isNaN(number)) {
            console.log("Por favor, asegúrese de introducir números, ¡inténtelo de nuevo! :)");
            return getNumbers();
        }
        return number;
    }
    //Se pone un bucle for para que vaya argumento por argumento validando que sean números
    for (let i = 0; i < numbers.length; i++) {
        //Se usa el parseFloat para que los elementos de la string se trabajen como números 
        numbers[i] = parseFloat(numbers[i]);
        //Si ha introducido más de un elemento pero no son números
        if (typeof numbers[i] !== "number" || isNaN(numbers[i])) {
            console.log("Por favor, asegúrese de introducir números, ¡inténtelo de nuevo! :)");
            getNumbers();
        //Si no ha introducido nada
        } else if (numbers[i] === "") {
            return console.log("No hay nada en la calculadora");
        }
    }
    return numbers;
}
//Ahora se hace la función donde se realizarán las operaciones. 
function calculator() {
    //Variable results que invoca a getNumbers para hacer las operaciones con los números que introduce el usuario
    const results = getNumbers();
    //Se ejecutará solamente si se tiene un número (por eso que ponga 'number', porque si se introdujese más de un número sería un array) y se calculará su raíz cuadrada
    if (typeof results === 'number') {
        console.log(`La raíz cuadrada del número es ${Math.sqrt(results).toFixed(3)}`);
        return askUser();
    }
    //Variables de cada una de las operaciones y la posición donde se quiere que empiece
    var sum = 0;
    var rest = results[0] || 0;
    var multi = results[0] || 1;
    var div = results[0];
    for (let position in results) {
        sum += results[position];
        //Se usan los ternarios para evaluar si estamos en la primera posición o no
        rest -= position === "0" ? 0 : results[position];
        multi *= position === "0" ? 1 : results[position];
        div /= position === "0" ? 1 : results[position];
    }
    //Se añade cada resultado de las operaciones al array Finalresults
    const finalResults = [
        "El resultado de la suma es: " + sum.toFixed(3),
        "El resultado de la resta es: " + rest.toFixed(3),
        "El resultado de la multiplicación es: " + multi.toFixed(3),
        "El resultado de la división es: " + div.toFixed(3),
    ];
    //Se añade el bucle for para que los resultados aparezcan impresos uno debajo del otro para que sea más amigable para el usuario
    for (let i = 0; i < finalResults.length; i++) {
        console.log(finalResults[i]);
    }
    //Una vez que se han hecho todas las operaciones, y se han imprimido los resultados de las mismas, invocamos la función askUser para preguntar al usuario si quiere continuar o no
    return askUser();
}
//Función final que pregunta al usuario si quiere realizar otra operación o no
function askUser() {
    //Variable con prompt donde se le preguntará al usuario si desea realizar otra operación
    let answer = prompt("¿Quiere realizar otra operación? Escriba S o N");
    //A continuación las diferentes acciones del usuario con sus respuestas. Se usa .toLowerCase por si el usuario pone la respuesta en minúscula aunque se le diga que sea en mayúscula
    if (!answer) {
        return console.log("Le has dado a cancelar. ¡Hasta otra!");
    }
    switch (answer.toLowerCase()) {
        //En caso de que sea S
        case "s":
            calculator();
            break;
        //En caso de que sea N
        case "n":
            console.log("Está bien, ¡Hasta otra!");
            break;
        //En caso de que no sea ni S ni N
        default:
            console.log(
                "Creo que no te he entendido. Introduzca únicamente S si es sí o N si es no por favor :)"
            );
            askUser();
            break;
    }
}

calculator();