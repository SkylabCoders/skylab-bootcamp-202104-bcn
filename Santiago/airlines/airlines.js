// Declaramos los vuelos de manera global
let flights =
[
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

// Función que pregunta el nombre y hace el saludo
function askUsername(){

    const askName = prompt('¿Cómo te llamas?');

   if(askName !== "" && askName !== null){ // Si el input no está vacio ni es null que ejecute la funcion allFlights();
    console.log('¡Bienvenido/da a Skylab Airlines ' + askName + "!");
    allFlights();
   }else if(askName === ""){ // Si el input esta vacio que nos vuelva a preguntar el nombre
        askUsername();
   }else{
       console.log("¡Hasta la próxima!"); // Sino que nos saque de la aplicación, en este caso pulsando cancel
   }
}
askUsername();

// Función que nos muestra los vuelos por pantalla y el resto de información
function allFlights(){

    // Mostramos todos los vuelos recordiendo cada elemento del array
    console.log("");
    console.log('Esto son los vuelos disponibles:');

    for(let flight of flights){
        console.log(JSON.stringify(flight));
    }

    // Obtenemos el coste medio de los vuelos con array.prototype.reduce()
    // Inicializamos a 0 la suma y luego dividimos por 11 que es el total de vuelos que tenemos
    const averageCost = flights.reduce((accumulator, currentValue) => {

        return accumulator + currentValue.cost / flights.length;

    }, 0);

    console.log("");
    console.log('El coste medio de los vuelos es: ' + averageCost.toFixed(3) + "€");


    // Recorremos los vuelos y si el boleano scale es true, que muestre la información del vuelo
    console.log("");
    console.log('Esto son los vuelos con escala:');

    for(let flight of flights){
        if(flight.scale === true){
            console.log(JSON.stringify(flight));
        }
    }

    // Mostramos los 5 últimos vuelos, empezamos desde la posición 6 hasta el final y finalmente mostramos su destino
    console.log("");
    console.log("Los últimos cinco vuelos son destino a: ");

    const lastFiveFlights = flights.slice(6);

    for(let lastfive of lastFiveFlights){
        console.log(lastfive.to);
    }
}