// Variables de turnos, cartón completado, puntuación y para array que utilizamos para comprobar que los números de la bola no se repitan
let turns = 0;
let allMatched = false;
let score = 2000;
let numbers = [];

// Función que se carga al abrir la página, con un onload(), en el tag body del  html
function bingo() {

    let nameOfUser = askUsername(); // Llamamos  ala función para preguntar el nombre de usuario
    let chosenCard = chosingBingoCard(); // Llamamos a la función para poder escoger el cartón
    showPunctuationInfo(); // Mostramos la información de los puntos
    nextTurn(chosenCard, nameOfUser); // LLamamos a la función nextTurn para poder continuar
}

// Función para que el usuario escriba su nombre
function askUsername() {
    let username = prompt('¿Cómo te llamas?');

    while (username === null || username === "") {
        username = prompt('Introduce tu nombre por favor');
    }

    return username;
}

// Función para generar el número de la bola sin que se repita
function generateRandomNum() {
    let randomNums
    do {
        randomNums = Math.floor(Math.random() * 70) + 1;
    } while (numbers.includes(randomNums));

    numbers.push(randomNums);
    return randomNums;
}

// Función que nos da escoger el cartón del bingo
function chosingBingoCard() {

    let generateCard = generateBingoCard(); // llamamos a la función que genera el cartón
    console.clear();
    showBingoCard(generateCard); // Mostramos el cartón

    let chosenBingoCard = prompt('¿Quieres este cartón? Responde la palabra -> yes');

    if (chosenBingoCard !== "yes") { // Si no queremos ese cartón que nos vuelva a preguntar que cartón queremos

        return chosingBingoCard();

    }

    return generateCard;
}

// Función para generar el cartón aleatoriamente
function generateBingoCard() {

    const card = [];

    // Creamos el cartón sin que se repitan números
    // Si da -1 significa que el número random no está en el array, por lo tanto nos lo añadirá
    while (card.length < 15) {
        let cardNums = Math.floor(Math.random() * 15) + 1;
        if (card.indexOf(cardNums) === -1) { // if para que no se repitan números en el cartón
            card.push(cardNums);
        }
    }
    return card;
}

// Función para mostrar la carta
function showBingoCard(card) {
    console.log(card);
}

// Función para mostrar el puntuaje
function showPunctuationInfo() {
    alert("Bienvenid@ al juego del BINGO, seguidamente te explicamos el sistema de puntuaje: Vas a empezar con un total de " +
        "2000 los cuales se van a ir restando de 10 en 10 por cada turno que hagas. Es decir a menos turnos, más puntos. ¡Buena surte!")
}


// Función para comprovar si algún número del cartón coincide con el número random y si es así que lo convierta en X
function matchNumber(chosenCard) {

    // LLamamos a la función para crear un número random y seguidamente los mostramos
    let randomNum = generateRandomNum();
    console.clear()
    console.log(`Número de la nueva bola: ${randomNum}`);

    let line1 = "";
    let line2 = "";
    let line3 = "";

    // Recorremos el array chosenCard, que es nuestro cartón
    for (let i = 0; i < chosenCard.length; i++) {

        let numberResult;

        if (chosenCard[i] === randomNum) { // El número del cartón se convierte en X si es igual al del número random
            numberResult = "X";
            chosenCard[i] = "X"; // Guardamos el array con la X
            console.log("%c¡BOLA!", "color:green");
        } else {
            numberResult = chosenCard[i]; // Si el número del cartón no es igual al número random, se muestra el número sin cambios
        }

        // Mostramos las líneas de 5 en 5.
        if (i < 5) {
            line1 += numberResult + ",";
        } else if (i >= 5 && i < 10) {
            line2 += numberResult + ",";
        } else if (i >= 10) {
            line3 += numberResult + ",";
        }
    }
    // Convierto las lineas en arrays y el slice es para eliminar la posición vacia que nos genera al tener anteriormente ","
    let linia1 = line1.split(',').slice(0, -1);
    let linia2 = line2.split(',').slice(0, -1);
    let linia3 = line3.split(',').slice(0, -1);

    // Mostramos cada línea del cartón
    console.log(JSON.stringify(linia1));
    console.log(JSON.stringify(linia2));
    console.log(JSON.stringify(linia3));

    // Devolvemos BINGO!, si todos los números son X
    // Con every lo que comprovamos es si cada número es X, en el caso de que sea X allMatched se vuelve true y habriamos completado
    // el cartón y también mostramos el número de turnos y el número de puntos
    if (chosenCard.every((numberResult) => {
            return numberResult === "X"
        })) {
        allMatched = true;
        console.log("");
        console.log("%c¡BINGOOO!", "color:green");
        console.log(`Has completado el bingo en ${turns} turnos`);
        console.log("");
        console.log(`Has hecho un total de ${score} puntos`);
        console.log("");
        return;
    }

    // Anteriormente he convertido cada línea en un array para poder hacer que se mostrara ¡LÍNEA! cuando alguna de ellas fuera X 
    if (linia1.every((item) => item === "X") || linia2.every((item) => item === "X") || linia3.every((item) => item === "X")) {
        console.log("%c¡LÍNEA!", "color:blue");
    }
}

