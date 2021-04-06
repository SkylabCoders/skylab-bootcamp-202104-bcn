let bingoCard = [

    //Linea 1
    [ {number:  0, matched: false },
         
     { number:  0, matched: false },
  
     { number:  0, matched: false },
  
     { number:  0, matched: false },
  
     { number:  0, matched: false }],
      
     //Linea 2 
     [{number:  0, matched: false },
  
     { number:  0, matched: false },
      
     { number:  0, matched: false },
  
     { number:  0, matched: false },
  
     { number:  0, matched: false }],
     
     //Linea 3 
     [{ number: 0, matched: false },
  
     { number:  0, matched: false },
         
     { number:  0, matched: false },
     
     { number:  0, matched: false },
     
     { number:  0, matched: false }]
 

];

//I'm using global variables/arrays this time since many function used them repeatedly

let playerRecords = [];  // To

let usedCardNumbers =[];
 
 let turns;
 
 let line1Flag;
 let line2Flag;
 let line3Flag;

 let playerName = "";
 

(window.bingo = function() {

    turns = 0;

    usedNumbers = [];

    line1Flag = false;
    line2Flag = false;
    line3Flag = false;

    if (playerRecords.length > 0)  {printScore()} // Avoids printing the score table if it's empty

    playerName = prompt (`Please, introduce your name:`);


        if (playerName === null) {return false;}
        else {console.log (`Hi ${playerName}, here's your card:`)}
        
    newCard();

})();

function printScore(){

    console.log ("     Players Ranking");

    playerRecords.forEach (element => {
        
        console.log (`#${(playerRecords.indexOf(element) + 1)} Player: ${element.name} --> Score: ${element.score} pt(s)`);
    
    });

}

function newCard () {

    let usedCardNumbers = []; // Stores numbers that have been included in the card.

    bingoCard.forEach (element => {

        element.forEach (values => {
            let randomCardNumber;
            do {

                randomCardNumber = Math.floor((Math.random()*40) + 1); // 0-40 numbers for the card so it doesn't take so long.

            } while (usedCardNumbers.includes(randomCardNumber))

            values.number = randomCardNumber;
            usedCardNumbers.push(values.number);
            values.matched = false;

        });
    
    });

    printCard();

    pickCardQuestion();

}

function printCard (){

    console.log (`Line #1: ${bingoCard[0].map(a => a.number)}\nLine #2: ${bingoCard[1].map(a => a.number)}\nLine #3: ${bingoCard[2].map(a => a.number)}\n`);

}

function pickCardQuestion (question = `Do you want to keep this card? (Y/N)`){

    let answer = prompt (question);

    if (answer === null) {console.log ('Bye'); return false;}
        else {

            switch(answer.toUpperCase()) {
                case "Y":
                    nextTurn();
                    return;
                break;
                case "N":
                    console.log ("New Card:");
                    newCard();
                break;
                default:
                    pickCardQuestion(`Incorrect answer. Do you want to keep this card? (Y/N)`);
            }

        }

}

function checkCard() {

    if (bingoCard[0].every(a => a.matched === true) && bingoCard[1].every(a => a.matched === true) && bingoCard[2].every(a => a.matched === true)) {
        
        console.log (`YOU WON!! It took you ${turns} turn(s)`); 
        
        registerPlayer(); 
        playAgainQuestion(); 
        return;
    }
    
    else if (bingoCard[0].every(a => a.matched === true) && line1Flag === false) { // LineFlags checker to avoid printing line messages repeatedly
        
        console.log (`LINE (1)!!!!!!!!!!!!!`); 
        line1Flag = true
    }
    else if (bingoCard[1].every(a => a.matched === true) && line2Flag === false) {
        console.log (`LINE (2)!!!!!!!!!!!!!`); 
        line2Flag = true
    }
    else if (bingoCard[2].every(a => a.matched === true) && line3Flag === false) {
        console.log (`LINE (3)!!!!!!!!!!!!!`); 
        line3Flag = true
    }


    continueQuestion();
    
}

function registerPlayer(){

    let playerScore = 101 - turns; // Point system here, higher score is 100 points (winning in the first turn)

    if (playerScore < 0) {playerScore = 0}; // Sets minimum value for the score (0 Points)
        
    playerRecords.push({name: playerName, score: playerScore});

    playerRecords.sort(function(a, b){  // Organized array by score (high to low) 

        if (a.score < b.score) 
        {
          return 1;
        }    
        else if (a.score > b.score)
        {
          return -1;
        }   
        return 0;
      });

}

function continueQuestion(question = `Do you want to continue? (Y/N)`){

    let answer = prompt (question);

    if (answer === null) {console.log ('Bye'); return false;}
    else {

        switch(answer.toUpperCase()) {
            case "Y":
                nextTurn();
            break;
            case "N":
                console.log ('Bye');
                return false;
            break;
            default:
                continueQuestion(`Incorrect answer. Do you want to continue? (Y/N)`);
          }

    }


}


function nextTurn () {

let cardNumber = newNumber();


    let matchingTimes = 0;

        bingoCard.forEach (element => {

            element.forEach (values => {

                if (values.number ===  cardNumber) {values
                    values.matched = true;
                    values.number = "X";
                    matchingTimes++;
                    
        
                }          

            });

        });

    if (matchingTimes >= 1) {console.log(`The number ${cardNumber} matched.`);};

    turns++;

    printCard();
    checkCard();
    

}

function newNumber (){
let randomNumber;

    do {

        randomNumber = Math.floor ((Math.random()*40) + 1);

    } while (usedNumbers.includes(randomNumber))

    usedNumbers.push(randomNumber)

    return randomNumber;

}



function playAgainQuestion (question = `Do you want to play again? (Y/N)`) {

    let answer = prompt (question);

    if (answer === null) {printScore(); console.log ('Bye'); return false;}
        else {

            switch(answer.toUpperCase()) {
                case "Y":
                    bingo();
                break;
                case "N":
                    printScore();
                    console.log ('Bye');
                    return false;
                break;
                default:
                    playAgainQuestion(`Incorrect answer. Do you want to play again? (Y/N)`);
            }

        }


}








