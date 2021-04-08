//** BINGO ** \\

//Variable global confirmedBingoCard que se definirá más adelante una vez se haga la función que genera números aleatorios para el cartón
//Variables interruptor que se usarán más adelante cuando se haga la función para validar si se ha hecho línea (lineValidate)
//Definimos isBingo como false para usarlo más adelante como condición
//variable balls que se definirá más adelante
let confirmedBingoCard;
let firstLineSwitcher = false;
let secondLineSwitcher = false;
let thirdLineSwitcher = false;
let isBingo = false;
let balls;
//Variable donde se guardará el ranking de los usuarios ordenado por puntos (lo suyo sería poner un array vacío, pero he metido 5 jugadores inventadis para que aparezca algo en pantalla)
let ranking = [
  { name: "Luffy", points: 85 },
  { name: "Zoro", points: 20 },
  { name: "Sanji", points: 75 },
  { name: "Nami", points: 40 },
  { name: "Chopper", points: 35 },
];

//Variable donde se guardará el nombre del jugador y sus puntos
let player = { name: "", points: 0 };

//Función bingo que invocará todas las demás funciones
function bingo() {
  welcome();
  //Se alerta al jugador de las condiciones
  alert("Un dato a tener en cuenta:\nCada turno resta 130 puntos, por lo que cuantos menos números necesites para cantar ¡Bingo! mejor puntuación obtendrás y, por tanto, ¡mejor estarás en el ranking!");
  showUserCard();

  //Variable balls que se define invocando la función que genera números random del 1 al 99, ambos incluídos
  balls = randomizedArray(99, 100);
  turn();
}
bingo();

//** FUNCIONES QUE HARÁN FUNCIONAR EL BINGO **\\

//Función de bienbenida 
function welcome() {
  const newPlayerName = prompt("Introduzca su nombre aquí por favor :)");
  if (!newPlayerName) {
    console.log("Le ha dado a cancelar, ¡hasta otra!");
  } else if (newPlayerName == "" || !isNaN(newPlayerName)) {
    console.log("Por favor, introduzca un nombre válido.");
    welcome();
  } else {
    //Se introduce el valor de newPlayerName en esta nueva variable para poderla usar fuera de la función welcome
    player.name = newPlayerName;
    console.log(`¡¡Bienvenido al Bingo de Skylab ${newPlayerName}!!`);
  }
}

//Función genérica que genera varios números random con dos parámetros: la cantidad de números random y el valor máximo de estos
function randomizedArray(arrayLength, max) {
  //Array vacío donde se guardarán los números random
  const arrayRandomNumbers = [];
  if (max < arrayLength) return [0];
  //Hacemos un do para que se ejecute siempre esta parte aunque no se de el while
  do {
    //Variable para obtener un número random
    const randomNumber = Math.floor(Math.random() * (max - 1)) + 1;
    //Si el array de números random no incluye el número generado ese número se añadirá al array (para así evitar que se repitan números)
    if (!arrayRandomNumbers.includes(randomNumber))
      arrayRandomNumbers.push(randomNumber);
    //Mientras arrayRandomNumbers no sea igual a la longitud que le pedimos
  } while (arrayRandomNumbers.length !== arrayLength);
  //Imprimir el array
  return arrayRandomNumbers;
}

//Función para hacer el formato del cartón más amigable al usuario
function cardFormatter(card) {
  const firstLine = card.slice(0,5),
  secondLine = card.slice(5,10),
  thirdLine = card.slice(10,15);
  return ([firstLine, secondLine, thirdLine].join("\n"));
}

//Función que le muestra al jugador su cartón y se le pregunta si lo quiere o no
function showUserCard() {
  //Variable que se define con la función randomizedArray y se dan los valores deseados a los parámetros de la misma
  const newCard = randomizedArray(15, 99);
  const askQuestion = confirm(`¿Quiere jugar con este cartón?\n${cardFormatter(newCard)}`);
  if (!askQuestion) {
    alert("Entendido, vamos a generar un nuevo cartón!");
    showUserCard();
  } else {
    //Se iguala la variable global confirmedBingoCard al cartón generado newCard para así poderlo usar más adelante con este valor fuera de esta función
    confirmedBingoCard = newCard;
    console.log("Perfecto, ¡empecemos a jugar!");
  }
}

//Función para validar si se ha hecho match
function matchValidate(array, number) {
  //Si el array introducido incluye un número se sustituye por X. Se usa indexOf para buscar ese número que coincide en el array y lo guardamos en la variable index, para después decir que index (el número que coincide) se sustituya por la X.
  if (array.includes(number)) {
    const index = array.indexOf(number);
    array[index] = "X";
  }
}

