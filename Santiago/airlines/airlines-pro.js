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
function askUsername() {

    const askName = prompt('¿Cómo te llamas?');

    if (askName !== "" && askName !== null) { // Si el input no está vacio ni es null que ejecute la funcion allFlights();
        console.log('¡Bienvenido/da a Skylab Airlines ' + askName + "!");
        allFlights();
        role();
    } else if (askName === "") { // Si el input esta vacio que nos vuelva a preguntar el nombre
        askUsername();
    } else {
        console.log("¡Hasta la próxima!"); // Sino que nos saque de la aplicación, en este caso pulsando cancel
    }
}
askUsername();

// Función que nos muestra los vuelos por pantalla y el resto de información
function allFlights() {

    // Mostramos todos los vuelos recorriendo cada elemento del array
    console.log("");
    console.log('Esto son los vuelos disponibles:');

    for (let i = 0; i < flights.length; i++) {
        console.log(JSON.stringify(flights[i]));
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

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {

            console.log(JSON.stringify(flights[i]));
        }
    }


    // Mostramos los 5 últimos vuelos, empezamos desde la posición 6 hasta el final y finalmente mostramos su destino
    console.log("");
    console.log("Los últimos cinco vuelos son destino a: ");

    const lastFiveFlights = flights.slice(6);

    for (let i = 0; i < lastFiveFlights.length; i++) {
        console.log(lastFiveFlights[i].to);
    }
}


// Función que determi el rol de la persona
function role() {

    const typeOfRole = prompt("Eres Admin o Usuario?");

    if (typeOfRole !== "" && typeOfRole !== null) {
        // Si es administador se pueden añadir vuelos o eliminar algun vuelo
        if (typeOfRole === "Admin" || typeOfRole === "admin") {

            let action = prompt("¿Deseas AÑADIR o ELIMINAR un vuelo?");

            if (action === "añadir") {
                const newFlight = prompt('Introduce la información del vuelo: -' + " Ejemplo: 11,Dubai,Australia,1350,true"); // 11,Dubai,Australia,1350,true

                // Si newFlight es true entonces añadimos toda la información del vuelo en nuestro objecto flights
                if (newFlight) {

                    const values = newFlight.split(",");
                    flights.push({
                        id: parseInt(values[0]),
                        to: values[1],
                        from: values[2],
                        cost: parseInt(values[3]),
                        scale: values[4] === "true"
                    });
                    console.log("");
                    console.log("Has añadido:");
                    console.log(flights);
                    addFlights(); // Llamamos a la función addFlights para que el admin tenga la opción de crear más vuelos
                } else {
                    console.log("");
                    console.log("No has añadido ningún vuelo");
                }
            } else if (action === "eliminar") {
                deleteFlights(); // LLamamos a la función para poder eliminar vuelos mediante su id
            } else {
                console.log("");
                console.log("No has elegido ninguna opción, hasta pronto");
            }

        } else if (typeOfRole === "Usuario" || typeOfRole === "usuario") {

            // Si la persona no es admin, se ejecutará el siguente código:
            const searchPrices = prompt('Introduce el precio:')

            if (searchPrices !== "" && searchPrices !== null) {

                if (!isNaN(searchPrices)) {

                    const priceRange = prompt("¿Desea vuelos IGUALES, MENORES o MAYORES, al precio introducido?");

                    if (priceRange === "iguales") {
                        // Mostramos los vuelos que son iguales al precio que el usuario ha introducido en el prompt
                        console.log("");
                        console.log("Los vuelos con los precios igual a " + searchPrices + " son: ");

                        for (let i = 0; i < flights.length; i++) {
                            if (searchPrices == flights[i].cost) {
                                console.log(JSON.stringify(flights[i]));
                            }
                        }
                    } else if (priceRange === "menores") {
                        // Mostramos los vuelos que son más bajos al precio que el usuario ha introducido en el prompt
                        console.log("");
                        console.log("Los vuelos con los precios más bajos a " + searchPrices + " son: ");

                        for (let i = 0; i < flights.length; i++) {
                            if (searchPrices > flights[i].cost) {
                                console.log(JSON.stringify(flights[i]));
                            }
                        }
                    } else if (priceRange === "mayores") {

                        // Mostramos los vuelos que son más altos al precio que el usuario ha introducido en el prompt
                        console.log("");
                        console.log("Los vuelos con los precios más altos a " + searchPrices + " son: ");

                        for (let i = 0; i < flights.length; i++) {
                            if (searchPrices < flights[i].cost) {
                                console.log(JSON.stringify(flights[i]));
                            }
                        }
                    } else {
                        console.log("");
                        console.log("No has introducido si querias el precio, igual, menor o mayor!");

                        console.log("");
                        console.log("Te dejo con el listado de vuelos, de nuevo, por si quieres echar un vistazo:");

                        for (let i = 0; i < flights.length; i++) {
                            console.log(JSON.stringify(flights[i]));
                        }
                    }
                } else {
                    console.log("");
                    console.log("Solo se aceptan números");
                }
            } else {
                console.log("");
                console.log("No has introducido ningún precio");
            }

            // Seguidamente despúes de mostrar todos los vuelos y su información, el usuario introducirá el id del vuelo que quiere comprar
            const chosenFlight = prompt('Introduce el id del vuelo que desea comprar:');

            if (chosenFlight !== "" && chosenFlight !== null) {
                if (!isNaN(chosenFlight)) {
                    for (let i = 0; i < flights.length; i++) {
                        if (chosenFlight == flights[i].id) {
                            console.log("");
                            console.log("¡Gracias por su compra, el id de su vuelo es " + JSON.stringify(flights[i].id) + " con origen en " +
                                JSON.stringify(flights[i].from) + " destino " + JSON.stringify(flights[i].to) + ", vuelva pronto!");
                        }
                    }
                } else {
                    console.log("");
                    console.log("Solo se acceptan números");
                }
            } else {
                console.log("");
                console.log("No ha relizado ninguna compra, vuelva pronto");
            }
        } else {
            alert("No has introducido el tipo de usuario");
        }
    } else if (typeOfRole === "") {
        role();

    } else {
        console.log("");
        console.log("Has salido de la aplicación, hasta la próxima");
    }
}


