function askNumber (){
    debugger 
    let sum ;
    let rest;
    let divi ;
    let multi;
    let newNumber;
    let numberList = []; 
    

    //Bloque de petición de números.
    
    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        //Comprobamos dato valido
        if((isNaN(parseFloat(newNumber)) == true)&&(newNumber !== null)){
            console.log("No has introducido un dato valido"); 
        //introducimos en el array
        }else if(newNumber !== null){
            numberList.push(parseFloat(newNumber));
        }
    } while ((newNumber !== null)||(isNaN(newNumber)== true));
    
    //SI solo hay 1 dato correcto saca la raiz cuadrada
    if ((numberList.length <= 1)&&(isNaN(numberList[0])== false)){
        console.log ("La raiz cuadrada del número -> "+numberList[0]+ " es: "+Math.sqrt(numberList[0]));
    //
    }else if(isNaN(numberList[0])== false){
        sum = numberList[0];
        rest = numberList[0];
        divi = numberList[0];
        multi = numberList[0];
        for (i=1 ; i < numberList.length ; i++){
            sum += numberList[i];
            rest -= numberList[i];
            divi /= numberList[i];
            multi *= numberList[i];
        }
        //bloque de resultados
        console.log("El resultado de sumar es " + Math.round((sum + Number.EPSILON) * 1000) / 1000 ); //leí de un error en los decimales a la hora de realizar redondeos y
        console.log("El resultado de restar es " + Math.round((rest + Number.EPSILON) * 1000) / 1000 );// con 'Number.EPSILON' se solucionaba.
        console.log("El resultado de dividir es " + Math.round((divi + Number.EPSILON) * 1000) / 1000 );//property represents the difference between 1 and the smallest 
        console.log("El resultado de multiplicar es " + Math.round((multi + Number.EPSILON) * 1000) / 1000 );//floating point number greater than 1.       

    }
    
    
}

function Calculator(){
    let caso;
    let salir = false;
    askNumber();
    
    do{
        
        caso = prompt("Quieres seguir realizando calculos? 'y/n'");
        if (caso === "y"){
            askNumber();    
        }

        if ((caso !== null) || (caso !== "n")){
            salir = true;
        }
    
    }while (salir == false);
    //}while ((caso !== null) || (caso !== "n")); Este while(), no funcionaba. Siendo caso = null o "n", volvia a repetir la pregunta. while (salir == false)
}

Calculator();

