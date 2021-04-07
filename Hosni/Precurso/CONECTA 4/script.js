let tableArr = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];

const VISIBLE = "visible";
const HIDDEN = "hidden";

let userName_1;
let userName_2;

let ronda = 0;
let time = 30;
let timeCountDown;

const column0 = document.getElementsByClassName("column-0");
const column1 = document.getElementsByClassName("column-1");
const column2 = document.getElementsByClassName("column-2");
const column3 = document.getElementsByClassName("column-3");
const column4 = document.getElementsByClassName("column-4");
const column5 = document.getElementsByClassName("column-5");
const column6 = document.getElementsByClassName("column-6");

for (let i = 0 ; i < column0.length; i++) {
    column0[i].addEventListener('click', function(){addToken(0);}); 
    column1[i].addEventListener('click', function(){addToken(1);});
    column2[i].addEventListener('click', function(){addToken(2);});
    column3[i].addEventListener('click', function(){addToken(3);});
    column4[i].addEventListener('click', function(){addToken(4);});
    column5[i].addEventListener('click', function(){addToken(5);});
    column6[i].addEventListener('click', function(){addToken(6);});
};

document.getElementById("playerVsPlayer").addEventListener("click", function(){
    displayUserMenu(false);
    startGameButtonDisplay(false);
});

document.getElementById("playerVsIA").addEventListener("click", function(){
    displayUserMenu(true);
    startGameButtonDisplay(true);
});

document.getElementById("exitGame").addEventListener("click", function(){    
    exitGameDisplay();
    resetPrint();
    resetToken();
    resetTime();
    countRound("exit");
    startGameButtonDisplay(true);
    startGameButtonDisplay(false);
});

document.getElementById("restartGame").addEventListener("click", function(){    
    resetPrint();
    resetToken();
    setTimeRound();
    countRound("reset");
});

function displayUserMenu(computer){
    document.getElementById("visibility-p1").style.visibility = VISIBLE;
    document.getElementById("startGame").style.visibility = VISIBLE;
    document.getElementById("userName-text").style.visibility = VISIBLE;
    document.getElementById("visibility-p2").style.visibility = typeof computer == "boolean" ? (computer ? HIDDEN:VISIBLE) : "";  
};

function startGameButtonDisplay(computer) {
    let oponentButton =  typeof computer == "boolean" ? (computer ? buttonPlayerVsComputer:buttonPlayerVsPlayer) : "";
    // let removeOponentButton =  typeof computer == "boolean" ? (!computer ? buttonPlayerVsComputer:buttonPlayerVsPlayer) : "";

    document.getElementById("startGame").removeEventListener("click", buttonPlayerVsComputer);
    document.getElementById("startGame").removeEventListener("click", buttonPlayerVsPlayer);
    document.getElementById("startGame").addEventListener("click", oponentButton);
};

function buttonPlayerVsPlayer() {
    userName_1 = document.getElementById("userName_1").value;
    userName_2 = document.getElementById("userName_2").value;
    if(userName_1 === "" || userName_2 === ""){
        document.getElementById("errorNameInput").innerHTML = "NO HA INTRODUCIDO UN USERNAME VALIDO"
    }else {
        printGameStart();
        playerVsPlayer();
    }
};

function printPlayerRound(player1, player2) {
    switch(ronda % 2) {
        case 0: 
            document.getElementById("player-turn").style.backgroundColor = yellowColor;
            return document.getElementById("player-turn").innerHTML = player2 === "" ? "computer": userName_2;
        case 1:
            document.getElementById("player-turn").style.backgroundColor = redColor;
            return document.getElementById("player-turn").innerHTML = player1;
    }
};

function buttonPlayerVsComputer() {
    userName_1 = document.getElementById("userName_1").value;

    if(userName_1 === ""){
        document.getElementById("errorNameInput").innerHTML = "NO HA INTRODUCIDO UN USERNAME VALIDO"
    }else {
        printGameStart();
        printPlayerRound(userName_1);
        playerVsComputer();
    }
};

function printGameStart() {
    document.getElementById("errorNameInput").innerHTML = "";
    document.getElementById("introduction").style.display = "none";
    document.getElementById("game").style.display = "flex";
};

function playerVsPlayer(){
    countRound(ronda);
    printPlayerRound(userName_1, userName_2);
};

function startTime(){
    timeCountDown = setInterval(function() {
        time -= 1;
        printTime(time);

        if(time == 0) {
            setTimeRound();
            countRound(ronda);
        };
    }, 1000);
};

function resetTime() {
    time = 30;
    printTime(time);
    clearInterval(timeCountDown);
};

function printTime(time) {
    return document.getElementById("timerCount").innerHTML = "TIEMPO: " + time;
};

function playerVsComputer(){ //TODO: VS computer
    console.log("PvC");
};

function addToken(columna){
    let arrLength = tableArr[columna].length -1
    let tdPosition;

    for(i in tableArr[columna]) {

        if(tableArr[columna][i] == 1) {            
            tdPosition = i-1;
            tableArr[columna][tdPosition] = 1;
            printTd(columna, tdPosition);
            break;
        }else if(i == arrLength){
            tdPosition = arrLength;
            tableArr[columna][tdPosition] = 1;
            printTd(columna, tdPosition)
        };
    };
    // validar()
};

const redColor = "red";
const yellowColor = "yellow";
const exitText = "exit";
const resetText = "reset";

function countRound(count) {//reset time, change color
    ronda = typeof count === "number" ? count += 1 : count;
    
    switch(ronda) {
        case exitText:
            ronda = 0;
            break;
        case resetText:
            ronda = 1;
            break;
    }

    setTimeRound();
    printPlayerRound(userName_1, userName_2);
    
    switch(ronda % 2) {
        case 0: 
            return redColor;
        case 1:
            return yellowColor;        
    };
};

function setTimeRound(){
    resetTime();
    startTime();
};

function printTd(columna, fila) {
    let setColor = countRound(ronda);
    document.getElementById("row-" + fila + "-column-" + columna).style.backgroundColor = setColor;
};

function resetToken() {
    for(columna in tableArr){
        for(fila in tableArr[columna]){
            tableArr[columna][fila] = "";
        };
    };
};

function resetPrint() {
    for(columna in tableArr){
        for(fila in tableArr[columna]){
            document.getElementById("row-" + fila + "-column-" + columna).style.backgroundColor = "rgb(0, 164, 255)";
        };
    };
};

function exitGameDisplay() {
    document.getElementById("introduction").style.display = "flex";
    document.getElementById("game").style.display = "none";
    document.getElementById("visibility-p1").style.visibility = HIDDEN;
    document.getElementById("visibility-p2").style.visibility = HIDDEN;
    document.getElementById("userName-text").style.visibility = HIDDEN;
    document.getElementById("startGame").style.visibility = HIDDEN;
};