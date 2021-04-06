let bingoCard = [{ number: 4, match: false }];

const numberOfLines = 15;
const rangeOfNumbers = 30;

let turnos = 0;
let takeOutPoints = 0;
let totalPoints = 0;
let maxPoints = 500;
let checkRandomNumbers = [];
let players = [];
let info = [];
let rankingInfo = [];

function resetVariables() {
  checkRandomNumbers = [];
  takeOutPoints = 0;
  maxPoints = 500;
  totalPoints = 0;
  turnos = 0;
}

function bingo() {
  resetVariables();
  questionName();
}

function questionName() {
  let playerName = prompt("Hola, introduzca su nombre por favor.");
  checkQuestionName(playerName);
}

function checkQuestionName(playerName) {
  if (!playerName || !playerName.match(/[a-z]/i)) {
    alert("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    console.log("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    questionName();
  } else {
    alert("Hola " + playerName + ". Empezemos con el Bingo!!");
    players.push(playerName);
    pointsExplanation();
    questionBingoCard();
  }
}

function createBingoCard() {
  for (let i = 0; i < numberOfLines; i++) {
    let validNumber = false; //variable intermitente
    while (validNumber === false) {
      let number = randomNumber();
      if (!checkRepeatNumber(number, bingoCard)) {
        bingoCard.push({ number: number, match: false });
        validNumber = true;
      }
    }
  }
  showBingoCard(bingoCard);
}

function questionBingoCard() {
  bingoCard = [];
  createBingoCard();
  let changeBingoCard = prompt("Te gusta este carton? y/n");
  if (changeBingoCard === "n") {
    questionBingoCard();
  }
  if (changeBingoCard === "y") {
    primerTurno();
    questionConfirm();
    playAgain();
  } else if (!changeBingoCard || !changeBingoCard.match(/[a-z]/i)) {
    alert("Porfavor introduzca y/n");
    questionBingoCard();
  }
}

function checkRepeatNumber(number, array) {
  let repeatedNumber = false;
  for (let i = 0; i < array.length; i++) {
    if (number === array[i].number) {
      return true;
    }
  }
  return repeatedNumber;
}

function checkRepeatRandomNumber(number, array) {
  let repeatedNumber = false;
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      return true;
    }
  }
  return repeatedNumber;
}

function randomNumber() {
  let result = 0;
  result = Math.floor(Math.random() * rangeOfNumbers + 1);
  return result;
}

function primerTurno() {
  let newNumber = 0;
  let hasAppeared = false;

  while (hasAppeared === false) {
    newNumber = randomNumber();
    if (!checkRepeatRandomNumber(newNumber, checkRandomNumbers)) {
      checkRandomNumbers.push(newNumber);
      hasAppeared = true;
      alert("Ha salido el numero... " + newNumber + "!");
    }

    if (checkRepeatNumber(newNumber, bingoCard)) {
      isMatched(newNumber);
    }
  }
  turnos++;
  takeOutPoints++;
}

function countTurns() {
  console.log(turnos);
}

function showBingoCard(array) {
  console.clear();
  for (let i = 0; i < array.length; i++) {
    if (array[i].match === false) {
      console.log("Numero " + array[i].number);
    } else if (array[i].match === true) {
      console.log("Number: X");
    }
    if (i === 4) {
      console.log("***********************");
    } else if (i === 9) {
      console.log("***********************");
    }
  }
}

function isMatched(newNumber) {
  let arrayOfNewNumbers = [];

  for (let i = 0; i < bingoCard.length; i++) {
    if (bingoCard[i].number === newNumber) {
      arrayOfNewNumbers.push({
        linea: i,
        number: bingoCard[i].number,
        match: true,
      });
    } else {
      arrayOfNewNumbers.push(bingoCard[i]);
    }
  }
  bingoCard = arrayOfNewNumbers;
  showBingoCard(bingoCard);
}

function checkForBingo(array) {
  let endGame = false;
  if (array.every((i) => i.match === true)) {
    alert("BINGO!!!!!!");
    endGame = true;
  }
  return endGame;
}

function checkForLinea(bingoCard) {
  let cantarLinea = false;
  let firstLine = [];
  let secondLine = [];
  let thirdLine = [];

  for (let i = 0; i < bingoCard.length; i++) {
    while (i < 5) {
      firstLine.push(bingoCard[i].match);
      i++;
      if (firstLine.length === 5 && firstLine.every((i) => i === true)) {
        alert("LINEA!!!!!");
        cantarLinea = true;
        return cantarLinea;
      }
    }
  }
  for (let i = 5; i < bingoCard.length; i++) {
    while (i < 10) {
      secondLine.push(bingoCard[i].match);
      i++;
      if (secondLine.length === 5 && secondLine.every((i) => i === true)) {
        alert("LINEA!!!!!");
        cantarLinea = true;
        return cantarLinea;
      }
    }
  }
  for (let i = 10; i < bingoCard.length; i++) {
    while (i < 14) {
      thirdLine.push(bingoCard[i].match);
      i++;
      if (thirdLine.length === 4 && thirdLine.every((i) => i === true)) {
        alert("LINEA!!!!!");
        cantarLinea = true;
        return cantarLinea;
      }
    }
  }
  return cantarLinea;
}

function questionConfirm() {
  let isLinea = false;
  let isBingo = false;
  let question = confirm("Quieres continuar con el bingo?");
  while (question === true && isBingo === false) {
    primerTurno();
    isBingo = checkForBingo(bingoCard);
    if (isLinea === false || isLinea === undefined) {
      isLinea = checkForLinea(bingoCard);
    }
    if (isBingo === false) {
      question = confirm("Quieres continuar con el bingo?");
    } else {
      alert(
        "El bingo ha terminado, ha resuelto el bingo con " + turnos + " turnos!"
      );
      points();
    }
  }
}

function playAgain() {
  let questionPlayAgain = prompt("Desea volver a jugar? y/n");

  if (questionPlayAgain === "y") {
    bingo();
  } else if (questionPlayAgain === "n") {
    alert("Ok! Gracias por jugar con nosotros :)");
    return 0;
  }
}

function pointsExplanation() {
  alert(
    "Cuanto menos tardes en decir BINGO mas puntos tendrás!!" +
      "\n" +
      " - Se restararan 2 puntos por cada turno" +
      "\n" +
      " - Empezaras con 500"
  );
}

function points() {
  totalPoints = maxPoints - takeOutPoints * 2;
  for (let i = 0; i < players.length; i++) {
    info =
      "- " + players[i] + ", ha acabado con " + totalPoints + " puntos." + "\n";
    alert(info);
    rankingInfo.push(info);
  }
  e;
  players = [];
  displayRanking();
}

function displayRanking() {
  alert("RESULTADOS FINALES ->>>>> " + "\n" + rankingInfo);
}

bingo();
