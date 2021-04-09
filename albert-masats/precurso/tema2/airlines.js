let userName = null;
let easyView = [];
let acc = 0;
let acc1 = 0;
let scaleArr = [];
let last5Arr = [];
let scaleText;

let flightSchedule = [
    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
];

do{
    userName = prompt("Introduzca su nombre de usuario");
    if (userName !== null) {
        alert(`Bienvenido a Skylab Airlines ${userName}! \uD83D\uDE00`);
    }
}while(userName !== null);

function viewFlights () {
    for (let i=0; i < flightSchedule.length; i++) {
        if(flightSchedule[i].scale === true) {
            scaleText = " realiza escala";
        }else{
            scaleText = " no realiza ninguna escala";
        }
        let newFlightSchedule =`
El vuelo con origen: ${flightSchedule[i].from}, y destino: ${flightSchedule[i].to} tiene un coste de ${flightSchedule[i].cost}€ y${scaleText}`;
        easyView.push(newFlightSchedule);
    }
    return alert(easyView);
}

function mediumPrize() {
    for (let i=0; i < flightSchedule.length; i++) {
        acc += flightSchedule[i].cost;
    }
    return alert(`El precio medio de los vuelos es de: ${acc/flightSchedule.length}€.`);
}

function scaleHowMany() {
    for (let i=0; i < flightSchedule.length; i++) {
        if(flightSchedule[i].scale === true) {
            scaleArr.push(flightSchedule[i].id);
        }
    }
    return alert(`Los vuelos con id: ${scaleArr} realizan escala.`);
}

function last5Id() {
    for (let i= 4; i < flightSchedule.length ; i++) {
        last5Arr.push(flightSchedule[i].to);
    }
    return alert(`Los destinos de los últimos 5 vuelos son: ${last5Arr}.`);
}

viewFlights();
mediumPrize();
scaleHowMany();
last5Id();