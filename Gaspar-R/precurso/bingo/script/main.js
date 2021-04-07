"use strict"

//1. Al ejecutar se solicitara el nombre del usuario/jugador
//2. Debe mostrar un carton con 5/15 numeros excluyendo el cero.
//3. Para avanzar al siguiente turno el usuario debera confirmar mediante confirm(), visualizandose otro numero. Si coincide con alguno del carton este cambiara a X o 0.
//4. El carton debe mostrarse al final de cada turno, indicandose si se ha encontrado algun numero y solicitando la confirmacion de un nuevo turno.
//5. Al completar todos los numeros de una misma linea mostrara un mensaje 'LINEA'. Este evento solo ocurrira una vez.
//6. El juego finalizara al coincidir todos los numeros.
//7. Debera indicar en cuantos turnos se ha completado el carton.
//8. Debera preguntarse si se desea iniciar un nuevo juego.



//Variables globales

let card;
let nextBall = false;
let matchedNumbersQty;
let matchedNumbersQtyByLine;
let line;
let numbersAvailableToPlay;
let numbersAvailableToPlayIterator;
let nextNumberToPlay;
let turnsPlayed;
let username;


//------variables para uso en HTML---------------//

let startGameBtn = document.querySelector("#startBtn");
let num = document.querySelectorAll(".numeros");
let allNums = document.querySelector(".numbers-cont")
let lisa = document.querySelector(".lisa");
let allBtns = document.querySelectorAll(".allBtns");
let lineaBtn = document.querySelector(".lineaBtn");
let bingoBtn = document.querySelector(".bingoBtn");
let user = document.querySelector('#user');
let cardBtn = document.querySelector(".generateCardBtn");
let nextNumBtn = document.querySelector(".nextNumber");



//--------Funciones JS-----------------//


function startGame() {
	document.querySelector(".turnoClass").style.visibility = "visible";
	lisa.style.visibility = "visible";
	allNums.style.visibility = "visible";
	lineaBtn.disabled = true;
	bingoBtn.disabled = true;

	for (let btn of allBtns) {
		btn.style.visibility = "visible";
	}

	resetMatchedNumbers();

	matchedNumbersQty = 0;
	matchedNumbersQtyByLine = [0, 0, 0];
	line = false;

	numbersAvailableToPlay = [];
	for (let i = 1; i <= 75; i++) {
		numbersAvailableToPlay[i - 1] = i;
	}
	shuffle(numbersAvailableToPlay);

	numbersAvailableToPlayIterator = numbersAvailableToPlay.values();
	nextNumberToPlay = numbersAvailableToPlayIterator.next();
	console.log(nextNumberToPlay);

	turnsPlayed = 0;

}

//Genera un array de numeros, sin repetir.
function generateCard() {
<<<<<<< HEAD
	card = [[], [], []]; 
=======
	let card = [[], [], []]; 
>>>>>>> d7d9b14e294306fd1df0f8bd43cba75418616a22

	//Generar 15 numeros random
	let randomNumbers = new Set();
	while (randomNumbers.size < 15) {
		randomNumbers.add(randomNumber());
	}

	//Rellenar carton
	let randomNumbersIterator = randomNumbers.values();
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 5; j++) {
			card[i][j] = randomNumbersIterator.next().value
		}
	}

	return card;
}

//Genera un numero random entre 1 y 75.
function randomNumber() {
	return Math.floor(Math.random() * (76 - 1)) + 1;
}

//Siguiente numero del bolillero 
function siguienteBola() {
	nextBall = true;
	while (!nextNumberToPlay.done && matchedNumbersQty < 15 && nextBall == true) {
		nextBall = false;

		turnsPlayed++;
		console.log(`Turno ${turnsPlayed}: Ha salido el numero ${nextNumberToPlay.value}`);
		document.querySelector("#turnos").innerHTML = turnsPlayed;

		markGlobalNumbers(nextNumberToPlay.value);

		let matchingPosition = getMatchingPosition(nextNumberToPlay.value, card);
		if (matchingPosition != null) {
			console.log("Tienes este numero en tu carton!");

			card = markCard(matchingPosition, card);
			console.table(card);
			printCard(card);

			if (!line) {
				matchedNumbersQtyByLine[matchingPosition[0]]++;
				if (matchedNumbersQtyByLine[matchingPosition[0]] == 5) {
					line = true;
					lineaBtn.disabled = false;
					console.log("Linea!");

				}
			}

			matchedNumbersQty++;
			if (matchedNumbersQty == 15) {
				
				bingoBtn.disabled = false;
				console.log("BINGO!");

			}
		} else {
			console.table(card);
			printCard(card);
		}

		nextNumberToPlay = numbersAvailableToPlayIterator.next();
	}
}

