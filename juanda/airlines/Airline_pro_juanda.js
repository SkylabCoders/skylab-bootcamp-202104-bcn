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
    
let SelectFlight = [];


function welcome (){
    let name = prompt("Introduce tu nombre de usuario:");
    console.log(`Bienvenido, ${name}`);
    
}
    
    
//bloque mostrar vuelos.
function showFlights(){
    console.log("----------------------------------");
    console.log("\nEsta es la lista de vuelos actual: \n");
    for (i= 0 ; i< flights.length; i++){
        if (flights[i].scale === true){
            console.log("Vuelo con ID: "+flights[i].id+" con salida desde: "+flights[i].from+", y destino: "+flights[i].to+
            " tiene un coste de "+flights[i].cost + " y realiza escalas");
        }else if(flights[i].scale === false){
            console.log("Vuelo con ID: "+flights[i].id+" con salida desde: "+flights[i].from+", y destino: "+flights[i].to+
            " tiene un coste de "+flights[i].cost + " y no realiza ninguna escala");
        }
    }
    console.log("----------------------------------");
}

    
//bloque coste medio de los vuelos
function middlePrice(){
    let suma = 0;
    let precioMedio = 0;

    for (i = 0; i<flights.length ; i++){
        suma += flights[i].cost;
    }
    precioMedio = parseFloat(suma / (flights.length-1));

    console.log(`El coste medio de los vuelos es de ${Math.round((precioMedio + Number.EPSILON) * 1000) / 1000 } €`);
}
    
//Bloque mostrar numero de vuelos con escala
function showScale(){
    let totalScale = 0;

    for(let i in flights){
        if(flights[i].scale === true){
            totalScale ++;
        }
    }
    console.log(`En el día de hoy, ${totalScale} vuelos salen con escala`);
}
    
//Bloque mostrar últimos 5 destinos
function showLastDestiny(){
    console.log("Los últimos 5 vuelos salen con destino:");
    for (i = (flights.length -5); i <flights.length; i++){
        console.log(flights[i].to);
    }
}

//seleccionar el usuario
function userType(){
    let checkUsuario;
    let salir = false;
    do{
        checkUsuario = prompt("Indica si eres Admin o User:");
        if((checkUsuario !=="Admin")&&(checkUsuario !=="User")){
            console.log("Has introducido mal los datos. Vuelve a intentarlo.");
        }else if(checkUsuario ==="Admin"){
            userAdmin();
            salir = true;
        }else { 
            userUser();
            salir = true;
        }
    }while(salir === false);

    console.log("Gracias, hasta pronto");
}
//opciones de administrador
function userAdmin() {
    let opcion;
    let check = false;
    let OpcionSalir = false;
    console.log("Bienvenido Administrator. \n");
    do{
        do{ //pides y chequeas la opcion
            opcion =parseInt(prompt("Pulsa(1) si deseas añadir algún vuelo, pulsa (2) si deseas eliminar algún vuelo o pulsa (3) si deseas salir del programa"));
            
            if ((opcion !== 1)&&(opcion !== 2)&&(opcion !==3)){
                console.log("Error. Introduce 1 si deseas añadir, 2 si deseas eliminar, 3 si deseas salir.");
            }else if(opcion === null){
                console.log("Error. Introduce 1 si deseas añadir, 2 si deseas eliminar, 3 si deseas salir.");
            }else{
                check = true;
            }
        }while (check=== false);

        switch(opcion){ 
            case 1:
                OpcionSalir = addFlight();
                break;
            case 2:
                OpcionSalir = deleteFlight();
                break;
            case 3: 
                OpcionSalir = true;
        }
        
    }while(OpcionSalir === false);
}
//Agregar vuelos
function addFlight(){
    debugger
    let idVuelo = 0;
    let salir;
    let primeraSalida;
    let segundaSalida = false;
    
    let newfly = {};
    let desde;
    let hacia;
    let precio;
    let escala;

    if(flights.length > 15 ){
        alert("No puedes introducir mas de 15 vuelos.");
        
    }else{
        desde = prompt("Introduce el lugar de salida del vuelo: ");
        hacia = prompt(" Introduce el lugar de destino del vuelo: ");
        do{
            salir = true;
            precio =parseInt(prompt ("Introduce el coste del billete: "));
            if((isNaN(precio))||(precio === null)){ 
                console.log("\n No has introducido un dato correcto.");
                salir = false;
            }
        }while(salir === false);
        do{
            primeraSalida = true
            escala = prompt ("Introduce si cuenta con escalas o no \"s/n\" ");
            if ((escala !== "s")&&(escala !== "n")){
                console.log("Has introduce mal el dato.");
                primeraSalida = false;
            }else if(escala === "s"){
                escala = true;
            }else if (escala === "n"){
                escala = false;
            }
        }while(primeraSalida === false);

        //En lugar de preguntar la ID, la añadimos automaticamente, pero aseguramos que no se repita.
        for(i=0; i<flights.length;i++){
            do{
                if(flights[i].id === idVuelo){
                    idVuelo ++;
                }else{
                    segundaSalida = true;
                }
            }while(segundaSalida===false);
            
            
        }
        //metemos las variables en un object random y de ahi, push al flights.
        newfly = {id:idVuelo, to:hacia, from:desde, cost:precio, scale:escala};
        flights.push(newfly);
    }
    
    showFlights();
    return comprobarSiNo();//devolvemos true o false para userAdmin()
    
}
//Borrar vuelo
function deleteFlight(){   
    debugger
    let idVuelo;
    let check ;

    showFlights();
    do{ //repetir mientras no pongas un dato correcto
        check = false;
        idVuelo = parseInt(prompt("Introduce el ID del vuelo que quieras eliminar: "));
        if((isNaN(idVuelo)===true)||(idVuelo === null)){ //si no es un numero, o es nulo
            console.log("Introduce un dato numerico.");
        }else{
            for(i=0; i<flights.length;i++){
                if(flights[i].id === idVuelo){ //comprobar que exista el id
                    flights.splice(i,1);
                    check = true;
                }
            }
        }

        if(check === false){ //en caso que el id marcado no exista...
            console.log("No has introducido un ID correcto.");
        }
        
    }while(check === false);
 
    showFlights();

    return comprobarSiNo();//devolvemos true o false para userAdmin()
    
}
//Devuelve true o false y chequea dato
function comprobarSiNo(){
    let romperWhile;
    do{
        romperWhile = true;
        salir = prompt("Desea continuar? S/N");
        
        if(salir === null){
            console.log("Error. Introduce S o N para continuar.");
            romperWhile = false;
        }else if (salir.toUpperCase() === "S"){
            return false;
        }else if(salir.toUpperCase()  === "N"){
            return true;
        }else{
            console.log("Error. Introduce S o N para continuar.");
            romperWhile = false;
        }
    }while(romperWhile === false);
}

