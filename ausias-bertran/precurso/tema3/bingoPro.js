let bingoCard = {};

bingo();




function bingo() {     //   Función raiz del juego

    do {
     
        setGame();
    
        playGame();
    
        endGame();

    } while (bingoCard.playAgain === true);

}

function setGame() {  //  Definir elementos del juego: usuario, cartón y bombo 

    setDefaultValues();

    setUser();

    setCard(27);

    setBombo();

    showScoreRules();

}

function setDefaultValues() {    //  Definir los valores de inicio de la partida

    bingoCard.user = "";                    //  Nombre del usuario
    bingoCard.countDownToBingo = 15;        //  Total de números para cantar bingo: Controla la cantidad de números del cartón y cuando se completa el cartón
    bingoCard.isLine =  false;              //  Status de Linea
    bingoCard.lineRanking = 1;              //  Factor de multiplicación para puntuación al cantar linea
    bingoCard.isBingo = false;              //  Status de Bingo
    bingoCard.bingoRanking = 1;             //  Factor de multiplicación para puntuación al cantar bingo
    bingoCard.playAgain = true;             //  Status para continuar jugando cuando acabe la partida
    bingoCard.score = 0;                    //  Puntuación de la partida
    bingoCard.currentNumber = 0;            //  Número en juego durante el turno
    bingoCard.bomboNumbersList = [];        //  Números dentro del bombo
    bingoCard.outBomboNumbersList = [];     //  Números fuera del bombo
    setDefaultRanking();                    //  Lista de mejores puntuaciones
}

function setUser() {    // Preguntar nombre y bienvenida al usuario

    let canWrite = true;

    do {
     
        let user = prompt("¿Como te llamas?","Ender");
   
        user = transformByTrim(user);
        let noSimbols = deleteSimbolsOnString(user);
   
        if (user !== null && user !== "" && noSimbols === user && user.length <= 41) {

            bingoCard.user = user;
            alert("¡Hola " + bingoCard.user + "!");
            canWrite = true;

        } else if (user === null || user === "") {

            alert("Debes introducir tu nombre para continuar.");
            canWrite = false;

        } else if (noSimbols !== user) {

            alert("No puedes usar símbolos para crear tu nombre.\nSolo puedes usar letras y números.");
            canWrite = false;
        } else if (user.length > 41) {

            alert("No puedes usar un nombre tan largo.\nSolo dispones de 41 caracteres para escribir tu nombre.");
            canWrite = false;
        }

    } while (canWrite !== true);
}

function transformByTrim(value) {    // Reducir espacios laterales en string respestando el valor "null"

    if (value !== null) {
        value = value.trim();
    }  
    return value;
}

function deleteSimbolsOnString(string) {   // Para comprobar si promt SOLO tiene letras y números respetando el valor "null"

    let emptyString = '';    
    let filtro = 'abcçdefghijklmnñopqrstuvwxyzABCÇDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890àáèéíòóúÀÁÈÉÍÒÓÚ ';  
    
    if (string !== null) {
        for (let i = 0; i < string.length; i++) {
            if (filtro.indexOf(string.charAt(i)) != -1) {
                emptyString += string.charAt(i);
            }
        }
    }     
    return emptyString;
}

function setCard(rowsByColumns) {  //  Crear matriz guia de las casillas del cartón. Para el ejercicio serà de 3 filas por 9 columnas = 27 casillas

    let confirmCard = false;
    
    do {

        resetCardValues();

        bingoCard.card = [];
 
        for (let i = 0; i < rowsByColumns; i++) {
            bingoCard.card.push({ id: i, number: 0, matched: false, aspect: "----"});
        }

        setUserNumbers();   

        dropUserNumbersToCard();

        confirmCard = confirm("¿Quieres jugar con este carton?\n" + showCardOnStrings() + "\n\nCancela para cambiar de cartón.");
    } while (confirmCard !== true);
}