//Obtiene la posision matcheada del numero en el tablero o null si no matchea
<<<<<<< HEAD
function getMatchingPosition(nuum, caard) {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 5; j++) {
			if (caard[i][j] === nuum) {
=======
function getMatchingPosition(num, card) {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 5; j++) {
			if (card[i][j] === num) {
>>>>>>> d7d9b14e294306fd1df0f8bd43cba75418616a22
				return [i, j];
			}
		}
	}

	return null;
}

//Marca en el carton la posicion indicada y lo devuelve
<<<<<<< HEAD
function markCard(position, caard) {
	let i = position[0];
	let j = position[1];

	caard[i][j] = "X";
	return caard;
=======
function markCard(position, card) {
	let i = position[0];
	let j = position[1];

	card[i][j] = "X";
	return card;
>>>>>>> d7d9b14e294306fd1df0f8bd43cba75418616a22
}

//Reordena el arreglo de manera random
function shuffle(array) {
	let counter = array.length;

	while (counter > 0) {
		
		let index = Math.floor(Math.random() * counter);

		
		counter--;

		
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}


// -----------Eventos y funciones HTML ---------//

//Player Name
user.addEventListener('change', function (e) {
	username = e.target.value
	if (!username)
		return
	alert(`Bienvenido ${username} al bingo`);
});

//Start Game
startGameBtn.addEventListener("click", startGame);

//Card generate 	
cardBtn.addEventListener("click", function () {
	card = generateCard();
	console.log("Tu carton para jugar es el siguiente:");
	console.table(card);
	printCard(card)
	console.log("Si quieres otro carton, presiona nuevamente el boton");
});

//Next Ball
nextNumBtn.addEventListener("click", siguienteBola);


//Marca los numeros que salieron del bolillero//
function markGlobalNumbers(number) {
	for (let i = 0; i < num.length; i++) {
		if (num[i].id == number) {
			num[i].classList.add("matched")
		}
	}
}

//Reinicia el bolillero
function resetMatchedNumbers() {
	for (let i = 0; i < num.length; i++) {
		num[i].classList.remove("matched");
	}
}


//Imprime el carton del jugador en la pagina//

<<<<<<< HEAD
function printCard(caard) {
	if (caard == undefined)
		return;

	console.log(caard);
	var html = '<table class="user-card"><tbody>';

	for (var i = 0; i < caard.length; i++) {
		html += "<tr>";
		for (var j = 0; j < caard[i].length; j++) {
			if (caard[i][j] == "X") {
=======
function printCard(card) {
	if (card == undefined)
		return;

	console.log(card);
	var html = '<table class="user-card"><tbody>';

	for (var i = 0; i < card.length; i++) {
		html += "<tr>";
		for (var j = 0; j < card[i].length; j++) {
			if (card[i][j] == "X") {
>>>>>>> d7d9b14e294306fd1df0f8bd43cba75418616a22
				html += "<td class='match'>"
			} else {
				html += "<td>"
			}
<<<<<<< HEAD
			html += caard[i][j] + "</td>";
=======
			html += card[i][j] + "</td>";
>>>>>>> d7d9b14e294306fd1df0f8bd43cba75418616a22
		}
		html += "</tr>";
	}

	html += "</tbody></table>";

	document.querySelector("#player-card-id").innerHTML = html;

}




//Linea
function linea() {
	alert("Linea!")
	console.log("Linea!");
	lineaBtn.disabled = true;
}

//Bingo
function bingo() {
	alert("BINGO!")
	lisa.style.visibility = "hidden";
	bingoBtn.disabled = true;
}