//Función para cada turno
function turn() {
  //Primero se pregunta al usuario si desea empezar el juego
  const askFirstTurn = confirm(`${player.name}, ¿Desea empezar el juego?`);
  //Si el jugador confirma continuar
  if (askFirstTurn) {
    //Se itera el array balls para que vaya pasando número por número (bola por bola) siempre que i sea menor que la longitud de balls (99) y no se haya hecho bingo
    for (let i = 0; i < balls.length && !isBingo; i++) {
      //Guargamos en una variable ball cada número que vaya saliendo al ir iterando el array balls
      const ball = balls[i];
      alert(`Ha salido una bola con el número...\n¡${ball}!`);
      //Invocamos las funciones que validan si se ha hecho match, línea o bingo con el array confirmedBingoCard, la longitud de ball (en el caso de match) y la longitud de i (en el caso del bingo)
      matchValidate(confirmedBingoCard, ball);
      lineValidate(confirmedBingoCard);
      bingoValidate(confirmedBingoCard, i);
      //Si no se hace bingo (es necesario volverlo a poner aquí además de en el bucle for para que esto no se vuelva a imprimir después de hacer bingo)
      if (!isBingo) {
        //Imprimimos en consola cómo se encuentra el cartón del jugador, X incluídas
        alert(`Así está tu cartón ahora mismo:\n${cardFormatter(confirmedBingoCard)}`);
        //Variable para hacer otro turno donde se pregunta al usuario si quiere continuar
        const anotherChance = confirm(`${player.name}, ¿Desea continuar?`);
        if (!anotherChance) {
          alert(
            `Espero que haya disfrutado del Bingo de Skylab ${player.name}.\n¡Hasta otra!`
          );
          return;
        }
      }
    }
  } else {
    console.log("Le ha dado a cancelar, ¡hasta otra!");
    return;
  }
}

//Función para validar si se ha hecho bingo
function bingoValidate(array, length) {
  if (
    //Se usa el método every para determinar si los elementos tienen el mismo valor, y, si es así, se sustitutyen por "X"
    array.every(function (value) {
      return value === "X";
    })
  ) {
    //Cuando se hace bingo se imprime el ranking
    alert(`¡¡¡BINGOOOOO!!!\n¡¡ENHORABUENA ${player.name}!!`);
    //La variable isBingo se vuelve true (al principio se había definido como false)
    isBingo = true;
    return printRanking(length);
  }
}

//Función para validar si se ha hecho línea
function lineValidate(array) {
  //Variables que separan el array en tres líneas de 5 números cada una, usando para eso el método .slice
  const firstRow = array.slice(0, 5),
    secondRow = array.slice(5, 10),
    thirdRow = array.slice(10, 15);
  //Aquí es donde se usan las variables "interruptor". Si éstas son "false" y, además, el valor de los números en las línas es X se canta línea y su valor cambia a "true". Esto se hace para que no se imprima todo el rato cada vez que se hace una línea o se hace bingo
  if (
    !firstLineSwitcher &&
    firstRow.every(function (value) {
      return value === "X";
    })
  ) {
    alert("¡LINEA!\n¡has completado la primera fila!");
    firstLineSwitcher = true;
  }
  if (
    !secondLineSwitcher &&
    secondRow.every(function (value) {
      return value === "X";
    })
  ) {
    alert("Línea!\n¡has completado la segunda fila!");
    secondLineSwitcher = true;
  }
  if (
    !thirdLineSwitcher &&
    thirdRow.every(function (value) {
      return value === "X";
    })
  ) {
    alert("Línea!\n¡has completado la tercera fila!");
    thirdLineSwitcher = true;
  }
}

//Función para imprimir el ranking
function printRanking(length) {
  //Se introduce el valor de la función donde se obtiene la puntuación del jugador en otra variable
  player.points = obtainScore(length);
  //Se añade el jugador en el ranking
  ranking.push(player);
  //Variable que ordena la puntuación de todos los jugadores usando el método .sort 
  const finalRanking = ranking.sort(function (a, b) {
    return b.points - a.points;
  });
  //Si la longitud del ranking es diferente a 0 (es decir, hay al menos un jugador en él), se imprimirá la situación actual del ranking
  if (finalRanking.length !== 0) {
    console.log("El ranking ahora mismo se encuentra así:");
    //Se usa el forEach para que se vaya imprimiendo cada elemento del array ranking
    finalRanking.forEach(function (element) {
      console.log(`Jugador: ${element.name} - Puntos: ${element.points}`);
    });
  }
  //Se invoca la función que pregunta al jugador si quiere volver a jugar
  newGame();
}

//Función que hace el cálculo de la puntuación según los turnos que se ha necesitado para hacer bingo
function obtainScore(length) {
  return 130 - length;
}

//Función que pregunta al jugador si quiere volver a jugar una partida nueva
function newGame() {
  const isNewGame = confirm(
    `¿Te gustaría hacer una nueva partida, ${player.name}?`
  );
  if (!isNewGame) {
    alert("Esperemos que hayas disfrutado del Bingo de Skylab, ¡hasta otra!");
    return;
  } else {
    alert("Perfecto, ¡vamos allá!");
    //Primero se resetean los valores invocando la función que hace este cometido 
    restartValues();
    bingo();
  }
}

//Función para resetear los valores de las variables y así poder volver a empezar de 0
function restartValues() {
  player = { name: "", points: 0 };
  ranking = [
    { name: "Luffy", points: 85 },
    { name: "Zoro", points: 20 },
    { name: "Sanji", points: 75 },
    { name: "Nami", points: 40 },
    { name: "Chopper", points: 35 },
  ];
  confirmedBingoCard = undefined;
  firstLineSwitcher = false;
  secondLineSwitcher = false;
  thirdLineSwitcher = false;
  isBingo = false;
  balls = undefined;
}