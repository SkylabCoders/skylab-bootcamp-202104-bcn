//PROYECTO TEMA 2. Skylab Airlines PRO!



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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

airlinesPro();








function airlinesPro() {            //  Función raiz del ejercicio

    airlines();                     

    let user = assignUser();        

    if (user === "admin") {   
        
        addFlights();              
        
        deleteFlights();

    } else if (user === "usuario") {

        compareFlights();           

    }
}

function airlines() {   // Funciones del primer ejercicio de Airlines
    createUser();
    console.log(" ");  // Espacio para mejorar la lectura (mostrar cada función por separado) en la consola
    showAllFlights();
    console.log(" ");
    showAverageCost();
    console.log(" ");
    showScaleList();
    console.log(" ");
    showLastFlights();
    console.log(" ");
}

function createUser() {    // Preguntar nombre al usuario
    let canWrite = false;

    do {
        let user = prompt("¿Como te llamas?");

        user = transformbyTrim(user);
        let userWithoutSimbols = deleteSimbolsOnString(user);  // Permite (user) como "Diego del Monte" o "Roockie84" o "4n4st4s14"

        if (user !== null && user !== "" && userWithoutSimbols === user) {
            console.log("¡Hola " + user + "! ¿Quieres volar con Skylab Airlines?");
            alert("¡Hola " + user + "! ¿Quieres volar con Skylab Airlines?");
            return user;
        } else if (user === null || user === "") {
            alert("Debes introducir tu nombre para continuar.");
        } else if (userWithoutSimbols !== user) {
            alert('No puedes usar comas, guiones ni otros símbolos para escribir tu nombre.\nSolo puedes usar letras y números.');
        }
    } while (canWrite === false);
}

function transformbyTrim(value) {    // Reducir a espacios respetando el valor "null"

    if (value !== null) {
        value = value.trim();
    }
    return value;
}

function transformToLowerCase(value) {   // Reducir a minusculas respetando el valor "null"

    if (value !== null) {
        value = value.toLowerCase();
    }
    return value;
}

function deleteSimbolsOnString(string) {   // Para comprobar si promt SOLO tiene letras y números, respetando el valor "null"
    let out = '';

    let filter = 'abcçdefghijklmnñopqrstuvwxyzABCÇDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890àáèéíòóúÀÁÈÉÍÒÓÚ ';

    if (string !== null) {
        for (let i = 0; i < string.length; i++) {
            if (filter.indexOf(string.charAt(i)) != -1) {
                out += string.charAt(i);
            }
        }
    }
    return out;
}