function resetCardValues() {  // Crear (y resetear) los elementos de control al crear el cartón
         
    bingoCard.tenthsControl = {             // Contador de repeticiones de decenas: permite un máximo de 2 números de la misma decena en el cartón del usuario
        0:0 , 1:0 , 2:0 , 3:0 , 4:0 ,
         5:0 , 6:0 , 7:0 , 8:0
    };     
    bingoCard.userNumbers = [];             //  Lista de los números del cartón con los que jugará el usuario
    bingoCard.iterationValue = 0;           //  Valor de iteración para ordenar los números del usuario en el cartón
}

function setUserNumbers() {  //  Crear y seleccionar los números del usuario

    let number = 0;

    for (let i = 0; i < 90; i++) {

        number ++; 
        bingoCard.userNumbers.push(number);
    }

    disorganizeArray(bingoCard.userNumbers);
    filterByTenths();
    sortArray(bingoCard.userNumbers);
}

function filterByTenths(){  //   Seleccionar los números del usuario: Filtra los números del carton, limitando hasta un máximo de 2 números de la misma decena (excepto la decena de los 80s, que también incluye el número "90"), hasta el total de números que necesita el usuario para cantar bingo.
    
    for (let i = 0; i < 90; i++) {
    
        if (15 > bingoCard.userNumbers.length - 90) {  //  
    
            if (bingoCard.userNumbers[i] > 0 && bingoCard.userNumbers[i] < 10) {if (bingoCard.tenthsControl[0] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[0] += 1;}}
            if (bingoCard.userNumbers[i] >= 10 && bingoCard.userNumbers[i] < 20) {if (bingoCard.tenthsControl[1] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[1] += 1;}}
            if (bingoCard.userNumbers[i] >= 20 && bingoCard.userNumbers[i] < 30) {if (bingoCard.tenthsControl[2] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[2] += 1;}}
            if (bingoCard.userNumbers[i] >= 30 && bingoCard.userNumbers[i] < 40) {if (bingoCard.tenthsControl[3] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[3] += 1;}}
            if (bingoCard.userNumbers[i] >= 40 && bingoCard.userNumbers[i] < 50) {if (bingoCard.tenthsControl[4] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[4] += 1;}}
            if (bingoCard.userNumbers[i] >= 50 && bingoCard.userNumbers[i] < 60) {if (bingoCard.tenthsControl[5] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[5] += 1;}}
            if (bingoCard.userNumbers[i] >= 60 && bingoCard.userNumbers[i] < 70) {if (bingoCard.tenthsControl[6] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[6] += 1;}}
            if (bingoCard.userNumbers[i] >= 70 && bingoCard.userNumbers[i] < 80) {if (bingoCard.tenthsControl[7] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[7] += 1;}}
            if (bingoCard.userNumbers[i] >= 80 && bingoCard.userNumbers[i] <= 90) {if (bingoCard.tenthsControl[8] < 2) {bingoCard.userNumbers.push(bingoCard.userNumbers[i]); bingoCard.tenthsControl[8] += 1;}}
        }
    }                   
    bingoCard.userNumbers.splice(0,90);
}

function disorganizeArray(arrayToDisorganize) {  //  Desordenar el array

arrayToDisorganize.sort(function() {return Math.random() - 0.5});

}

