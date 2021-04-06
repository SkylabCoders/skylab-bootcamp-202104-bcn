
/*
Realiza un programa que simule un Bingo
   x - nombre del jugador y deberá guardarse 
    - 1er turno: cartón con 15 números (excluyendo el 0 siempre)
    - 2o turno: confirmar mediante confirm() visualizándose otro número.
    - Si coincide, cambiará por una "X"
    - El cartón se mostrará al final de cada turno, el programa deberá preguntar al usuario al inicio de cada turno si desea continuar
    - cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!"
    - acabará cuando todos los números estén a "X" (solamente se puede cantar línea 1 vez)
    - usuario en cuantos turnos se ha completado el cartón
    - Por último, deberá preguntar si desea volver a jugar.
function()=> Generar Numero Random Bombo function()=> Nuevo turno (Match carton[i] === randomNum) function() => Preguntar Nuevo Turno
*/

let randomNumber;
let fullLine = [0,0,0];
let bingoCard = [[],[],[]];
let randomNumberForGame;
let numberCrossed;
let line = false;
let bingoFinished= false;
let pointsByTurns = 100;
let randomNumberForPoints;
let newObject ={};

let ranking =[
    {
        name:"Paco",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Marta",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Juan",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Pepita",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Ducky",
        points: Math.floor(Math.random() * 64) + 1,
    },
]


    let userName;
    userName = prompt('¿Como te llamas?');
        if (userName==="" || userName==null){
            alert ("Por favor escriba su nombre.")
        }
        else {
            alert('Bienvenido al juego del Bingo, ' + userName);
            askTurn();
        }

    

    

function askTurn(){
    let numbersForBingo = [];
    console.log("Como se contará la puntuación de Skylab Bingo: \n Empezarás con 100 puntos, cada vez que se muestre un nuevo numero se restará un punto de tus 100. \n En cuantos más turnos se complete el cartón, menos puntos.")
        for (let i=0; i<15; i++){
        randomNumber = Math.floor(Math.random() * 90) + 1;
        if (numbersForBingo.includes(randomNumber)===false){
         numbersForBingo.push(randomNumber);
        }
        else{
            i--;
        }

    }
        fullLine = [0,0,0];
        bingoCard = [[],[],[]];
        line = false;
        bingoFinished= false;
        pointsByTurns = 100;
        randomNumberForPoints;
        newObject ={};

    console.log("Tus 15 numeros para el juego del Bingo son: " + numbersForBingo);
        let changeNumbers = confirm("¿Te gustan estos numeros? Dale a 'ok' para continuar o 'cancelar' para cambiar tus números. ");
            if (changeNumbers===true ){
                i=0;
                for(let j=0;j<3;j++){
                    for(let h=0;h<5;h++){
                        bingoCard[j][h]=numbersForBingo[i];
                        i++;
                    }
                }
                console.log("Esta es tu cartón de numeros: ");
                showNumbers();
                bingoGame();
            }
            else {
                askTurn();
            }
}

function showNumbers(){
    console.table(bingoCard)
}

function bingoGame(){
    let arrayOfRandomNumbers=[];
    do {
        randomNumberForGame = Math.floor(Math.random() * 90) + 1;
       
        if (arrayOfRandomNumbers.includes(randomNumberForGame)===false){
            arrayOfRandomNumbers.push(randomNumberForGame);
            console.log("El numero que ha salido es el: " + randomNumberForGame);
            pointsByTurns--;
            numberCrossed=0;
            checkAllNumbers();
                if (numberCrossed!=0){
                    console.log("El número " + randomNumberForGame + " se ha localizado en tu cartón");
                    showNumbers();
                }
                else {
                    console.log("El número " + randomNumberForGame + " no se ha localizado en tu cartón");
                    showNumbers();
                }
            let keepPlaying=confirm("Quieres otro numero?")
            if (keepPlaying===false){
            break;
            }
        }
        

        } while (bingoFinished===false)

        endOfGame();

}

function checkAllNumbers(){
    for (let k=0; k<bingoCard.length;k++){
        for (let l=0; l<bingoCard[k].length; l++){ 
                if (randomNumberForGame===bingoCard[k][l]){
                    bingoCard[k][l]="x";
                    numberCrossed++;
                    fullLine[k]++;
                    if (line===false)
                    {
                        checkForLine();
                    }
                    else if (fullLine[0]==5 && fullLine[1]==5 && fullLine[2]==5){
                        
                        bingoFinished=true;

                    }
                }
        }
    }

    function checkForLine(){
        for (let y=0; y<fullLine.length; y++){
            if (fullLine[y]===5){
                alert("¡¡LINEA!!")
                line=true;
            }
        }
    }
}


function endOfGame(){
    if (fullLine[0]==5 && fullLine[1]==5 && fullLine[2]==5){
        alert("¡¡¡BINGO!!! Tu puntuación final es de " + pointsByTurns + " puntos!");
        newObject.name=userName;
        newObject.points=pointsByTurns;
        ranking.push(newObject);
        console.log("BINGO! ¡" + userName + " has terminado el juego!")
        seeRanking();
        askForRestart();
    }
    else {
        alert("Has cancelado tu juego");
        console.log("Tenias " + pointsByTurns + " puntos. Has perdido por cancelar el juego! ")

        askForRestart();
    }
}

function askForRestart(){
    let restartGame = prompt("¿Quieres volver a jugar? Escribe 'si' o 'no'.")
            if (restartGame==="si" || restartGame==="Si"){
                alert("Genial, estamos preparando tus números.")
                askTurn();
            }
            else if (restartGame==="" || restartGame==null){
                alert("Por favor, escribe 'si' o 'no'.");
                askForRestart();
            }
            else{
                alert("Muchas gracias por jugar a Skylab Bingo. ¡Hasta pronto!");
            }
}

function seeRanking(){
sortRanking();
console.log("El ranking final es:")
    for(let h=0; h<ranking.length; h++){
        console.log([h+1] + " - " + ranking[h].name + " con " + ranking[h].points + " puntos! ");
    }

    function sortRanking() 
       {
        ranking.sort (function(a,b){
            if (a.points > b.points) {
                return -1;
            }
            if (a.points < b.points) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
        }

}