// Función que permite que el admin pueda seguir añadiendo más vuelos
function addFlights() {

    const addMore = confirm("¿Quiere añadir más vuelos?");

    if (addMore) { // Si addMore es true, podremos añadir más vuelos

        if (flights.length <= 15) { // No podemos añadir más de 15 vuelos
            const newFlight = prompt('Introduce datos del nuevo vuelo:');

            if (newFlight !== "" && newFlight !== null) {

                const values = newFlight.split(",");

                flights.push({
                    id: parseInt(values[0]),
                    to: values[1],
                    from: values[2],
                    cost: parseInt(values[3]),
                    scale: values[4] === "true"
                });

                addFlights(); // Devolvemos la misma función para poder seguir preguntando si quiere añadir más vuelos
            } else {
                deleteFlights(); // Llamamos a la función deleteFlights() si le damos a cancelar
            }
        } else {
            alert("No se pueden añadir más vuelos");
            deleteFlights();
        }
    } else { // Si no queremos añadir más vuelos, nos saldrá la opción de eliminar vuelos
        // deleteFlights();
        console.log("No has añaddido más vuelos, hasta pronto");
    }
}

// Función para poder eliminar vuelos por si id
function deleteFlights() {

    const deleteFlight = prompt("Introduce el id del vuelo que quieres eliminar:");

    if (deleteFlight !== "" && deleteFlight !== null) {
        // Recorremos el objecto flights y si el id introducido por prompt coincide con algun id que ya este en el objecto, lo eliminamos
        for (let i = 0; i < flights.length; i++) {
            if (deleteFlight == flights[i].id) {

                let index = flights.map(x => {
                    return x.id
                }).indexOf(flights[i].id);

                flights.splice(index, 1);

                console.log("");
                console.log(flights);
                console.log("Has eliminado el vuelo con id " + deleteFlight);
                deleteMoreFlights(); // Llamamos a la función para poder seguir eliminando vuelos
            }
        }
    } else {
        console.log('');
        console.log('No has eliminado ningún vuelo, adiós, hasta pronto');
    }
}

// Función para poder seguir eliminando vuelos
function deleteMoreFlights() {
    const deleteMore = confirm("¿Quieres eliminar más vuelos?");

    if (deleteMore) {
        deleteFlights(); // Llamamos a la función anterior para hacer el procesos de eliminar un vuelo
    } else {
        console.log('');
        console.log('Adiós, hasta pronto');
    }

}