//Opciones de usuario
function userUser(){
    debugger
    let precio;
    let opciones;
    let semaforo;
    let venta;

    console.log(`Logueado como User\n`);

    do{
        precio = parseInt(prompt("Sobre que precio desea realizar la busqueda?: ")); //solicita precio y verifica dato
        if((isNaN(precio)=== true)||(precio===null)){ 
            console.log("Has introducido un dato erroneo.");
        }
    }while(isNaN(precio)=== true);   
    
    console.log("Indica como quieres realizar la busqueda: \n");

    do{ //indica opcion para comparar
        semaforo = true;
        opciones = prompt ("\"1\" .Mayor coste - \"2\" .Mismo precio - \"3\".menor precio:");
        if((opciones === "1")||(opciones === "2")||(opciones === "3")){ 
            
            switch (opciones){
                case "1":
                    mayorCoste(precio);
                    break;
                case "2":
                    mismoCoste(precio);
                    break;
                case "3":
                    menorCoste(precio);
                    break;
            }
        
        }else{ //caso de no poner las opciones correctas...
            console.log("Dato erroneo\n");
            semaforo = false;
        }
    }while(semaforo === false);

    
    console.log("Si deseas adquirir un billete indica su ID o bien cancela la operación");
    do{//bucle para compra de billete
        semaforo = false;
        venta = prompt("Indica la ID del vuelo seleccionado o Cancela la operación");

        if(venta === null){
            console.log("Lamentamos que no hayas adquirido un vuelo. Hasta la próxima.");
            semaforo = true;
        } else {
            
            for (i=0 ; i < SelectFlight.length; i++){
                if(SelectFlight[i] === parseInt(venta)){ //comprobar id existente
                    console.log("Gracias por su compra.");
                    semaforo = true;
                }
            }
        }
        if (semaforo === false){
            console.log("No has introducido una ID correcta.");
        }

    }while(semaforo === false);

}
//busca precios mayores que valor indicado
function mayorCoste(valor){
    debugger
    let aux =[];
    let noPrecio=true;
    for ( i = 0 ; i < flights.length; i++){
        if(valor < flights[i].cost){
            console.log(`Vuelo con ID ${flights[i].id}, direccion ${flights[i].to} tiene un coste de ${flights[i].cost}`);
            noPrecio = false;
            aux.push(flights[i].id); 
            SelectFlight = aux;
        }
    }
    if(noPrecio){
        console.log("No hay ningún vuelo con mayor precio que el indicado.");
    }
}
//busca precios iguales que valor indicado
function mismoCoste(valor){
    let noPrecio=true;
    let aux =[];
    for ( i = 0 ; i < flights.length; i++){
        if(valor === flights[i].cost){
            console.log(`Vuelo con ID ${flights[i].id}, direccion ${flights[i].to} tiene un coste de ${flights[i].cost}`);
            noPrecio = false;
            aux.push(flights[i].id); 
            SelectFlight = aux;
        }
    }
    if(noPrecio){
        console.log("No hay ningún vuelo con el mismo precio que el indicado.");
    }
}
//busca precios menores que valor indicado
function menorCoste(valor){
    let noPrecio=true;
    let aux =[];
    for ( i = 0 ; i < flights.length; i++){
        if(valor > flights[i].cost){
            console.log(`Vuelo con ID ${flights[i].id}, direccion ${flights[i].to} tiene un coste de ${flights[i].cost}`);
            noPrecio = false;
            aux.push(flights[i].id); 
            SelectFlight = aux;
        }
    }
    if(noPrecio){
        console.log("No hay ningún vuelo con menor precio que el indicado.");
    }
}

//llamado a las funciones
function call(){
    welcome ();
    showFlights();
    middlePrice();
    showScale();
    showLastDestiny();
    userType();
}

call();