function showAllFlights() {  //   Para indicar al usuario la lista de todos los vuelos por consola
    console.log("Los vuelos disponibles son:");
    for (let i = 0; i < flights.length; i++) {

        console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${transformScaleValueToString(flights[i].scale)}.`);
    }
}

function transformScaleValueToString(value) {  // Para indicar al usuario si los vuelos tienen escala dentro de la función airlines
    if (value === true) {
        return "realiza alguna escala";
    } else if (value === false) {
        return "no realiza ninguna escala";
    }
}

function showAverageCost() {  //  Para indicar al usuario el precio medio de los vuelos por consola
    let total = 0;

    for (let i = 0; i < flights.length; i++) {

        total = total + flights[i].cost;
    }
    total = total / flights.length;
    total = total.toFixed(2);

    return console.log(`El precio medio de los vuelos es de ${total}€.`);
}

function showScaleList() {  // Para indicar al usuario la lista de vuelos con escala por consola
    console.log("Los vuelos que efectuan alguna escala son:");
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {

            console.log(`${flights[i].id}: A ${flights[i].to} desde ${flights[i].from}. Precio del billete: ${flights[i].cost}€.`);
        }
    }
}

function showLastFlights() {  //   Para indicar al usuario la lista de los 5 últimos vuelos por consola
    console.log("El destino de los 5 últimos vuelos de hoy son:");

    for (let i = flights.length - 5; i < flights.length; i++) {

        console.log(`${flights[i].id}: ${flights[i].to}.`);
    }
}





function assignUser() {  //  Preguntar ADMIN o USUARIO
    let canWrite = false;

    do {
        let user = prompt("Indica si eres Admin o Usuario: (Admin/Usuario)");
        
        user = transformbyTrim(user);   
        user = transformToLowerCase(user); 

        if (user !== null && user !== "") {               
            
            if (user === "admin" || user === "usuario") {
                return user;
            } else {
                alert("Indica si eres Admin o Usuario para continuar.");
            }
        } else if (user === null || user === "") {
            alert("Indica si eres Admin o Usuario para continuar.");
        }
    } while (canWrite === false);
}

function addFlights() {    //  Función raiz para añadir vuelos

    alert("Hola ADMIN!");
    
    let confirmAddFligths = confirm ("ADMIN, ¿quieres crear mas vuelos?");

    if (confirmAddFligths === true) {
        let canWrite = true;
        do {

            addFlightsOnList();

            if (flights.length === 15) {
                alert(`La lista de vuelos está completa. No puedes crear mas vuelos.`);
                canWrite = false;
            } else {
                let askToContinue = confirm("¿Continuar creando vuelos?");
                canWrite = askToContinue;
            }
        } while (canWrite === true);
    }
}

function addFlightsOnList() {   // Crear nuevos vuelos

    if (flights.length < 15) {

        let totalFlights = flights.length;  // Valor de referencia para crear id de nuevos vuelos
        let availableFlights = 15 - flights.length;  // Valor para informar al admin de cuantos vuelos se pueden crear hasta llegar al tope de 15

        alert(`La lista de vuelos tiene un máximo de 15 vuelos.\nActualmente consta de ${totalFlights} vuelos.\n\nPuedes crear ${availableFlights} vuelos mas.`);

        let newToValue = prompt("Introduce destino del nuevo vuelo:");
        let newFromValue = prompt("Introduce origen del nuevo vuelo:");
        let newCostValue = prompt("Introduce precio del nuevo vuelo:");
        let newScaleValue = prompt("Indica si el nuevo vuelo realiza alguna escala: (Si/No)");

        newToValue = transformbyTrim(newToValue);   // Eliminar posibles espacios
        newFromValue = transformbyTrim(newFromValue);
        newCostValue = transformbyTrim(newCostValue);
        newScaleValue = transformbyTrim(newScaleValue);

        let canWrite = checkNewFlightValue(newToValue, newFromValue, newCostValue, newScaleValue);  // Check de los valores de los nuevos vuelos 

        newScaleValue = transformStringToBoolean(newScaleValue);

        if (canWrite !== true) {
            flights.push(   // Introducir en la lista de vuelos el nuevo vuelo creado por el admin
                {
                    id: totalFlights,
                    to: newToValue,
                    from: newFromValue,
                    cost: newCostValue,
                    scale: newScaleValue
                }
            );
            alert("Vuelo creado correctamente.");
        }
    }
}

function checkNewFlightValue(newTo, newFrom, newCost, newScale) {  // Check de los valores del NUEVO vuelo procedentes del prompt

    let newToWithoutSimbols = deleteSimbolsAndNumbersOnString(newTo);   // Asegurar valor de "destino" sin números ni simbolos
    let newFromWithoutSimbols = deleteSimbolsAndNumbersOnString(newFrom);   // Asegurar valor de "origen" sin números ni simbolos

    
    let filterNewCostByNumbers = convertStringtoNumbers(newCost);  // Asegurar valor de "precio" solo sea número
    let newCostLikeNumber = Number.parseFloat(newCost);  // Acortar decimales
    let newCostLikeNaN = Number.isNaN(newCostLikeNumber);  // Asegurar que el valor no sea NaN

    newScale = transformToLowerCase(newScale);
    if (newScale === "si") { newScale = true; }  // Convertir valor de "escalas" a Booleanos
    if (newScale === "no") { newScale = false; }

    let canWrite = false;

    if (newTo === null) {  // Comprobar destino
        alert('Debes indicar el destino del nuevo vuelo.');
        canWrite = true;
    } else if (newTo === "") {
        alert('El campo "destino" no puede estar vacío.');
        canWrite = true;
    } else if (newTo !== newToWithoutSimbols) {
        alert('No puedes usar símbolos ni números para rellenar el campo "origen".\nSolo puedes usar letras.');
        canWrite = true;
    }

    if (newFrom === null) {  // Comprobar origen
        alert('Debes indicar el origen del nuevo vuelo.');
        canWrite = true;
    } else if (newFrom === "") {
        alert('El campo "origen" no puede estar vacío.');
        canWrite = true;
    } else if (newFrom !== newFromWithoutSimbols) {
        alert('No puedes usar símbolos ni números para rellenar el campo "destino".\nSolo puedes usar letras.');
        canWrite = true;
    }

    if (newCost === null) {  // Comprobar precio 
        alert('Debes indicar el precio del nuevo vuelo.');
        canWrite = true;
    } else if (newCost === "") {
        alert('El campo "precio" no puede estar vacío.');
        canWrite = true;
    } else if (newCostLikeNaN === true) {
        alert(`"${newCost}" no es un precio válido.\nUtiliza solo números para definir el precio.`);
        canWrite = true;
    } else if (filterNewCostByNumbers !== newCost) {
        alert(`"${newCost}" no es un precio válido.\nUtiliza solo números para definir el precio.`);
        canWrite = true;
    }

    if (newScale === null) {  //Comprobar escala
        alert('Debes indicar si el nuevo vuelo realiza alguna escala.');
        canWrite = true;
    } else if (newScale === "") {
        alert('El campo "escala" no puede estar vacío.');
        canWrite = true;
    } else if (typeof newScale !== typeof true) {
        alert(`"${newScale}" no es un valor válido para el campo "escala".\nIntroduce Si (si existe escala) o No (si no existe escala).`);
        canWrite = true;
    }

    if (canWrite === true) {
        return true;
    }
}

function deleteSimbolsAndNumbersOnString(string) {   // Para comprobar si los valores (procedentes del prompt) SOLO tiene letras, respetando el valor "null"
    let out = '';

    let filter = 'abcçdefghijklmnñopqrstuvwxyzABCÇDEFGHIJKLMNÑOPQRSTUVWXYZàáèéíòóúÀÁÈÉÍÒÓÚ ';

    if (string !== null) {
        for (let i = 0; i < string.length; i++) {
            if (filter.indexOf(string.charAt(i)) != -1) {
                out += string.charAt(i);
            }
        }
    }
    return out;
}

function convertStringtoNumbers(string) {   // Para comprobar si los valores (procedentes del prompt) SOLO tiene letras, respetando el valor "null"
    let out = '';

    let filter = '0123456789';

    if (string !== null) {
        for (let i = 0; i < string.length; i++) {
            if (filter.indexOf(string.charAt(i)) != -1) {
                out += string.charAt(i);
            }
        }
    }
    return out;
}

function transformStringToBoolean(value) {   // Para transformar la string "newScaleValue" a booleanos

    value = transformToLowerCase(value);
    if (value === "si") { value = true; }
    if (value === "no") { value = false; }
    return value
}

function deleteFlights() {  //  Función raiz para borrar vuelos

    let confirmDelete = confirm("ADMIN, ¿quieres borrar vuelos?");

    if (confirmDelete === true) {
        let canWrite = true
        do {
            deleteFlightsFromList();

            if (flights.length === 0) {
                alert("No hay vuelos disponibles en la lista de vuelos.");
                canWrite = false;
            } else {
                let ask = confirm("¿Continuar borrando vuelos?");
                canWrite = ask;
            }
        } while (canWrite === true);
    }
    alert("Adiós ADMIN!");
}

function deleteFlightsFromList() {  //   Borrar vuelos

    if (flights.length === 0) { alert("No hay vuelos disponibles en la lista de vuelos.") }  // Límite para ejecutar la función deleteFlightsFromList

    else {  // Si aún existen vuelos para borrar

        let flightsListString = "";  // Lista de vuelos para el prompt

        for (let i = 0; i < flights.length; i++) {   //Añadir cadena de strings con los vuelos
            flightsListString += `Id: ${flights[i].id}, to: ${flights[i].to}, from: ${flights[i].from}, cost: ${flights[i].cost}, scale: ${flights[i].scale}\n`;
        }

        let deleterId = prompt("ADMIN: Introduce el Id del vuelo que quieres borrar:\n" + flightsListString);  // Mostrar lista de vuelos disponibles para seleccionar ID del vuelo a borrar

        deleterId = transformbyTrim(deleterId);
        let filterDeleterIdByNumbers = convertStringtoNumbers(deleterId);
        let deleterIdLikeNumber = Number.parseFloat(deleterId);
        let deleterIdLikeNaN = Number.isNaN(deleterIdLikeNumber);
        let availableId = checkFlightsId(deleterIdLikeNumber);

        if (deleterIdLikeNaN !== true && availableId === true && filterDeleterIdByNumbers === deleterId) {  //  Borrar vuelo por id

            for (let i = 0; i < flights.length; i++) {

                if (flights[i].id === deleterIdLikeNumber) {
                    flights.splice(i, 1);
                }
            }
            alert("Vuelo borrado correctamente.");
        } else if (deleterId === "" || deleterId === null) {
            alert('Rellena el campo "Id" para borrar vuelos.');
        }
        else {
            alert(`No existen vuelos con el Id "${deleterId}".\nPara borrar vuelos debes seleccionar un "Id" que exista.`);
        }
    }
}

function checkFlightsId(value) {  //  Comprobar si el id escrito en el prompt existe 
    for (let i = 0; i < flights.length; i++) {
        if (value === flights[i].id) {
            return true;
        }
    }
}

function compareFlights() {    //   Función raiz para comparar vuelos

    let confirmCompare = confirm("USUARIO: ¿Quieres comparar los vuelos por precios?");

    if (confirmCompare === true) {
        
        let canCompare = false;

        let price = "";
        let compareOption = "";

        do {
            do{
                price = prompt("Indica el precio a comparar:", "200");
  
                price = transformbyTrim(price);
                canCompare = confirmPrice(price);

            } while (canCompare === false);

            canCompare === false;
        
            do {
                compareOption = prompt(`Elige la opción que prefieras:\n \n1: Vuelos con el precio mayor a ${price}€\n2: Vuelos con el precio igual a ${price}€\n3: Vuelos con el precio menor a ${price}€`, "1");

                compareOption = transformbyTrim(compareOption);
                canCompare = confirmCompareOption(compareOption);

            } while (canCompare === false);

            if (canCompare === true) {
             showFlightsByPrice(compareOption, price);
            }
        } while (confirm("¿Continuar comparando vuelos?"));        
    }

    alert("Gracias por su compra, vuelva pronto.");
}

function confirmPrice(price) {    //  Comprobar que el valor prompt de "precio" sea un número

    let canCompare = true;

    let filterPriceByNumbers = convertStringtoNumbers(price);
    let priceLikeNumber = Number.parseFloat(price);
    let priceLikeNaN = Number.isNaN(priceLikeNumber);
   
    if (price === "" || price === null) {  
        alert("Debes indicar el precio a comparar.");
        canCompare = false;
    } else if (priceLikeNaN === true) {
        alert(`"${price}" no es un precio válido.`);
        canCompare = false;
    } else if (filterPriceByNumbers !== price) {
        alert(`"${price}" no es un precio válido.`);
        canCompare = false;
    }
    return canCompare;
}

function confirmCompareOption(compareOption) {    //  Comprobar que el valor prompt de "comparacion" sea válido

    let canCompare = true;

    if (compareOption === "1" || compareOption === "2" || compareOption === "3") {
    }
    else if (compareOption === "" || compareOption === null) {
        alert('El campo "comparar" no puede estar vacío.');
        canCompare = false;
    } else {
        alert(`"${compareOption}" no es una opción válida.\nDebes indicar la opción que prefieras para comparar:\n\n1: Para vuelos con el precio mayor que...\n2: Para vuelos con el mismo precio que...\n3: Para vuelos con el precio menor que...`)
        canCompare = false;
    }
    return canCompare;
}

function showFlightsByPrice(compareOption, price) {   //  Mostrar la comparativa de vuelos/precio 

    price = Number.parseFloat(price);

    if (compareOption === "1") { compareOption = "mayor"; }
    if (compareOption === "2") { compareOption = "igual"; }
    if (compareOption === "3") { compareOption = "menor"; }

    let priceList = [];   //  Lista de los vuelos que coincidan con la comparacion de precios seleccionada por el usuario

    if (compareOption === "mayor") {        // Buscar los vuelos con el precio mayor al indicado en el prompt
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].cost > price) {
                priceList.push({ cost: flights[i].cost, id: flights[i].id });      // Guardar los precios mas grandes al deseado con su ID de vuelo correspondiente                 
            }
        }
        sortPriceList(priceList);                  //Ordenar precios de menor a mayor
        showPriceList(compareOption, price, priceList);   //   Mostrar lista de precios comparados por prompt
    }

    if (compareOption === "igual") {      // Buscar los vuelos con el precio igual al indicado en el prompt
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].cost === price) {
                priceList.push({ cost: flights[i].cost, id: flights[i].id });      // Guardar los precios igual al deseado con su ID de vuelo correspondiente                 
            } console.log(priceList)
        } 
        showPriceList(compareOption, price, priceList);
    }

    if (compareOption === "menor") {      // Buscar los vuelos con el precio menor al indicado en el prompt
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].cost < price) {
                priceList.push({ cost: flights[i].cost, id: flights[i].id });      // Guardar los precios mas pequeños al deseado con su ID de vuelo correspondiente                 
            }
        }
        sortPriceList(priceList); 
        showPriceList(compareOption, price, priceList);
    }
    
}

function sortPriceList(value) {  // Ordenar "PriceList" por precios de menor a mayor 
    value.sort(function (a, b) {
        if (a.cost > b.cost) {
            return 1;
        }
        if (a.cost < b.cost) {
            return -1;
        }
        return 0;
    });
}

function showPriceList(compareOption, price, priceList) { // Cotejar coincidencias de "id" entre "PriceList" y "la lista de vuelos (flights)", y mostrar al usuario el resultado con toda la información de los vuelos
    if (priceList.length > 0) {

        let priceListString = `Los vuelos con el precio ${compareOption} a ${price}€ son:\n`;   //  El string con la lista de los resultados de la comparacion

        for (let i = 0; i < priceList.length; i++) {
            for (let j = 0; j < flights.length; j++) {
                if (priceList[i].id === flights[j].id) {
                    priceListString += `ID "${flights[j].id}": ${flights[j].cost}€: Vuelo a ${flights[j].to} desde ${flights[j].from}: ${transformScaleValueToString2(flights[j].scale)}.\n`;
                }
            }
        }
        alert(priceListString);    //  Mostrar lista el usuario
        priceList = [];              // Resetear array para proximas peticiones
    } else { alert(`No existen vuelos con un precio ${compareOption} a ${price}€!`); }
}

function transformScaleValueToString2(value) {  // Para indicar al usuario de forma amigable si los vuelos tienen escala 
    if (value === true) {
        return "Con escalas";
    } else if (value === false) {
        return "Sin escalas";
    }
}