function sortArray(arrayToSort) {  // Ordenar de menor a mayor el array
    arrayToSort.sort(function(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
}

function dropUserNumbersToCard() {   //  Distribuir los números en orden en el cartón, permitiendo un máximo de dos números de la misma decena por columna (excepto la columna de la decena de los 80s, que también incluye el número "90"), 
//Ordenado en el siguiente orden: 

        sortUserNumbersByColumn(0);
        sortUserNumbersByColumn(1);
        sortUserNumbersByColumn(2);
        sortUserNumbersByColumn(3);
        sortUserNumbersByColumn(4);
        sortUserNumbersByColumn(5);
        sortUserNumbersByColumn(6);
        sortUserNumbersByColumn(7);
        sortUserNumbersByColumn(8);
}

function sortUserNumbersByColumn(tenthsRange) {   /// < ==== check el refactor

    let position1Row = tenthsRange;                  //  posición de la decena en la primera fila de la misma columna
    let position2Row = tenthsRange + 9;              //  posición de la decena en la segunda fila de la misma columna
    let position3Row = tenthsRange + 18;             //  posición de la decena en la tercera fila de la misma columna

    let totalNumbersOnRow = bingoCard.tenthsControl[tenthsRange];

    if (totalNumbersOnRow === 1) {

        let randomPosition = Math.floor(Math.random()*3);

        if (randomPosition === 0) {

            bingoCard.card[position1Row].number = bingoCard.userNumbers[bingoCard.iterationValue]; 
            bingoCard.card[position1Row].aspect = getAspect(bingoCard.userNumbers[bingoCard.iterationValue]);

        } else if (randomPosition === 1) {

            bingoCard.card[position2Row].number = bingoCard.userNumbers[bingoCard.iterationValue]; 
            bingoCard.card[position2Row].aspect = getAspect(bingoCard.userNumbers[bingoCard.iterationValue]);

        } else if (randomPosition === 2) {

            bingoCard.card[position3Row].number = bingoCard.userNumbers[bingoCard.iterationValue]; 
            bingoCard.card[position3Row].aspect = getAspect(bingoCard.userNumbers[bingoCard.iterationValue]);
        }
        bingoCard.iterationValue += 1; 
    }

    if (totalNumbersOnRow === 2) {

        let randomPosition = Math.floor(Math.random()*2);

        if (randomPosition === 0) {   //  num 1 === posicio 1

            bingoCard.card[position1Row].number = bingoCard.userNumbers[bingoCard.iterationValue]; 
            bingoCard.card[position1Row].aspect =  getAspect(bingoCard.userNumbers[bingoCard.iterationValue]);

            randomPosition = Math.floor(Math.random()*2);

            if (randomPosition === 0 && bingoCard.card[position1Row].number > 0) {

                bingoCard.card[position2Row].number = bingoCard.userNumbers[bingoCard.iterationValue + 1]; 
                bingoCard.card[position2Row].aspect =  getAspect(bingoCard.userNumbers[bingoCard.iterationValue + 1]);

            } else if (randomPosition === 1 && bingoCard.card[position1Row].number > 0) {

                bingoCard.card[position3Row].number = bingoCard.userNumbers[bingoCard.iterationValue + 1]; 
                bingoCard.card[position3Row].aspect =  getAspect(bingoCard.userNumbers[bingoCard.iterationValue + 1]);
            }
        } else if (randomPosition === 1) {

            bingoCard.card[position2Row].number = bingoCard.userNumbers[bingoCard.iterationValue]; 
            bingoCard.card[position2Row].aspect =  getAspect(bingoCard.userNumbers[bingoCard.iterationValue]);

            bingoCard.card[position3Row].number = bingoCard.userNumbers[bingoCard.iterationValue + 1]; 
            bingoCard.card[position3Row].aspect =  getAspect(bingoCard.userNumbers[bingoCard.iterationValue + 1]);
        }
        bingoCard.iterationValue += 2;
    }
}

function getAspect(number) {
    
    let aspect = "";

    if (number > 0 && number < 10) {aspect = " 0" + number + " ";}
    if (number >= 10) {aspect = " " + number + " ";}

    return aspect;
}

function setBombo() {   //  Crear numeros del bombo

    let initialNumber = 0

    for ( let i = 0; i < 90; i++) {
        initialNumber ++;
        bingoCard.bomboNumbersList.push(initialNumber);
    }

    disorganizeArray(bingoCard.bomboNumbersList);

}

function showScoreRules() {  //  Mostrar el sistema de puntos al usuario

    alert("         REGLAS DE PUNTUACIÓN\n\nEmpiezas la partida con 90 puntos.\nCada turno de juego resta un punto.\n\nBonificación por cantar Linea o Bingo:\nSe multiplicará el total de puntos por un valor entre 1 y 6.\nCuanto menor sea el número de turnos al cantar linea o bingo,\nmas grande será el valor por el que se multipliquen tus puntos.");
}

function setDefaultRanking() {   //  Si es la primera partida cargar ranking con resultados de relleno

    if (bingoCard.hasOwnProperty('ranking') === false) {

        bingoCard.ranking = [
            {user : "DIOS" , score : 3150},
            {user : "Dan Abramov", score : 2015},
            {user : "miGato", score : 1752},
            {user : "BadLuckBryan" , score: 0}
        ];
    }
}

function showCardOnStrings () {  //  Mostrar cartón por prompt o consola
   
   let cardString = "";
   
   for (i = 0; i < bingoCard.card.length; i++) {

       if (i === 0 || i === 9 || i === 18) {
           cardString += "\n";
       }        
       cardString +=  bingoCard.card[i].aspect + " I ";
       if (i === 8 || i === 17 || i === 26) {
           cardString = cardString.slice(0,cardString.length -3);
       }
   }
   return cardString;
}

function playGame() {   //  Jugar Partida: sacar número del bombo > comprobar coincidencias con el carton > preguntar: continuar partida
    
    let confirmPlay = confirm("Empezamos.\n¿Girar bombo?"); 

    if (confirmPlay === true) {

        do {

            playNumber();

            askPlayAgain();

        } while (bingoCard.playAgain === true)   
    }   
} 

function playNumber() {   //  Generar número de juego (sacar número del bombo) del turno

    let bomboNumber = getNumberFromBombo();

    doMatch(bomboNumber);
}

function getNumberFromBombo() {   //  "Sacar la bola del bombo": Jugar número aleatorio (1 - 90) 

    bingoCard.currentNumber = bingoCard.bomboNumbersList[0];
    alert(`¡Bola ${bingoCard.currentNumber}!`)
    bingoCard.outBomboNumbersList.push(bingoCard.bomboNumbersList.shift());
}

function doMatch() {  //  Buscar coincidencias entre el número en juego y los del carton de bingo

    let isMatch = false;

    for ( let i = 0; i < bingoCard.card.length; i++) {
    
        if (bingoCard.currentNumber === bingoCard.card[i].number) {
    
            bingoCard.card[i].matched = true;
            bingoCard.card[i].aspect = " XX ";
            bingoCard.countDownToBingo --;
  
            singLine();


            if (bingoCard.countDownToBingo === 0) {

                bingoCard.isBingo = true;
                bingoCard.playAgain = false
                getBingoRanking();
                alert("¡¡¡BINGO!!!");

                return null;
            }

            alert(showCardOnStrings() + `\n\n ¡Bravo! Tienes el número ${bingoCard.currentNumber}.`);   
            isMatch = true;
        } 
    }
    if (isMatch === false) {
        alert(showCardOnStrings() + "\n\n ¡Lástima! Suerte el próximo turno.");
    }
}
 
function singLine() { //   Comprobar si cantan "linea"

    if (bingoCard.isLine === false) {   

        confirmLine(0,8);
        confirmLine(9,17);
        confirmLine(18,26);
    }
} 

function confirmLine(startCheck,endCheck) {   //  Comprobar "linea" por franjas de iteración

    let totalTrue = 0;
    let totalNumber = 0;

    for (let i = 0; i < bingoCard.card.length; i++){
        if (i >= startCheck && i <= endCheck && bingoCard.card[i].matched === true) {
            totalTrue ++ ;
        }
        if (i >= startCheck && i <= endCheck && bingoCard.card[i].number > 0) {
            totalNumber ++ ;
        }      
    }
    if (totalTrue === totalNumber) {
        bingoCard.isLine = true;
        getLineRanking();
        alert(`¡¡¡LINEA!!!`);
    }
}

function getLineRanking() {  // Definir bonificador por "linea". A menos turnos en cantar linea se ganan mas puntos

if (bingoCard.outBomboNumbersList.length < 2) {bingoCard.lineRanking ++}
if (bingoCard.outBomboNumbersList.length < 15) {bingoCard.lineRanking ++}
if (bingoCard.outBomboNumbersList.length < 30) {bingoCard.lineRanking ++}
if (bingoCard.outBomboNumbersList.length < 50) {bingoCard.lineRanking ++}
if (bingoCard.outBomboNumbersList.length < 80) {bingoCard.lineRanking ++}  
}

function getBingoRanking() {  // Definir bonificador por "bingo". A menos turnos en cantar bingo se ganan mas puntos

if (bingoCard.outBomboNumbersList.length < 16) {bingoCard.bingoRanking ++} 
if (bingoCard.outBomboNumbersList.length < 30) {bingoCard.bingoRanking ++} 
if (bingoCard.outBomboNumbersList.length < 50) {bingoCard.bingoRanking ++} 
if (bingoCard.outBomboNumbersList.length < 75) {bingoCard.bingoRanking ++} 
}

function askPlayAgain() {  // Confirmar "volver a jugar" o "salir del juego"

    if (bingoCard.isBingo === false) {

        let askConfirm = confirm("¿Girar bombo otra vez?");
        if (askConfirm === true) {confirmPlay = true}
        if (askConfirm === false) {bingoCard.playAgain = false;}
    }
}

function endGame() {  //  Mostar todos los resultados de la partida

    getScore();   //  Calcular score final

    if (bingoCard.countDownToBingo === 0) {

        alert(`¡¡¡Felicidades ${bingoCard.user}!!!\n` + showCardOnStrings() + `\n\nFIN DE PARTIDA\nTotal Rounds: ${bingoCard.outBomboNumbersList.length}\nScore: ${bingoCard.score}`);
        
        showRanking();
        
        let playAgain = confirm("¿Jugar de nuevo?");

        if (playAgain === true) {bingoCard.playAgain = true;}
        if (playAgain === false) {bingoCard.playAgain = false;}

    }
    if (bingoCard.countDownToBingo > 0 || bingoCard.playAgain === false) {
        
        bingoCard.playAgain = false;
        alert(`¡Hasta pronto, ${bingoCard.user}!`);
    }
} 

function getScore() {   //  Calcular la puntuación de la partida
    
    let finalScore = 90;

    for (let i = 0; i < bingoCard.outBomboNumbersList.length; i++) {
      finalScore = finalScore - 1;
    }

    finalScore += finalScore * bingoCard.lineRanking;
    finalScore += finalScore * bingoCard.bingoRanking;

    bingoCard.score = finalScore;   
}

function showRanking() {  //  Mostrar resultados al usuario

    addCurrentScoreToRanking();

    alert(showRankingOnString());
}

function addCurrentScoreToRanking() {

    for (let i = 0; i < bingoCard.ranking.length; i++) {
        if (bingoCard.ranking[i].score <= bingoCard.score) {

            let userName = bingoCard.user;
            let userScore = bingoCard.score

            bingoCard.ranking.splice(i, 0,{ user : userName, score : userScore});

            return null;
        }
    }
}


function showRankingOnString() {

let promptString = ` RANK +${playerString("PLAYER")}+ SCORE \n`;

for (let i = 0; i < bingoCard.ranking.length; i++) {
    promptString += "---------------------------------------------------------------------------\n";
    promptString += `${rankString(i)}+${playerString(bingoCard.ranking[i].user)}+${scoreString(bingoCard.ranking[i].score)}\n`;
}
    
return promptString;
}

function rankString(i) {   // Convertir valor de ranking en string para el prompt

let string = "";

if (i < 9) {

    string = `     ${i + 1}    `;

} else if (i >= 9) {

    string = `    ${i + 1}   `;
}

return string;
}

function playerString(player) {


let largeOfString = player.length;
largeOfString = (40 - largeOfString);

let string = `${addSpace(Math.ceil(largeOfString))}${player}${addSpace(Math.floor(largeOfString))}`;

return string;
}

function scoreString(score) {

let string = "";

if (score > 999) {
    string = `  ${score} `;
} else if (score <= 999 && score > 99) {
    string = `  0${score} `;
} else if (score <= 99 && score > 9) {
    string = `  00${score} `;
} else if (score <= 9 && score >= 0) {
    string = `  000${score} `;
}

return string;
}

function addSpace(numberOfRepetitions) {

let string = "";

for (let i = 0; i < numberOfRepetitions; i++) {
    string += ` `;
}

return string;
}
