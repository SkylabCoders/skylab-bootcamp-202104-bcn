/*
 * Programa una interfaz de usuario para una aerolínea (por consola...). Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:
 *    Se preguntará por el nombre de usuario y dará la bienvenida.
 *    El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
 *    A continuación, el usuario verá el coste medio de los vuelos.
 *    También podrá ver cuántos vuelos efectúan escalas.
 *    Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
 */

let flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function airlines() {
  let userName = prompt("Please, enter your name: ");
  console.log(`Bienvenido ${userName}`);

  let averagePrice = calculateAveragePrice();
  let scaleCount = countScaleFlights();
  let lastFlights = getLastFlights();

  showFlights();
  console.log(`El precio medio de los vuelos es de: ${averagePrice}`);
  console.log(`El numero de vuelos que hacen escala es de: ${scaleCount}`);
  showLastFlightsDestiny(lastFlights);
}

function showFlights() {
  for (const flight of flights) {
    console.log(`El vuelo con origen: ${flight.from}, y destino: ${
      flight.to
    } tiene un coste de ${flight.cost} y 
    ${flight.scale ? "realiza escalas" : "no realiza ninguna escala"}.`);
  }
}

function calculateAveragePrice() {
  let price = 0;
  for (const flight of flights) {
    price += flight.cost;
  }

  return (price / flights.length).toFixed(2);
}

function countScaleFlights() {
  let scaleCount = 0;
  for (const flight of flights) {
    if (flight.scale) {
      scaleCount++;
    }
  }

  return scaleCount;
}

function getLastFlights() {
  return flights.slice(-5);
}

function showLastFlightsDestiny(lastFlights) {
  console.log("Los ultimos destinos del dia son: ");

  for (const flight of lastFlights) {
    console.log(`El vuelo numero ${flight.id} con destino ${flight.to}`);
  }
}
