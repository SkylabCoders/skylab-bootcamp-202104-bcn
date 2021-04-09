let bingoCard=[];
let lineConfirmation = false;
let totalPoints =0;
let yourName;
const rankingArray = [];
let numbersHat = [];
let copiedArray = [];
let bingoCounter = 900;
let rankingPlayer;

initBingo(); 

function initBingo() {
    newName();
    newCard();
    turns();
    console.log(bingoCard);
    console.log('Has completado el bingo en '+bingoCounter+' jugadas');
    console.log('Tu puntuación ha sido de '+totalPoints+' puntos!');
    ranking();
    playAgain();
}    

function newName() {
    yourName = prompt('Escribe tu nombre');
    if (yourName === null) {
        return;
    }
    while (yourName === "" || isFinite(yourName)) {
        yourName = prompt('Escribe tu nombre');
    }
    return yourName;
}

function newCard() {
    numbersHat = [];
    copiedArray = [];
    NinetyNumbers();
    shuffle(numbersHat);
    copiedArray = [...numbersHat];
    bingoCardfunction();
    bingoCardView();
    bingoCardConsole();
    questionCard();
}

function NinetyNumbers() {     //Crea un array de 90 numeros ordenados del 1 al 90.
    for (let i=1; i<91; i++) { 
        numbersHat.push(i);
    }
    return numbersHat;
}

function shuffle(numbersHat) {        // Algoritmo Fisher-Yates con misma probabilidad (probado con otra función que garantiza la aleatoriedad de las permutaciones).
    for (let i = numbersHat.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbersHat[i], numbersHat[j]] = [numbersHat[j], numbersHat[i]];  
    }
    return numbersHat;
}

function pick15FromRanArray() {        //Coge numeros (no repetidos) al azar de un array de 90 numeros que se utilizarán para el cartón.
    for (let i = copiedArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];  
    }
    let k = Math.floor(Math.random() * copiedArray.length);
    let FinalNumber = copiedArray[k];
    copiedArray.splice(k, 1);
    return FinalNumber;
}

function bingoCardfunction() {
    bingoCard = [
    //Primera linea
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    //Segunda linea
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    //Tercera linea
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    {number: pick15FromRanArray(), matched: false },
    ];
    return bingoCard;
}   

function bingoCardView() { //Vista para prompt
    
    alert(`                                       CARTÓN:
                    ${bingoCard[0].number}     ${bingoCard[1].number}     ${bingoCard[2].number}     ${bingoCard[3].number}     ${bingoCard[4].number}
                    ${bingoCard[5].number}     ${bingoCard[6].number}     ${bingoCard[7].number}     ${bingoCard[8].number}     ${bingoCard[9].number}
                    ${bingoCard[10].number}     ${bingoCard[11].number}     ${bingoCard[12].number}     ${bingoCard[13].number}     ${bingoCard[14].number}`);
}

function bingoCardConsole() {       //Vista consola
    console.log('Primera Linea');console.log(bingoCard[0].number+'   '+bingoCard[1].number+'   '+bingoCard[2].number+'   '+bingoCard[3].number+'   '+bingoCard[4].number);
    console.log('Segunda Linea');
    console.log(bingoCard[5].number+'   '+bingoCard[6].number+'   '+bingoCard[7].number+'   '+bingoCard[8].number+'   '+bingoCard[9].number);
    console.log('Tercera Linea');
    console.log(bingoCard[10].number+'   '+bingoCard[11].number+'   '+bingoCard[12].number+'   '+bingoCard[13].number+'   '+bingoCard[14].number);
}

function questionCard() {
    let yourCard = prompt('¿Quieres este carton? Responde:yes (para aceptarlo), Responde: no (para rechazarlo)');
    while (yourCard !== 'yes' && yourCard !== 'no' && yourCard !== null) {
        yourCard = prompt('¿Quieres este carton? Responde:yes (para aceptarlo), Responde: no (para rechazarlo)');
    }
    if (yourCard === null) {
        return('bye');
    }else if(yourCard === 'no') {
        newCard();
    }else{
        alert('¡Perfecto, empezemos!');
    }
}

function turns() {
    bingoCounter = 0;
    totalPoints = 900;

    for (let i=0; i<numbersHat.length; i++) { 
        for (let j=0; j<bingoCard.length; j++) {
            if (numbersHat[i] === bingoCard[j].number) {
                bingoCard[j].matched = true;
                bingoCard[j].number = 'X';
            }
        }
        bingoCounter += 1;
        console.log(numbersHat[i]);
        alert(numbersHat[i]);
        totalPoints -= 10;
        const ALL_MATCHED = bingoCard.every(cardNumber => cardNumber.matched === true);
        if(ALL_MATCHED === true) {
            return alert('¡¡¡BINGO!!!');
        }
        if (lineConfirmation === false) {
            let firstLineCount = 0;
            let secondLineCount = 0;
            let thirdLineCount =0;
            for(let k=0; k<bingoCard.length -10; k++) {
                if(bingoCard[k].matched === true) {
                    firstLineCount++;
                }
            }
            for(let l=5; l<bingoCard.length -5; l++) {
                if(bingoCard[l].matched === true) {
                    secondLineCount++;
                }
            }
            for (let m=10; m<bingoCard.length; m++) {
                if(bingoCard[m].matched === true) {
                    thirdLineCount++;
                }
            }
            if (firstLineCount === 5 || secondLineCount === 5 || thirdLineCount === 5) {
                alert('¡LINEA!');
                lineConfirmation = true;
            }
        }
        bingoCardView();
        bingoCardConsole();
        let nextNumberThrow = confirm('¿Quieres pasar al siguiente turno?');
        if (nextNumberThrow === false) {
            bingoCardConsole();
            return totalPoints = 0;
        }
    } 
}

function ranking() {
        
    rankingPlayer={
        "player":yourName,
        "score":totalPoints
    }
    rankingArray.push(rankingPlayer);
    rankingArray.sort(function(a, b){
        return b.score - a.score;
    });
    let rank = 1;
    for (let i = 0; i < rankingArray.length; i++) {
        if (i > 0 && rankingArray[i].score < rankingArray[i - 1].score) {
            rank++;
        }
        rankingArray[i].rank = rank;
    }
    console.log('RANKING');
    for (let i=0; i<rankingArray.length; i++) {
        console.log('#'+rankingArray[i].rank+'  '+rankingArray[i].player+'--->'+rankingArray[i].score+'puntos');
    }
}

function playAgain() {
    playAgain = confirm('Quieres jugar de nuevo?');
    if (playAgain === true) {
        initBingo();
    }else{
        return alert('OK! Adios');
    }
}