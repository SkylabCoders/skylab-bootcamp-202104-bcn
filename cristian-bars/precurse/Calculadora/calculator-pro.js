let opera;

function operaciones(opera){
    let numberList = [];
    let newNumber;
    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        if (newNumber == ""){
            alert("Dejaste en blanco el primer numero");
        }else if (isNaN(newNumber)){
            alert("Entraste letras en vez de numeros");
            newNumber = "";
        }else if (newNumber !== null){
            console.log(newNumber);
            numberList.push(Number(newNumber))
        }
        console.log(numberList);
    } while(newNumber !== null)
    
    if (numberList.length == 1){
        console.log("La raíz cuadrada del numero " + numberList[0] + " es " + Math.sqrt(numberList[0]).toFixed(3));
    }else{
        sumar(numberList);
        restar(numberList);
        multiplicar(numberList);
        dividir(numberList);
        
    }
    
    let repeat = prompt("New numbers? y/n");

    switch (repeat) {
        case "n": 
            console.log("Bye!");
            break;
            
        case "y": 
            console.log("Tornem-hi!!");
            operaciones();
    } 
}

function sumar (numberList){
    opera = 0;
    for (let l = 0; l<numberList.length; l++){
        opera = opera + numberList[l];
    }
    console.log("El resultado de la suma es " + opera);
}

function restar (numberList){
    opera = numberList[0];
    for (let l = 1; l<numberList.length; l++){
        opera = opera - numberList[l];
    }
    console.log("El resultado de la resta es " + opera);
}

function multiplicar (numberList){
    opera = numberList[0];
    for (let l = 1; l<numberList.length; l++){
        opera = opera * numberList[l];
    }
    console.log("El resultado de la multiplicación es " + opera);
}

function dividir (numberList){
    opera = numberList[0];
    for (let l = 1; l<numberList.length; l++){
        opera = opera / numberList[l];
    }
    console.log("El resultado de la division es " + Math.sqrt(opera).toFixed(3));
}

operaciones(opera);



