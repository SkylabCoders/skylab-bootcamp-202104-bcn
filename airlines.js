/*

Programa una interfaz de usuario para una aerolínea (por consola...). Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:

● Se preguntará por el nombre de usuario y dará la bienvenida.

● El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.

● A continuación, el usuario verá el coste medio de los vuelos.

● También podrá ver cuántos vuelos efectúan escalas.

● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

*/



let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

    let userName;
userName = prompt('What is your name?');

alert('Welcome to Skylab Airlines, ' + userName);

airlines();

function airlines(){
    seeAllFlights();
    averageCost();
    seeScales();
    afternoonFlights();
}


function seeAllFlights(){

    for (i=0; i<flights.length; i++){

            if ( flights[i].scale === true){
            console.log("El vuelo con origen " + flights[i].from + " y destino " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y si realiza escalas")
            }

            else {
            console.log("El vuelo con origen " + flights[i].from + " y destino " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y no realiza escalas")
            }

    }
}

function averageCost (){
    let total=0;
    let average;
    for (i=0; i<flights.length; i++){

        total +=flights[i].cost; 

    }
average = total/flights.length;

}

function seeScales (){
    console.log("Los vuelos que tienen escalas son: ");
    for (i=0; i<flights.length; i++){

        if (flights[i].scale===true){
        console.log(" El vuelo con identificador: " + flights[i].id + " con origen " + flights[i].from + " y destino " + flights[i].to + "y tiene un coste de " + flights[i].cost);
        }

}

}

function afternoonFlights(){
    console.log("Los destinos de los últimos velos del día son:  ")

    for (i=6; i<flights.length; i++){
            console.log(" El vuelo con identificador: " + flights[i].id + " y destino " + flights[i].to);

    }

}
