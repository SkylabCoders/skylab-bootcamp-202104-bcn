//Fernando Gómez Graciani. Skylab Bingo. 2021.


/************ Arrays constructions ************/

//Ranking array with objets like {owner: 'name', points: xxx}
let ranking = [
    {owner:'Fer', points: 400},
    {owner: 'shady', points: 300},
    {owner: 'fast', points: 200},
    {owner: 'sky', points: 100},
    {owner: 'lab', points: 50}
]
//Cards generator
class Card { 

    constructor (numbersArray, owner) {
        this.numbersArray = numbersArray; //an element of the array is like {number: xx, matched: false}
        this.owner = owner;
        this.linesStatus = {
            1: false,
            2: false, 
            3: false
        };
        this.anyLineReached = false;
        this.linePoints = 0;
    }
}
//Generates an ascendent sorted array of 15 numbers without repeating
function arrayOfNumbersGenerator(){

    let cardNumbers = [];
    let nextNewNumber;
    let foundNumber;

    //Iterates while card doesn't have the amount of numbers chosen   
    while(cardNumbers.length < 15){
        
        foundNumber=0;
        //Generates a new random number to include
        nextNewNumber = randomNumberGenerator(90);
        //Checks if the new number to include already exists
        for(let i=0; i < cardNumbers.length; i++){
            if(cardNumbers[i].number === nextNewNumber){
               foundNumber++;
            }
        }
        //If the new number is not in the array, it is included
        if (!foundNumber){
            cardNumbers.push({number: nextNewNumber, matched: false});
        }
    }
    //The number objects array is ascendently sorted
    cardNumbers.sort(function(a,b){
        return (a.number - b.number);
    });

    return cardNumbers;
}


/************ Showing functions ************/

//Shows the card divided in files and columns
function showCard(card){
        showCardByDimension(card, 5);
}
//Shows the card divided in as many columns as elements chosen in one file, useful function for arrays of card numbers
//with different than 15 elements
function showCardByDimension(card, dimension){

    let counter = 0;
    console.log('\n-*************************************-');
    //Shows the elements in columns of 'dimension' elements
    for(let i=0; counter < (card.numbersArray.length - (card.numbersArray.length % dimension)); i++ ){

        let tempString = ''
        //Shows the 'dimension' elements of a file
        for(let j=0; j<dimension; j++){
            if(card.numbersArray[counter].matched === false){
                tempString = tempString.concat(` | ${card.numbersArray[counter].number} | `); 
            } else {
                tempString = tempString.concat(` | XX | `); 
            }
            counter++;
        }
        console.log(tempString);
    }
    //Shows the last elements that doesn't fit in the chosen 'dimension' columns, this code can be deleted if
    //there are no intention in cards different than 15 elements
    if(card.numbersArray.length % dimension !== 0){

        tempString = ''

        for(let k=0; k< (card.numbersArray.length % dimension); k++){
            if(card.numbersArray[counter].matched === false){
                tempString = tempString.concat(` | ${card.numbersArray[counter].number} | `); 
            } else {
                tempString = tempString.concat(` | XX | `); 
            }
            counter++;
        }
        console.log(tempString);
    }
    console.log('-*************************************-\n');

}
//Shows the ranking
function showRanking(){

    for(let i=0; i < ranking.length; i++){
        console.log(`${ranking[i].owner} ---> ${ranking[i].points} puntos`);
    }
    console.log('\n\n');
}
//Shows the user the points system
function showPointsSystem(){

    console.log('Cuantos menos turnos tardes en completar una línea más puntos obtendrás, así mismo, a menos turnos en completar el cartón, más puntos se obtienen.');
    console.log('Los puntos al completar la primera línea se calculan según la siguiente fórmula: puntos = ln(1/ (88-turnos)) * (-10)');
    console.log('Los puntos al completar el cartón se calculan según la siguiente fórmula: puntos = ln(1/ (91-turnos)) * (-100)');
    console.log('Los puntos totales se obtienen de sumar los puntos de completar la primera línea más los de completar el cartón\n\n');
}


/************ Decisions functionalities ************/

//Asks the owner for confirmation to continue the game
function confirm(card){

    let confirmation = prompt(`¿Quieres pasar al siguiente turno? \nPulsa Aceptar o escribe cualquier cosa para continuar. \nPulsa Cancelar o escribe N para salir`);

    if(confirmation === 'n'){
        confirmation = 'N';
    }
    
    switch (confirmation){

        case 'N':
        case null:
            exit(card);
            return true;

        default:
            break;
    }
}
//Asks the owner for confirmation to maintain the card
function confirmCard(card){

    let confirmation = prompt(`¿Quieres quedarte la carta? Escribe N o pulsa Cancelar para recibir una carta nueva. Escribe cualquier otra cosa o pulsa Aceptar para continuar con ella`);

    if(confirmation === 'n'){
        confirmation = 'N';
    }

    switch (confirmation){

        case 'N':
            return false;
        
        case null:
            return false;
        
        default:
            return true;
    }
}
//Asks the user for a new game
function confirmNewGame(){
    
    let confirmation = prompt('¿Quieres empezar un juego nuevo?\nPulsa Aceptar o escribe cualquier cosa para continuar. \nPulsa Cancelar o escribe N para salir');

    if(confirmation === 'n'){
        confirmation = 'N';
    }

    switch (confirmation){

        case 'N':
        case null:
            alert('¡Hasta la próxima!');
            return false;

        default:
            return true;
    }
}


/************ Small functionalities ************/

