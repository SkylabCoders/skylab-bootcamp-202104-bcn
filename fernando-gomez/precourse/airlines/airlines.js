//Skylab Coders Academy - Airlines - Pro - Fernando Gómez Graciani

// Initialize needed arrays and variables
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

let lastFlights = [{ id: null, to: null, from: null, cost: null, scale: null}];
let scaleFlights = [{ id: null, to: null, from: null, cost: null, scale: null}];
let greaterPriceArray = [{ id: null, to: null, from: null, cost: null, scale: null}];
let lowerPriceArray = [{ id: null, to: null, from: null, cost: null, scale: null}];
let averagePrice=0;

airline();

/************ Arrays construction ************/

//Pushes last 5 flights into an array
function lastFlightsArray(){

        for(let i=flights.length; i > (flights.length - 6); i--){

            lastFlights.push(flights[i]);
        }
        // Deletes first element (null) of lastFlights string
        lastFlights.shift();
}
//Pushes flights with scales into an array
function scaleFlightsArray(){

    for(let i=0; i < flights.length; i++){

        if (flights[i].scale == true){
            scaleFlights.push(flights[i]);         
        }
    }

    scaleFlights.shift();   

}
// Calculates average price of all flights
function flightsAveragePrice(){

    for (let i=0; i < flights.length; i++){
        averagePrice += flights[i].cost;
    }
    averagePrice /= flights.length;
}

/************ Arrays showing ************/

//Shows all flights for today
function showFlights(){

    for(let i=0; i < flights.length; i++){
        // Changes console log depending on scales number
        if (flights[i].scale == false){
            console.log(`${flights[i].id} - El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala.`);
        } else {
            console.log(`${flights[i].id} - El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escalas.`);
        }
    }
}
//Shows flights with scales
function showScaleFlights(){
    for(let i=0; i < scaleFlights.length; i++){
        
        if (scaleFlights[i].scale == false) {
            console.log(`${scaleFlights[i].id} - El vuelo con origen ${scaleFlights[i].from} y destino ${scaleFlights[i].to} tiene un coste de ${scaleFlights[i].price}€ y no realiza ninguna escala.`);
        } else {
            console.log(`${scaleFlights[i].id} - El vuelo con origen ${scaleFlights[i].from} y destino ${scaleFlights[i].to} tiene un coste de ${scaleFlights[i].price}€ y realiza escalas.`);
        }
    }
}
//Shows last 5 flights of the day
function showLastFlights(){

    lastFlights = [];
    lastFlightsArray();

    for(let i=0; i<lastFlights.length; i++){
        // Changes console log depending on scales number
        if (lastFlights[i].scale == false){
            console.log(`${lastFlights[i].id} - El vuelo con origen ${lastFlights[i].from} y destino ${lastFlights[i].to} tiene un coste de ${lastFlights[i].price}€ y no realiza ninguna escala.`);
        } else {
            console.log(`${lastFlights[i].id} - El vuelo con origen ${lastFlights[i].from} y destino ${lastFlights[i].to} tiene un coste de ${lastFlights[i].price}€ y realiza escalas.`);
        }
    }
}

/************ Small functionalities ************/

//Says goodbye to the user
function exit(){
    alert("¡Hasta luego!");
}


/************ Main function ************/

function airline(){

    let userName = prompt(`Bienvenido a Skylab Arlines. Introduzca su nombre de usuario:`);

    if(userName === null){
        return 0;
    }
    
    while(userName === ''){
        alert("Has introducido el nombre vacío");
        userName = prompt(`Bienvenido a Skylab Arlines. Introduzca su nombre de usuario:`);
    }
    
    lastFlightsArray();
    flightsAveragePrice();
    scaleFlightsArray();
    
    // Username input
    console.log(`Gracias por elegirnos ${userName}, estos son todos los vuelos del día:\n\n`);
    
    showFlights();
    
    // Average price of flights
    console.log(`\nEl precio medio de nuestros vuelos es de ${averagePrice.toFixed(2)}€\n\n`);

    // Flights with scales
    console.log(`Los vuelos que realizarán escalas son:\n\n`);

    showScaleFlights();

    // Last 5 flights of the day
    console.log(`\nEstos son los 5 últimos vuelos del día:\n`);

    showLastFlights();

    exit();
}