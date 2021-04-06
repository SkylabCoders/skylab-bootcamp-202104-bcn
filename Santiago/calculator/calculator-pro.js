// Función que utilizamos para que el usuario introduzca los números y se hagan las validaciones
function obtenerNumeros(){

    // Variable nums con split(), para que el array contenga más de un elemento y no un solo sin utlizar split()
    const nums = prompt("Escriba los números que desea introducir:").split(',');

    // Array vacio donde se guardaran los número instroducidos por el usuario
    const result = [];

    // for que recorre nums y hace las validaciones
    for(let i = 0; i < nums.length; i++){
        if(isNaN(nums[i])){
            console.log("Solo se acceptan números");
            console.log('');
        }else if(nums[i] === ""){
            console.log('No has escrito nada');
            console.log('');
        }else if(nums.length === 1){
           console.log("La raiz cuadrada del número insertado es: " + Math.round(Math.sqrt(nums[i])*1000)/1000);
           console.log('');
        }else{
            // parseInt lo utlizamos para que los números dentro del array sea números y no strings
            result.push(parseInt(nums[i]));
        }
    }
    return result;
}

// Pasamos obtenerNumeros() dentro de calcular(), para poder realizar las operaciones y poderle pasar result a calcular() por parametro
calcular(obtenerNumeros());

// Función que hace las operaciones, ya que le pasamos por paramentro el array que contiene los números introducidos
function calcular(result){

    // Si dentro del array hay 2 o más de dos elementos que haga lo siguiente
    if(result.length >= 2){

        // Ejemplo de suma de como funciona. Tenemos: [2,3,4,12]
        // a = 2, c = 3 => 5
        // a = 5, c = 4 => 9
        // a = 9; c = 12 => 21
        // s = 21
        const s = result.reduce((accumulator, currentValue) => accumulator + currentValue);
        const r = result.reduce((accumulator, currentValue) => accumulator - currentValue);
        const m = result.reduce((accumulator, currentValue) => accumulator * currentValue);
        const d = result.reduce((accumulator, currentValue) => (Math.round(accumulator / currentValue*1000)/1000));

        console.log("La suma es: " + s);
        console.log("La resta es: " + r);
        console.log("La multiplicación es: " + m);
        console.log("La división es: " + d);
        console.log("");
    }   
    // Llamamos a la función continuar
    continuar();
}

// Función que hace que se muestre el mensaje de querer continuar
function continuar(){

    const c = confirm("¿Desea continuar?");

    // Si c es true que ejecute la primera funcion
    if(c){
       calcular(obtenerNumeros())
    }else{
        console.log('¡Adiós!')
    }

}