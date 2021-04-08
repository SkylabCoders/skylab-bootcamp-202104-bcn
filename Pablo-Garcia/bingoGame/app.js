/* User logic Game*/
const initialScore = 100;
function initPlayer(initialScore){
    const scoring = initialScore;
    const userName = prompt("What's your name?");
    if(userName === null) {
        initPlayer();
    }else{
        console.log(`Hi ${userName}, your score is: ${scoring}`);
        return {userName, scoring, matched:false, numberBall:null, line:false, bingo:false};
    }
}
/* Ranking players*/
/*Numbers logic Game*/
const generateRandomNumber = (max) => { const indexNumber = Math.floor(Math.random() * (max -1));return indexNumber;}
function generateNumbers(min, max){
    const numbers = [];
    for(let i=min; i<=max; i++){
        numbers.push(i);
    }
    return numbers;
}
function generateIndexNumbers(numbers){
    const index = generateRandomNumber(numbers.length);
    let number = numbers[index];
    numbers.splice(index, 1);
    return [number, numbers];
}

function generateNumberTable(numbers, rows, columns){
    const table = [];
    for(let i=0; i<rows; i++){
        const row = [];
        for(let j=0; j<columns; j++){
            let number = 0;
            [number, numbers] = generateIndexNumbers(numbers);
            row.push(number)
        }
        table.push(row);
    }
    return table;
}
function printTable(table, rows, columns, printBingoCard){
    let tableHtml = '<table>';
    for(let i=0; i<rows; i++){
        tableHtml += '<tr class="row-cell">';
        for(let j=0; j<columns; j++){
            tableHtml += `<td id="${table[i][j]}" class="column-cell">`;
            tableHtml += table[i][j];
            tableHtml += '</td>';
        }
    }
    tableHtml += '</table>';
    /*printBingoCard.innerHTML  = tableHtml;*/
}
function generateBingoCard(rows, columns){
    /* const printBingoCard = document.getElementById('app');*/
    const numbers = generateNumbers(1,100);
    const table = generateNumberTable(numbers,3,5);
    printTable(table, rows, columns);
    console.log('Your bingo card is:')
    console.table(table);
    return table;
}
/*Init Logic Game*/
const rows = {
    0: 0,
    1: 0,
    2: 0,
}
const balls = generateNumbers(1,100);
const players = [];
function rankingPlayers (name, score) {
    name && score ? players.push({name, score, }) : null;
    players.sort((a, b) =>  (a.score < b.score) ? 1 : -1);
    players.forEach((item, index) => {console.log(`Position:,  ${index += 1}, Player Name: ${item.name}, Points: ${item.score} `)})
    return players;
}
function showRules(){
    console.log(`
   1. The game starts with 100 points.
   2. Each turn subtracts 1 point.
   3. When you complete a line on the card completely, you will have a line and add 15 points.
   4. By completing the entire card, you will get bingo, add 20 points and the game will end. 
   5. At the end of each game, the player ranking will be displayed.`);
}
function initPlay(user, numbers){
    const table = generateBingoCard(3,5);
    setTimeout(() => {
        const isAgree = window.confirm('Do you like this cardboard?');

        if(isAgree !== true){ initPlay(user, numbers) }
        else{
            showRules();
            const startGame = window.confirm('Do you want to start playing?');

            startGame ? play(user, numbers, table) : endGame(user);
        }}, );
}

function generateRandomBall(){
    const indexBall = generateRandomNumber(balls.length);
    const ball = balls[indexBall];
    balls.splice(indexBall, 1);
    return [ball, balls];
}

function isInTable(table,ball){
    let values = null;
    table.forEach((row, rowIndex) => {
        const colIndex = row.indexOf(ball);
        if(colIndex !== -1){
            values = {rowIndex, colIndex };
        }
    })
    return values;
}

const hasLine = rows => Object.values(rows).find(foundLine => foundLine === 5);
const hasBingo = rows => Object.values(rows).reduce((a, b) => a + b);

function play(user, numbers, table){
    const [ball]= generateRandomBall();
    user.numberBall = ball;
    const found = isInTable(table, user.numberBall);
    if(hasBingo(rows) < 15){
        if(found){
            const { rowIndex } = found;
            rows[rowIndex] += 1;
            user.matched = true;

            /*document.getElementById(ball).innerHTML = 'X';*/
            table.forEach(item => {
                for(let i=0; i<item.length; i++){
                    item[i] === ball ? item[i] = 'X' : null;
                }
            });
            console.table(table);

            if(!user.line && hasLine(rows)){
                console.log('Line');
                user.line = true;
                user.scoring += 15;
            }
        }else{
            user.matched = false;
            user.scoring -= 1;
            user.numberBall = ball;
        }
        setTimeout(() => {
            const continuePlaying = window.confirm(`Do you want to continue playing ${user.userName} ?`);
            continuePlaying ? play(user, numbers, table) : endGame(user, players);
        }, 800)
    }else{
        alert('BINGO!');
        user.bingo = true;
        user.scoring += 20;
        endGame(user, players);
    }
    console.log( `Your score: ${user.scoring}, The ball is: ${user.numberBall}, and checked with your carton is: ${user.matched} `);
}

function endGame(user){
    console.log('%c Rankin players -> ', 'background: #222; color: #bada55')
    rankingPlayers(user.userName, user.scoring);

    user.bingo ? console.log(`Congratulations ${user.userName}, you have BINGO with a score of ${user.scoring}`) :
    console.log(`Thanks for playing ${user.userName}, your score is:${user.scoring}`);
    const restartGame = window.confirm('Do you like restart game?');
    restartGame ? initGame() : null;
}
/*Init Program*/
function initGame(){
    const user = initPlayer();
    initPlay(user);
}

window.onload = initGame;