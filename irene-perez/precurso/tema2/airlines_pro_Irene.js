//AIRLINES-PRO
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

/*AQUÍ DEBERÍA ESTAR EL CÓDIGO DEL AIRLINES NORMAL PERO LO HE OBVIADO PORQUE SI NO QUEDARÍA SÚPER LARGO, 
ASÍ QUE HE DECIDIDO ÚNICAMENTE DEJAR LO QUE SE AÑADE EN EL AIRLINES-PRO*/

//Función bienvenida
function wellcome(){
    let userName = prompt("¡Hola!, ¿Cómo te llamas?");
  if (!userName) {
    return console.log("Le ha dado a cancelar. ¡Hasta otra!");
    } else if (
    userName === null ||
    userName === "" ||
    isNaN(userName) === false
  ) {
    console.log("No le he entendido, ¡inténtelo de nuevo!");
    askUserName();
    } else {
    console.log(`¡¡Bienvenido o bienvenida a Skylad Airlines ${userName}!! :)`);
    console.log('Los vuelos disponibles a día de hoy son los siguientes:');
    //Se imprime flights usando el forEach para que imprima elemento por elemento
    flights.forEach(function(flight) {
        console.log(textFormatter(flight));
    });
    return role();
    }
}

//Función que pregunta el rol del usuario
function role() {
    let typeOfRole = prompt('Llegados a este punto debo preguntarle si eres Admin o User');
    //Si el usuario le da a cancelar
    if (!typeOfRole) {
        return console.log('Le ha dado a cancelar. ¡Hasta otra!');
        //Si es Admin puede añadir vuelos (hasta 15) y eliminarlos
    } else if (typeOfRole.toLowerCase() === 'admin') {
        //Se invoca directamente a las funciones de añadir vuelos y borrar vuelos
        addFlight();
        deleteFlight();
        //Si es user buscará por precio
    } else if (typeOfRole.toLowerCase() === 'user') {
        //Se invoca a la función del usuario
        userFunction();
    } else {
        console.log('Creo que no le he entendido, ¡vuelva a intentarlo!');
        role();
    }
}
//Hacemos una función que realice las operaciones de evaluar y comparar precios para que se pueda invocar cada vez que sea necesario. Esto ayudará a ahorrar espacio en el código.
//Se meten en la función los cuatro parámetros necesarios 
function priceEvaluation(array, evaluationValue, operator, property) {
    //Las tres comparaciones que, en este caso, son necesarias para el código
    switch (operator) {
        case "<":
            return array.filter(function (element) {
                return element[property] < evaluationValue;
            });
        case ">":
            return array.filter(function (element) {
                return element[property] > evaluationValue;
            });
        case "=":
            return array.filter(function (element) {
                return element[property] === evaluationValue;
            });
    }
}
//Función que define el formato del texto a imprimir en consola para que sea amigable para el usuario
function textFormatter(flight) {
    return `El vuelo con origen: ${flight.from}, y destino: ${flight.to}, tiene un precio total de ${flight.cost}€. Además, ${(flight.scale) ? " sí realiza escalas" : "no realiza ninguna escala"}.`;
}
//Función del usuario
function userFunction() {
    let searchPrice = prompt('Introduzca el precio del vuelo que desea buscar:');
    //Para que las equivalencias tengan sentido, para que la string no valga más que un número y se comparen números con números
    searchPrice = parseFloat(searchPrice);
    //Si lo que introduce no es un número
    if (!searchPrice) {
        console.log('Le has dado a cancelar, ¡hasta otra!');
    } else if (isNaN(searchPrice)) {
        console.log('No has introducido ningún número.');
        return userFunction();
    } else if (typeof searchPrice === 'number') {
        let samePrice = priceEvaluation(flights, searchPrice, "=", "cost").map(function (flight) { return textFormatter(flight) });
        //Usamos el método ternario por si el precio introducido no coincide con ningún otro del array flights, por eso se pone una condición y si esta se cumple o no
        samePrice.length ?
            console.log(`Los vuelos con los precios igual a ${searchPrice} son los siguientes:\n${samePrice.join('\n')}`)
            //Se usa el método JSON.stringify para convertir el array en una string y así imrpimirla como tal
            :
            console.log('No hay vuelos con precio igual al introducido.');

        //Se imprimen los vuelos con los precios más altos que el introducido
        let higherPrice = priceEvaluation(flights, searchPrice, ">", "cost").map(function (flight) { return textFormatter(flight) });
        higherPrice.length ?
            console.log(`Los vuelos con los precios más altos que ${searchPrice} son:\n${higherPrice.join('\n')}`)
            :
            console.log('No hay vuelos con precio más alto al introducido.')

        //Se imprimen los vuelos con los precios más bajos que el introducido
        let lowerPrice = priceEvaluation(flights, searchPrice, "<", "cost").map(function (flight) { return textFormatter(flight) });
        lowerPrice.length ?
            console.log(`Los vuelos con los precios más bajos que ${searchPrice} son:\n${lowerPrice.join('\n')}`)
            :
            console.log('No hay vuelos con precio más bajo al introducido.');

        //La id del vuelo que el usuario quiere comprar
        let buyFlight = parseInt(prompt('Introduzca el id del vuelo que quiere comprar por favor.'));
        //Si se da a cancelar 
        if (isNaN(buyFlight)) {
            console.log('Le has dado a cancelar.');
        } else {
            let idUserFlight = textFormatter(priceEvaluation(flights, buyFlight, "=", "id")[0]);
            buyFlight ?
                console.log(('¡Gracias por su compra!\nLa información de su vuelo es:\n') + idUserFlight)
                :
                console.log('No existe ningún vuelo con el id introducido.')
        }
    } else {
        console.log('No has introducido el tipo de usuario, ¡vuelva a intentarlo!');
        role();
    }
}

