let bingoCard = {};

bingo();






function bingo() {     //   Función raiz del juego

    do {
     
        setGame();
    
        play();
    
        endGame();

    } while (bingoCard.playAgain === true);

}

function setGame() {  //  Definir elementos del juego: usuario, cartón y bombo 

    setDefaultValues();

    setUser();

    setCard(15);

    setBombo();

    alert(`Aquí tienes tu carton, ${bingoCard.user}:\n` + showCardOnStrings());
   
}

function setDefaultValues() {    //  Definir los valores de inicio de la partida

    bingoCard.leftCountToBingo = 5;
    bingoCard.isLine = false;
    bingoCard.isBingo = false;
    bingoCard.playAgain = true;
    bingoCard.currentNumber = 0;
    bingoCard.bomboNumbersList = [];
    bingoCard.outBomboNumbersList = [];
}

function setUser() {    // Preguntar nombre y bienvenida al usuario

    let canWrite = true;

    do {
     
        let user = prompt("¿Como te llamas?");
   
        user = transformByTrim(user);
        let noSimbols = deleteSimbolsOnString(user);
   
        if (user !== null && user !== "" && noSimbols === user) {
            bingoCard.user = user;
            alert("¡Hola " + bingoCard.user + "!");
            canWrite = true;
        } else if (user === null || user === "") {
            alert("Debes introducir tu nombre para continuar.");
            canWrite = false;
        } else if (noSimbols !== user) {
            alert("No puedes usar símbolos para crear tu nombre.\nSolo puedes usar letras y números.");
            canWrite = false;
        }

    }while(canWrite === false);
}

function transformByTrim(value) {    // Reducir espacios laterales en string respestando el valor "null"

    if (value !== null) {
        value = value.trim();
    }  
    return value;
}

function deleteSimbolsOnString(string) {   // Para comprobar si promt SOLO tiene letras Y números respetando el valor "null"

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

function setCard(totalNumbers) {   // Crear cartón de juego

    bingoCard.card = [];

    for (let i = 0; i < totalNumbers; i++) {
        bingoCard.card.push({ id: i, number: 0, matched: false, aspect: "----"})
    }

    bingoCard.card[0] = { id: 00, number: 2, matched: false, aspect: " 02 "};
    bingoCard.card[7] = { id: 07, number: 45, matched: false, aspect: " 45 "};
    bingoCard.card[10] = { id: 10, number: 6, matched: false, aspect: " 06 "};
    bingoCard.card[12] = { id: 12, number: 23, matched: false, aspect: " 23 "};
    bingoCard.card[14] = { id: 14, number: 78, matched: false, aspect: " 78 "};
}

function setBombo() {   //  Crear numeros del bombo

    let initialNumber = 0

    for ( let i = 0; i < 90; i++) {
        initialNumber ++;
        bingoCard.bomboNumbersList.push(initialNumber);
    }

    bingoCard.bomboNumbersList.sort(function() {return Math.random() - 0.5});
}

function showCardOnStrings () {  //  Mostrar cartón por prompt o consola
    let cardString = "";
    
    for (i = 0; i < bingoCard.card.length; i++) {

        if (i === 0 || i === 5 || i === 10) {
            cardString += "\n";
        }        
        cardString +=  bingoCard.card[i].aspect + " I ";
        if (i === 4 || i === 9 || i === 14) {
            cardString = cardString.slice(0,cardString.length -3);
        }
    }
    return cardString;
}

function play() {   //  Jugar Partida: sacar número del bombo > comprobar coincidencias con el cartón > preguntar: continuar partida
    
    let confirmPlay = confirm("Empezamos.\n¿Girar bombo?"); 

    if (confirmPlay === true) {

        do {

            playNumber();

            playAgain();

        } while (bingoCard.playAgain === true)   ////<= test loop
    }   
} 

function playNumber() {   //  Generar número de juego (sacar número del bombo) del turno

    let bomboNumber = getNumberFromBombo();

    doMatch(bomboNumber);
}

function getNumberFromBombo() {   //  Crear número aleatorio (1 - 90)

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
            bingoCard.leftCountToBingo --;
  
            singLine();

            if (bingoCard.leftCountToBingo === 0) {

                bingoCard.isBingo = true;
                bingoCard.playAgain = false
                alert("¡¡¡BINGO!!!")

                return true;
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

        confirmLine(0,4);     //  confirmLine(0,9);
        confirmLine(5,9);     //  confirmLine(10,19);
        confirmLine(10,15);   //  confirmLine(20,29);
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
        alert(`¡¡¡LINEA!!!`);
    }
}

 function playAgain() {  // Confirmar "volver a jugar" o "salir del juego"

    if (bingoCard.leftCountToBingo > 0 && bingoCard.isBingo === false) {

        let askConfirm = confirm("¿Girar bombo otra vez?");
        if (askConfirm === true) {confirmPlay = true}
        if (askConfirm === false) {bingoCard.playAgain = false;}
    }
}

function endGame() {  //  Mostar resultados de partida

    if (bingoCard.leftCountToBingo === 0) {

        alert(`¡¡¡Felicidades ${bingoCard.user}!!!\n` + showCardOnStrings() + `\nFIN DE PARTIDA\nTotal Rounds: ${bingoCard.outBomboNumbersList.length}`);
        
        let playAgain = confirm("¿Jugar de nuevo?");

        if (playAgain === true) {bingoCard.playAgain = true;}
        if (playAgain === false) {bingoCard.playAgain = false;}

    }
    if (bingoCard.leftCountToBingo > 0 || bingoCard.playAgain === false) {
        
        bingoCard.playAgain = false;
        alert(`¡Hasta pronto, ${bingoCard.user}!`);
    }
} 