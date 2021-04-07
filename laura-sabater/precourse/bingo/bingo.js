function Player(name, score, rounds) {
	this.name = name;
	this.score = score;
	this.rounds = rounds;
}

function Box(number, matched) {
  this.number = number;
  this.matched = matched;
}

function randomNumber(min, max) {
	min = Math.ceil(min);
  max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
} 

function askName() {
	let yourName = "";
	while (yourName !== null) {
		yourName = prompt("Bienvenido/a a Skylab Casino! Introduce tu nombre");
		if (yourName === null) {
			alert("Hasta pronto!");
			return null;
		} else if (yourName === "") {
			alert("Por favor, introduce tu nombre");
		} else if (!isNaN(yourName)) {
			alert("Respuesta incorrecta");
		} else {
			return yourName;
		}
	}
}

function showRules(user) {
	console.log("Hola " + user.name + "! En cada partida obtienes puntos.\nLa puntuacion maxima en una partida son 1000 puntos.\nEn cada turno de una partida se restan 10 puntos.\nEl ganador final es el jugador que obtenga la puntuacion mas alta.");
	console.log("\n");
}

function showCarton(carton) {
	for (let line of carton) {
		let lineNumbers = [];
    for (let box of line) {
      let number = box.number;
      lineNumbers.push(number);
    }
		console.log(lineNumbers.join(" "));
		console.log("\n");
	}
	console.log("\n");
}

function createCarton(min, max, rows, columns) {
	let cartonNumbers = [];
	while (cartonNumbers.length < rows*columns) {
		let number = randomNumber(min, max);
    if (cartonNumbers.includes(number) === false) {
			cartonNumbers.push(number);
    }
  }
  for (let i = 0; i < rows; i++) {
    let row = cartonNumbers.splice(0, columns);
    row.sort((a, b) => a - b);
    cartonNumbers.push(row);
	}
	let newCarton = [];
	for (let lineNumbers of cartonNumbers) {
		let newLine = [];
    for (let j = 0; j < lineNumbers.length; j++) {
			let box = new Box(lineNumbers[j], false);
			newLine.push(box);
		}
		newCarton.push(newLine);
	}
  return newCarton;
}

function userCarton(user, min, max, rows, columns) {
	console.log(user.name + ", este es tu carton:");
	let yourCarton = createCarton(min, max, rows, columns);
	showCarton(yourCarton);
	return yourCarton;
}

function cartonSelection(user, min, max, rows, columns) {
	let newCarton = userCarton(user, min, max, rows, columns);
	let confirmCarton = "";
	while (confirmCarton !== null) {
		confirmCarton = prompt("Quieres este carton? Introduce 'si' o 'no'");
		if (confirmCarton === null) {
			alert("Cancelamos esta partida");
			return null;
		} else if (confirmCarton === "si") {
			alert("Empieza el juego!");
			return newCarton;
		} else if (confirmCarton === "no") {
			newCarton = userCarton(user, min, max, rows, columns);
		} else {
			alert("Respuesta incorrecta");
		}
	}
}

function bomboExtraction(min, max, extracted) {
	let nextBall = true;
	while (nextBall) {
		let ball = randomNumber(min, max);
		if (extracted.includes(ball) === false) {
			alert("El " + ball + "!");
			extracted.push(ball);
			nextBall = false;
			return ball;
		}	
	}
}

function checkNumber(value, carton) {
  for (let line of carton) {
		for (let box of line) {
			if (box.number === value) {
				box.matched = true;
				box.number = "X";
				console.log("Coincide el " + value + "!");
				showCarton(carton);
				return true;
			}
		}
	}
	console.log("El " + value + " no esta en tu carton.")
	showCarton(carton);
	return false;
}

function checkLine(carton) {
	for (let line of carton) {
		if (line.every(box => box.matched)) {
			alert("LINEA!")
			return true;
		} 
	}
	return false;
}

function checkBingo(carton) {
	for (let line of carton) {
		if (line.every(box => box.matched) === false) {
			return false;
		}
	}
	alert("BINGO!");
	return true;
}

function showScore(user, turns, score) {
	console.log(user.name + ", has completado el Bingo en " + turns + " turnos.\nTu puntuacion en esta partida es de " + score + " puntos.");
	console.log("\n");
}

function playGame(user, min, max, rows, columns) {
	let bingoCard = cartonSelection(user, min, max, rows, columns);
	if (bingoCard === null) {
		return null;
	}	
	let roundScore = 1150;
	let turns = 0;
	let extractedBalls = [];
	let lineDone = false;
	let bingoDone = false;
	let nextTurn = true;
	while (nextTurn) {
		turns += 1;
		roundScore -= 10;
		let newBall = bomboExtraction(min, max, extractedBalls);
		let matchedNumber = checkNumber(newBall, bingoCard);
		if (matchedNumber) {
			if (lineDone === false) {
				lineDone = checkLine(bingoCard);
			} else {
				bingoDone = checkBingo(bingoCard);
				if (bingoDone) {
					break;
				}
			}
		}
		nextTurn = confirm("Siguiente bola?");
		if (nextTurn === false) {
			alert("Cancelamos esta partida");
			return null;
		}
	}
	showScore(user, turns, roundScore);
	return roundScore;
}

function askNewRound(user) {
	let nextRound = confirm("Siguiente partida?");
	if (nextRound === false) {
		console.log(user.name + ", has obtenido un total de " + user.score + " puntos.");
		console.log("\n");
		alert("Hasta pronto " + user.name + "!");
		return false;
	} else {
		return true;
	}
}

function showRanking(players) {
	players.sort((a, b) => b.score - a.score);
	let position = 1;
	console.log("El ranking de jugadores es: ")
	for (let player of players) {
		if (player.rounds === 1) {
			console.log(position + "a posicion: " + player.name + " con " + player.score + " puntos en " + player.rounds + " partida.");
			position++;
		} else {
			console.log(position + "a posicion: " + player.name + " con " + player.score + " puntos en " + player.rounds + " partidas.");
			position++;
		}
	}
}

function bingo() {
	let players = [];
	
	let keepPlaying = true;
	while (keepPlaying) {
		
		let name = askName();
		if (name === null) {
			break;
		}
		let score = 0;
		let rounds = 0;
		let player = new Player(name, score, rounds);
		players.push(player);
		
		showRules(player);
	
		let newRound = true;
		while (newRound) {
			let roundScore = playGame(player, 1, 90, 3, 5);
			if (roundScore === null) {
				player.score += 0; 
			} else {
				player.score += roundScore;
				player.rounds ++;
			}
			newRound = askNewRound(player);
		}
		keepPlaying = confirm("Quiere jugar otro jugador?");
	}
	
	if (players.length !== 0) {
		alert("Fin del Bingo!");
		showRanking(players);
	}
}

bingo();