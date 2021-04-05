//PROYECTO TEMA 2. Skylab Airlines!

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
    
function airlines() {
    
    function newUser() {    // Prompt para bienvenida al usuario
      var person = prompt("Como te llamas?");
      if (person != null) {
        console.log("Hola " + person + "! Preparado para volar con Skylab Airlines?");
      }
    }
    
    function allFlights() {  // Lista de todos los vuelos
      console.log("Los vuelos disponibles son:");
    
      function scaleValue(value) {  // Para indicar al usuario si los vuelos tienen escala
           
        if (value === true) {
          return "realiza alguna escala";
        } else {
          return "no realiza ninguna escala";
        }
      }
    
      for (let i = 0; i < flights.length; i++) {
            
        console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${scaleValue(flights[i].scale)}.`)
      }
    }
    
    function averageCost() {  // Cálculo del precio medio
      let total = 0;
      for (let i =0; i < flights.length; i++) {
                total = total + flights[i].cost;
      }
      total = total / flights.length;
      total = total.toFixed(2);
      return total;
    }
    
    function scaleList() {  // Lista de vuelos con escala
      console.log("Los vuelos que efectuan alguna escala son:");
    
      for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
          console.log(`${flights[i].id}: A ${flights[i].to} desde ${flights[i].from}. Precio del billete: ${flights[i].cost}€.`)
        }
      }
    }
    
    function lastFlights() {  // Lista de los 5 últimos vuelos
      console.log("El destino de los 5 últimos vuelos de hoy son:")
    
      for (let i = 6; i < flights.length; i++) {
        console.log(`${flights[i].id}: ${flights[i].to}.`);
      }
    }
    
    
    newUser();   // Invocación de las diferentes funciones
    console.log(" ");  // Espacio para mejorar la lectura (mostrar cada función por separado) en la consola
    allFlights();
    console.log(" ");
    console.log(`El precio medio de los vuelos es de ${averageCost()}€.`);
    console.log(" ");
    scaleList();
    console.log(" ");
    lastFlights();
}
    
airlines();