// Función que nos retorna el ranking.
// Objecto con usuarios y puntuación inventada y luego a este objeto le hacemos un push del nombre de usuario
// y de la puntuació obtenida
function ranking(nameOfUser) {

    // Objeto array con los usuarios
    let previousUsers = [{
        name: "Edwin",
        score: "1234"
    }, {
        name: "James",
        score: "100"
    }, {
        name: "Rosa",
        score: "1500"
    }]

    // Hacemos push al objecto de nuestro username y de su puntuación
    previousUsers.push({
        name: nameOfUser,
        score: parseInt(score)
    });

    // Ordenamos el objecto gracias a sus propiedades
    // Pasamos dos parametros para comparar a y b, en este caso los score
    // Si a < pequeño que b, nos devuelve 1 por lo tanto a se queda abajo de b, y así sucesivamente
    previousUsers.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    })

    console.log("RANKING, ordenado por puntos de mayor a menor")

    // Recorremos el objecto para mostrar su información
    for (const users of previousUsers) {
        console.log(`Nombre:${users.name} Puntos:${users.score}`)
    }

    return previousUsers; // Retornamos previousUsers, así al llamar ranking(), se podrán mostrar
}

// Función para pasar al siguiente turno, creamos un nuevo número random y hacemos el match de nuevo, entre el cartón y el numRandom
function nextTurn(chosenCard, nameOfUser) {

    turns++; // Se van incrementando los turnos
    score -= 10; // Se decrementa la puntuación de 10 en 10
    let next = confirm('¿Desea continuar?'); // Confirm para continuar

    // Si continuamos, que ejecute otra vez matchNumbers para seguir poniendo las X y mientras allMatched sea true,
    // que nos vaya preguntando si queremos continuar, sino en el method every() anterior en la función matchNumber 
    // allMatched será true y significa, que ya hemos completado el cartón.
    // Si no queremos continuar, salimos y nos muestra un mensaje de despedida.
    if (next) {
        matchNumber(chosenCard);
        if (!allMatched) {
            nextTurn(chosenCard, nameOfUser);
        } else {
            ranking(nameOfUser); // LLamamos a la función ranking con el parametro nameOfUser para poder mostrar el nombre de usuario
            playAgain();
        }
    } else {
        console.clear();
        console.log("¡Hasta la próxima!");
    }
}


// Función para preguntarle al usuario si quiere jugar de nuevo
function playAgain() {

    // Volvemos a asignar el valor original a las variables, para que el inicio del nuevo juego no empieze desde los puntos anteriores
    turns = 0;
    allMatched = false;
    score = 2000;
    numbers = [];


    let anotherPlay = prompt("¿Quieres jugar de nuevo? Responde con yes o no");

    while (anotherPlay === "" || anotherPlay === null) {
        anotherPlay = prompt("¿Quieres realizar otra partida? Responde con yes o no");
    }

    if (anotherPlay === "yes") {
        bingo();
    } else if (anotherPlay === "no") {
        console.log("")
        console.log("¡Esperamos verte pronto de nuevo!");
    }
}