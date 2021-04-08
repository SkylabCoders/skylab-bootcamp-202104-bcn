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

// 1● Se preguntará por el nombre de usuario y dará la bienvenida. 

let userName = '';
welcomeAirlines();
presentationFlights();

function welcomeAirlines() {
    userName = prompt('Bienvenido/a a Skylab Airlines! \nIntroduzca un nombre de usuario', 'Hosni');
    while(userName === '' || userName === null) {     //filtrar numeros (typeof userName !== 'string') no funciona
        console.log('No ha introducido un nombre de usuario, vuelva a intentarlo de nuevo');
        welcomeAirlines();
    }
}
//2● El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona,
//y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala. 
function presentationFlights() {
    let scale;              //2
    let valueSum = 0;       //3
    let valueAverage;       //3
    let flightsScale = [];  //4
    
    console.log('Bienvenido/a ' + userName + '.');
    
    for(let i = 0; i<flights.length; i++){
        if(flights[i].scale === true) {
            scale = 'Realiza escala.';      //2
            flightsScale.push(flights[i].id);   //4    
        }else{
            scale = 'No realiza escala.';
        }
        console.log('El vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + '€. ' + scale)
        //3● A continuación, el usuario verá el coste medio de los vuelos. 
        //4● También podrá ver cuántos vuelos efectúan escalas.
        valueSum += flights[i].cost;        //3
    }
    valueAverage = valueSum / flights.length                                                           //3
    console.log('El promedio de todos los vuelos es: ' + Math.round(valueAverage * 100) / 100 + '€.'); //3
    console.log(flightsScale.length + ' Vuelos efectuan escala.');          //4

    //5● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos. 
    
    let lastFiveFlights = []; //5
    for(let i = flights.length - 5; i<flights.length; i++){
        lastFiveFlights.push(' ' + flights[i].to);
    }
    console.log('Los 5 ultimos destinos del dia son:' + lastFiveFlights);
}

