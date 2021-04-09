"use strict"

//1. Función que realiza operaciones al pasarle dos parametros numéricos.
//2. Si se le pasa solo un parametro, se realizará la raiz cuadrada de este.
//3. Si no se le pasan números correctamente, se le notificará al usuario.


	function calculadora (num1,num2){  
		//comprueba si hay 1 o 2 parametros, y si son o no números.
		if(isNaN(num1) || num2 !== undefined && isNaN(num2)){	
		   return alert("Escribir correctamente uno o dos digitos para realizar operaciones.");			 
	  
  } else{
	switch(arguments.length){			//si se le pasa un solo párametro numérico realiza raiz cuadrada.
		case 1:
			return ( "La raiz cuadrada de "+num1+" es: "+(Math.sqrt(num1)).toFixed(3) );
			 
		case 2:							//si se le pasa dos parámetro numéericos realiza operaciones.
			let sum = num1+num2;
			let rest = num1-num2;
			let mult = num1*num2;
			let div = num1/num2; 					
			let results = [];
			results.push (+sum);
			results.push (+rest);
			results.push (+mult);
			results.push (+div);
			console.log(results)
			document.write ( "La suma es: "+results[0].toFixed(3)+"."+ "</br>" 
							+"La resta es: "+results[1].toFixed(3)+"."+ "</br>"
							+"La multiplicación es: "+results[2].toFixed(3)+"."+ "</br>"
							+"La división es: "+results[3].toFixed(3)+".");
			break;			
		default:
			alert("Escribir uno o dos digitos para realizar operaciones."); 	 //si se escriben 3 o mas números devuelve un alerta.
			break;
	}}	
}