//Says goodbye to the owner
function exit(card){

    alert(`Hasta la próxima ${card.owner}`);
}
//Calculates the points for completing a line
function linePoints(turns){
    let result = 1;

    result /= (88-turns)
    result = Math.log(result);
    result *= (-10);

    return result.toFixed(2);
}
//Calculates the points for completing a card
function cardPoints(turns){

    let result = 1;

    result /= (91-turns)
    result = Math.log(result);
    result *= (-100);

    return result.toFixed(2);
}
//Sorts in ascending order the ranking array by points
function sortRanking(rankingArray){

    rankingArray.sort(function(a, b){
        return (b.points - a.points);
    });

}
//Generates a random number between 1 and the input max quantity of numbers desired
function randomNumberGenerator(maxQuantity){
    return Math.floor(Math.random()*(maxQuantity) + 1);
}
//Return true if the card is completed
function cardCompleted(card){

    let checkCard = true;
    //Runs all the card cheking if all elements are matched
    for(let i in card.numbersArray){
        if(card.numbersArray[i].matched === false){
            checkCard = false;
        }
    }

    return checkCard;
}

/************ Card modifiers ************/

//Updates a number of the card from not matched to matched
function updateCard(card, number, turn){

    for(let i in card.numbersArray){
        if(card.numbersArray[i].number === number){
           card.numbersArray[i].matched = true;
           showCard(card);
           lineReached(card, turn);
        }
    }
}
//Checks if all the elements of a line of a card with 15 elements are true.
function lineReached(card, turn){

    let checkLine1 = true;
    let checkLine2 = true;
    let checkLine3 = true;
    //Checks line 1 completely reached
    for(let i=0; i<4; i++){

        if(card.numbersArray[i].matched === false){
            checkLine1 = false;       
        }
    }
    //Checks line 1 completely reached
    for(let i=5; i<9; i++){

        if(card.numbersArray[i].matched === false){
            checkLine2 = false;       
        }
    }
    //Checks line 1 completely reached
    for(let i=10; i<14; i++){

        if(card.numbersArray[i].matched === false){
            checkLine3 = false;       
        }
    }
    //If line 1 was reached for the first time and no other was, alerts the user
    if((card.linesStatus[1] === false) && (checkLine1)){
        card.linesStatus[1] = true;

        if(!card.anyLineReached){
            alert('¡¡¡ LINEA 1 completada!!!');
            card.anyLineReached = true;
            card.linePoints = linePoints(turn);
        }
    }
    //If line 2 was reached for the first time and no other was, alerts the user
    if((card.linesStatus[2] === false) && (checkLine2)){
        card.linesStatus[2] = true;

        if(!card.anyLineReached){
            alert('¡¡¡ LINEA 2 completada!!!');
            card.anyLineReached = true;
            card.linePoints = linePoints(turn);
        }    
    }
    //If line 3 was reached for the first time and no other was, alerts the user
    if((card.linesStatus[3] === false) && (checkLine3)){
        card.linesStatus[3] = true;

        if(!card.anyLineReached){
            alert('¡¡¡ LINEA 3 completada!!!');
            card.anyLineReached = true;
            card.linePoints = linePoints(turn);
        }  
    }
    return card;
}


/************ Main function ************/

//Main function
function bingo(){

    let owner = prompt('Bienvenido a Skylab Bingo. Introduzca su nombre de usuario:\n');
    let checkOwner = false;
    let finalPoints = 0;
    let newGame = false;
    //Shows the ranking
    console.log('Esta es la tabla clasificatoria\n\n');
    showRanking();
    showPointsSystem();
    //Checks that user inputs a valid name
    while(!checkOwner){
        if(owner === null){
            alert('¡Hasta la próxima!');
            return 0;
        } else if(owner === ''){
            owner = prompt('Debes introducir al menos un carácter para tu nombre:');
        } else {
            checkOwner = true;
        }
    }
    //A new card is created and showed to the new owner
    let numbers = arrayOfNumbersGenerator();
    let card = new Card(numbers, owner);
    let cardConfirmation = false;
    let newNumbersArray=[];
    let exitBool = false;

    console.log('¡ Este es tu cartón ! Confirma que quieres quedártelo\n');

    showCard(card);
    //Iterates until the user accepts the new card
    cardConfirmation = confirmCard(card);

    while(!cardConfirmation){

        numbers = arrayOfNumbersGenerator();
        card = new Card(numbers, owner);
        console.log('\n¡ Este es tu cartón ! Confirma que quieres quedártelo\n');
        showCard(card);
        cardConfirmation = confirmCard(card);
    }
    //Iterates until the card is completed or the user exits the game
    while((!cardCompleted(card)) && (!exitBool)){

        let newNumber = randomNumberGenerator(90);
        //Creates a new number and checks if it doesn't already exist's
        while(newNumbersArray.includes(newNumber)){
            newNumber = randomNumberGenerator(90);
        }
        //Updates the card taking into acount the new number
        newNumbersArray.push(newNumber);
        alert(`¡¡¡ Ha tocado el número ${newNumber} !!!`);
        updateCard(card, newNumber, newNumbersArray.length);

        if(!cardCompleted(card)){

            exitBool = confirm(card);
        } else {
            //When the card is completed, the points are calculated
            finalPoints = parseFloat(cardPoints(newNumbersArray.length)) + parseFloat(card.linePoints);
            ranking.push({owner: card.owner, points: finalPoints});
            sortRanking(ranking);
            //Alerts the user he won
            alert(`¡¡¡ BINGO !!!\n¡Felicidades ${card.owner}, has completado el cartón en ${newNumbersArray.length} turnos!\nMira como has quedado en la tabla clasificatoria`);
            //Shows the actual ranking
            showRanking();
            //Asks the user for a new game
            newGame = confirmNewGame();

            if(newGame){
                bingo();
            }
        }
    }
}