//Función para añadir vuelos siendo admin
function addFlight() {
    //Se usa confirm en vez de prompt para que le aparezca al usuario una ventana con Aceptar (devuelve true) o Cancelar (devuelve false)
    let addQuestion = confirm('¿Desea añadir algún vuelo? Recuerda que no podrá añadir más de quince.');
    //Si devuelve true (Aceptar)
    if (!addQuestion) {
        return console.log('Le ha dado a Cancelar, ¡hasta otra!');
    } if (flights.length <= 15) {
        //Variables donde el Admin introducirá los datos del nuevo vuelo
        let newId = flights.length;
        let newTo = prompt(`Introduzca el destino del nuevo vuelo.`);
        let newFrom = prompt(`Introduzca el origen del nuevo vuelo.`);
        let newCost = parseInt(prompt('Introduzca el costo del nuevo vuelo.'));
        if (isNaN(newCost)) {
            newCost = parseInt(prompt('Introduzca el costo del nuevo vuelo.'))
        }
        let newScale = prompt('Indica si es nuevo vuelo tiene escala o no', 'S/N');
        newScale.toLocaleLowerCase() === 's' ? newScale = true : newScale.toLocaleLowerCase() === 'N' ? newScale = false : newScale = 'other';
        //Se añade cada elemento en el objeto newFlight y se añadirá al array flights
        let newFlight = { id: newId, to: newTo, from: newFrom, cost: newCost, scale: newScale };
        flights.push(newFlight);
        //Se puede hacer un console.log(flights) para comprobar que se ha añadido correctamente
        console.log('Mostrando los datos del nuevo vuelo introducido:');
        console.log(textFormatter(newFlight));
    } else if (flights.length > 15) {
    console.log('No se pueden añadir más vuelos, el número máximo es de quince.');
    //Como a lo mejor quiere añadir otro vuelo invocamos a deleteflight por si quiere borrar algún vuelo y añadir otro
    askAdmin();
    } 
}

//Función para eliminar vuelos siendo admin
function deleteFlight() {
    let deleteQuestion = confirm('¿Desea eliminar algún vuelo?');
    //Si le da a cancelar
    if (!deleteQuestion) {
        console.log('Le ha dado a cancelar, ¡hasta otra!');
    } else if (deleteQuestion) {
        let deleteId = parseInt(prompt('Introduzca el id del vuelo que desee eliminar.'));
        //Si le da a cancelar
        if (!deleteId) {
            console.log('Le ha dado a cancela, ¡hasta otra!')
            //Si el id no es un número
        } else if (isNaN(deleteId)) {
            deleteId = parseInt(prompt('Asegúrese de que ha añadido el id del vuelo a eliminar correctamente, vuelva a intentarlo, por favor.'));
        }
        //Para validar si el id existe en el array flights se usa el .some para buscar un elemento en el id igual al número introducido en deleteId, devolviendo un valor false o true
        let validId = flights.some(element => element.id === deleteId);
        //Si no existe
        if (!validId) {
            deleteId = parseInt(prompt('Por favor, introduzca un id de vuelo válido que desee eliminar.'));
            //Si existe
        } else if (validId) {
            //Se hace como con el .some, se busca en el array flights el elemento que sea igual a deleteId
            let idToRemove = flights.findIndex(element => element.id === deleteId);
            //Con el .splice elimina el id introducido (se pone 1 porque sólo se quiere eliminar un elemento)
            flights.splice(idToRemove, 1);
            return;
        }
    }
}

//Función para llamar a otras funciones sin que de error (es necesario para que en la función de añadir vuelos, cuando ya han añadido 15 y si el admin quiere eliminar un vuelo se invocamos esta función en vez de deleteFlight() que daría error)
function askAdmin(){
    let question = prompt('¿Quiere eliminar un vuelo para añadir otro?');
    if (!question){
        return console.log('Está bien, ¡hasta otra!');
    } else {
        return deleteFlight();
    }
}

//Invocamos la función de bienvenida
wellcome();