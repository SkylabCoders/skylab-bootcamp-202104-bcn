let bingoCard = [
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
    // next line
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
    // next line
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
    { number: null, matched: false },
];

const ranking = [];
const bingo = (isSameUser) => {
    let userName = '';
    let counter = 0;
    const welcome = () => {
        userName = prompt('Insert your Name, please');
        if (userName === null || userName === '' || !isNaN(userName)) {
            alert('Please, insert a valid Name');
            welcome();
        } else {
            alert('Welcome to Skylab Bingo!');
        };
    };
    if (!isSameUser) welcome();

    alert(`Scoring system: the fewer numbers you need to get Bingo, the better score you will get, and the better you will be in the Ranking.`);
    if (ranking.length !== 0) {
        console.log(`Current ranking:`);
        ranking.forEach((element) => console.log(`User ${element.user} - ${element.turns} turns`));
    };
    let newBingoCard = bingoCard;
    const getBingoCard = () => {
        let arrayNumbersRandom = [];
        while (arrayNumbersRandom.length < bingoCard.length) {
            let randomNumber = Math.floor(Math.random() * 90) + 1;
            if (!arrayNumbersRandom.includes(randomNumber)) arrayNumbersRandom.push(randomNumber);
        };
        newBingoCard = bingoCard.map((num, index) => {
            return { number: arrayNumbersRandom[index], matched: num.matched }
        });
    };
    getBingoCard();

    console.log('This is your card game:')
    console.log(newBingoCard);
    let confirmCard = confirm('Do you want to play with this card?');
    while (!confirmCard) {
        getBingoCard();
        console.log('This is your new card game:')
        console.log(newBingoCard);
        confirmCard = confirm('Do you want to play with this card?');
    };
    alert(`Ok, let's start!`);

    const getLine = () => {
        let isLine = false
        let firstLine = newBingoCard.slice(0, 5).every((num) => num.number === 'X');
        let secondLine = newBingoCard.slice(5, 10).every((num) => num.number === 'X');
        let thirdLine = newBingoCard.slice(10, 15).every((num) => num.number === 'X');
        if (firstLine || secondLine || thirdLine) isLine = true; // Error: habia puesto un strict equality cuando lo que queria era asignarle un nuevo valor a la variable, y por eso nunca cantaba Linea... //
        return isLine;
    };

    const getBingo = () => {
        let isBingo = false;
        const validNumbers = newBingoCard.every((num) => num.number === 'X');
        if (validNumbers) isBingo = true // Error: habia puesto un strict equality cuando lo que queria era asignarle un nuevo valor a la variable, y por eso nunca cantaba Bingo... //
        return isBingo;
    };

    let anotherTurn;
    let anotherLine = false;
    let arrayNumbers = [];
    const turn = () => {
        anotherTurn = confirm('Do you want to extract a number?');
        randomNumber = Math.floor(Math.random() * 90) + 1;
        if (anotherTurn) {
            while (arrayNumbers.length < 91) {
                if (!arrayNumbers.includes(randomNumber)) {
                    arrayNumbers.push(randomNumber);
                    alert(`The number is: ${randomNumber}.`);
                    break;
                } else {
                    randomNumber = Math.floor(Math.random() * 90) + 1;
                }
            };
            counter++;
            let found = false;
            newBingoCard.forEach((line) => {
                if (line.number === randomNumber) {
                    line.number = 'X';
                    line.matched = true;
                    found = true;
                    console.log(`Match! Your card is now:`);
                    console.log(newBingoCard.map((num) => num.number));
                }
            });

            if (found) {
                if (getLine() && !anotherLine) {
                    alert('LINEA!');
                    anotherLine = true;
                }
                if (getBingo()) {
                    if (isSameUser) {
                        ranking[ranking.length - 1].turns = counter;
                        ranking.sort((a, b) => a.turns - b.turns)
                    } else {
                        ranking.push({ user: userName, turns: counter });
                        ranking.sort((a, b) => a.turns - b.turns)
                    };
                    alert(`BINGO! You win with ${counter} turns.`);
                    console.log(`Current ranking:`);
                    ranking.forEach((element) => console.log(`User ${element.user} - ${element.turns} turns`));
                };
            } else {
                alert(`Oh! The number isn't in your card game, try again!`)
            };
        } else {
            alert('GAME OVER');
        };
    };
    do {
        turn();
    }
    while (anotherTurn && !getBingo());
    let anotherChance = confirm('Do you want to play another game?');
    if (anotherChance) {
        bingo(true);
    } else {
        alert('Thanks for your visit!');
    };
};
bingo();
