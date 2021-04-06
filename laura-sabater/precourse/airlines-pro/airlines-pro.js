let todayFlights = [
  
  { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
  
  { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
  
  { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
  
  { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
  
  { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
  
  { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
  
  { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
  
  { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
  
  { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
  
  { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true }
  
];

function descriptionFlight(flight) {
  if (flight.scale === false) {
    console.log("El vuelo " + flight.id + " con origen: " + flight.from + " y destino: " + flight.to + ", tiene un coste de " + flight.cost + " euros y no realiza ninguna escala.");
  } else {
    console.log("El vuelo " + flight.id + " con origen: " + flight.from + " y destino: " + flight.to + ", tiene un coste de " + flight.cost + " euros y realiza escala.");
  }
}

function showFlights(flights) {
  for (let flight of flights) {
    descriptionFlight(flight);
  }
  console.log("\n");
}

function averageCost(flights) {
  let totalCost = 0;
  for (let flight of flights) {
    totalCost += flight.cost;
  }
  let resultAverageCost = Math.round(totalCost / flights.length);
  console.log("El precio medio de los vuelos es de " + resultAverageCost + " euros.");
  console.log("\n");
}

function scaleFlights(flights) {
  console.log("Los vuelos que realizan escala son: ")
  for (let flight of flights) {
    if (flight.scale === true) {
      descriptionFlight(flight);
    }
  }
  console.log("\n");
}

function lastFlights(flights) {
  console.log("Los destinos de los ultimos vuelos del dia son: ");
  for (let flight of flights.slice(-5)) {
    console.log(flight.to);
  }
  console.log("\n");
} 

function role() {
  let yourRole = "";
  while (yourRole !== null) {
    yourRole = prompt("Si eres administrador/a introduce 'admin', si eres usuario introduce 'user'");
    
    if (yourRole === null) {
      alert("Gracias por su visita, vuelva pronto!");
      return;
      
    } else if (yourRole === "admin") {
      adminActions(todayFlights);
      return;
      
    } else if (yourRole === "user") {
      userActions(todayFlights);
      return;

    } else {
      alert("Respuesta incorrecta");
    }
  }
}

function adminActions(flights) {
  let action = "";
  while (action !== null) {
    action = prompt("Si quieres crear vuelos introduce 'crear', si quieres eliminar vuelos introduce 'eliminar'");
    if (action === null) {
      break;

    } else if (action === "crear") {
      addFlight(flights);

    } else if (action === "eliminar") {
      delFlight(flights);

    } else {
      alert("Respuesta incorrecta");
    }
  }
  if (flights.length === 0) {
    console.log("No hay vuelos para el dia de hoy.");

  } else {
    console.log("Los vuelos actualizados para el dia de hoy son:");
    showFlights(flights);
  }
  alert("Hasta pronto!");
}

function addFlight(flights) {
  if (flights.length === 15) {
    alert("No se pueden crear mas vuelos");
    return;

  } else {
    let newFlight = {};
    
    newFlight.id = flights.length;
    
    let destination = "";
    while (destination !== null) {
      destination = prompt("Introduce el destino del vuelo");
      if (destination === null) {
        alert("Cancelar crear vuelo");
        return;

      } else if (destination === "") {
        alert("Respuesta incorrecta");

      } else if (!isNaN(destination)) {
        alert("Respuesta incorrecta");  

      } else {
        newFlight.to = destination;
        break;
      }
    }
    
    let origin = "";
    while (origin !== null) {
      origin = prompt("Introduce el origen del vuelo");
      if (origin === null) {
        alert("Cancelar crear vuelo");
        return;

      } else if (origin === "") {
        alert("Respuesta incorrecta");

      } else if (!isNaN(origin)) {
        alert("Respuesta incorrecta"); 

      } else {
        newFlight.from = origin;
        break;
      }
    }

    let cost = "";
    while (cost !== null) {
      cost = prompt("Introduce el coste del vuelo");
      if (cost === null) {
        alert("Cancelar crear vuelo");
        return;

      } else if (cost === "") {
        alert("Respuesta incorrecta");

      } else if (isNaN(cost)) {
        alert("Respuesta incorrecta");

      } else {
        cost = Number(cost);
        newFlight.cost = cost;
        break;
      }
    }

    let scale = "";
    while (scale !== null) {
      scale = prompt("Si tiene escalas introduce 'si', si no tiene escalas introduce 'no'");
      if (scale === null) {
        alert("Cancelar crear vuelo");
        return;

      } else if (scale === "si") {
        newFlight.scale = true;
        break;

      } else if (scale === "no") {
        newFlight.scale = false;
        break;

      } else {
        alert("Respuesta incorrecta");
      }
    }

    flights.push(newFlight);
  
    console.log("Se ha creado el siguiente vuelo:");
    descriptionFlight(newFlight);
    console.log("\n");
  
    newFlight = {};
  }
}

function checkFlightID(flights, value) {
  for (let flight of flights) {
    if (flight.id === value) {
      return true;
    }
  }
}

function indexFlight(array, key, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
}

function delFlight(flights) {
  if (flights.length === 0) {
    alert("No se pueden eliminar mas vuelos");
    return; 

  } else {
    let flightID = "";
    while (flightID !== null) {
      flightID = prompt("Introduce el ID del vuelo")
      if (flightID === null) {
        alert("Cancel eliminar vuelo")
        break;

      } else if (flightID === "") {
        alert("Respuesta incorrecta");

      } else if (isNaN(flightID)) {
        alert("Respuesta incorrecta");
        
      } else {
        flightID = Number(flightID);
        
        if (checkFlightID(flights, flightID) === true) {
          let indexFlightID = indexFlight(flights, "id", flightID);
          let deletedFlights = flights.splice(indexFlightID, 1);
          console.log("Se ha eliminado el siguiente vuelo:");
          descriptionFlight(deletedFlights[0]);
          console.log("\n");
          break;

        } else {
          alert("Este ID no existe");
          break;
        }
      }
    } 
  }
}

function userActions(flights) {
  let action = "";
  while (action !== null) {
    action = prompt("Si quiere realizar una busqueda introduzca 'buscar', si quiere comprar un vuelo introduzca 'comprar'");
    if (action === null) {
      alert("Gracias por su visita, vuelva pronto!");
      return;

    } else if (action === "") {
      alert ("Respuesta incorrecta");

    } else if (action === "buscar") {
      searchFlights(flights);
      
    } else if (action === "comprar") {
      buyFlight(flights);
      
    } else {
      alert("Respuesta incorrecta");
    } 
  }
}

function searchFlights(flights) {
  let budget = "";
  while (budget !== null) {
    budget = prompt("Introduzca su presupuesto");
    if (budget === null) {
      alert("Gracias por su visita, vuelva pronto!");
      return;

    } else if (budget === "") {
      alert("Respuesta incorrecta");

    } else if (isNaN(budget)) {
      alert("Respuesta incorrecta");

    } else {
      budget = Number(budget);
      break;
    }
  }

  let equalBudgetFlights = flights.filter(flight => flight.cost === budget)
  if (equalBudgetFlights.length === 0) {
    console.log("No hay vuelos con un precio igual a su presupuesto.");
    console.log("\n");
  } else {
    console.log("Los vuelos con un precio igual a su presupuesto son:")
    showFlights(equalBudgetFlights);
  }

  let overBudgetFlights = flights.filter(flight => flight.cost > budget)
  if (overBudgetFlights.length === 0) {
    console.log("No hay vuelos con un precio superior a su presupuesto.");
    console.log("\n");
  } else {
    console.log("Los vuelos con un precio superior a su presupuesto son:")
    showFlights(overBudgetFlights);
  }

  let underBudgetFlights = flights.filter(flight => flight.cost < budget)
  if (underBudgetFlights.length === 0) {
    console.log("No hay vuelos con un precio menor a su presupuesto.");
    console.log("\n");
  } else {
    console.log("Los vuelos con un precio menor a su presupuesto son:")
    showFlights(underBudgetFlights);
  }
}

function buyFlight(flights) {
  let flightID = "";
  while (flightID !== null) {
    flightID = prompt("Introduzca el ID del vuelo que quiere comprar");
    if (flightID === null) {
      alert("Cancelar comprar vuelo");
      return;

    } else if (flightID === "") {
      alert("Respuesta incorrecta");

    } else if (isNaN(flightID)) {
      alert("Respuesta incorrecta");

    } else {
      flightID = Number(flightID);

      if (checkFlightID(flights, flightID) === true) {
        let boughtFlights = flights.filter(flight => flight.id === flightID);
       
        console.log("Ha comprado el siguiente vuelo:");
        descriptionFlight(boughtFlights[0]);
        console.log("\n");
        break;

      } else {
        alert("Este ID no existe");
        break;
      }
    }
  }
}

function welcome() {
  let yourName = "";
  while (yourName !== null) {
    yourName = prompt("Bienvenido/a a Skylab Airlines! Como se llama?");
    if (yourName === null) {
      alert("Gracias por su visita, vuelva pronto!");
      return false;

    } else if (yourName === "") {
      alert("Por favor, introduzca su nombre");
    
    } else if (!isNaN(yourName)) {
      alert("Respuesta incorrecta");
    
    } else {
      break;
    }
  }
  
  console.log("Hola " + yourName + ", los vuelos para el dia de hoy son: ");
  showFlights(todayFlights);
  averageCost(todayFlights);
  scaleFlights(todayFlights);
  lastFlights(todayFlights);  
  return true;
}

let cont = welcome();
if (cont) {
  role();
}