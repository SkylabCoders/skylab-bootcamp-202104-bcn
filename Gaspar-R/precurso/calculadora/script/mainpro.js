
//CALCULATOR PRO

//1. Función que realiza operaciones al pasarle dos parametros numéricos.
//2. Si se le pasa solo un parametro, se realizará la raiz cuadrada de este.
//3. Si no se le pasan números correctamente, se le notificará al usuario.


	function calculadorapro (){  
	
		let numberList = [];

		let num1 = prompt('Ingresar el primer número.');
		
			while	(isNaN(num1) || num1===null || num1===""){  //comprueba que se ingrese un numero, si se cancela o se acepta, se vuelve a solicitar el numero.
				 alert("Escribir correctamente un número.");
				 num1 = prompt('Ingresar el primer número.');
			}
				numberList.push(num1);
			
		
		let num2= prompt('Ingresar el segundo número o cancelar.');
			while (isNaN(num2))
			{
			 alert("Escribir correctamente un número.");
			 num2 = prompt('Ingresar el segundo número o cancelar.');
			}
			
			if (num2===null){   	//si se le pasa un solo numero realiza la raiz cuadrada.
				console.log ( "La raiz cuadrada de "+num1+" es: "+(Math.sqrt(num1)).toFixed(3) );
			} else {
			numberList.push(num2);
			}
		
		if (numberList.length===2){	//si se le pasa dos numeros realiza operaciones.
			num1=parseFloat(num1);
			num2=parseFloat(num2);
									
			let sum = num1+num2;
			let rest = num1-num2;
			let mult = num1*num2;
			let div = num1/num2; 

					
			let results = [];
			results.push (sum.toFixed(3));
			results.push (rest.toFixed(3));
			results.push (mult.toFixed(3));
			results.push (div.toFixed(3));

			console.log(results)
			document.write ( "La suma es: "+results[0]+"."+ "</br>" 
							+"La resta es: "+results[1]+"."+ "</br>"
							+"La multiplicación es: "+results[2]+"."+ "</br>"
							+"La división es: "+results[3]+".");
						}
			let reset = prompt("Desea realizar otro calculo? Y/N")

			if(reset==="Y"){
				
				calculadorapro()
<<<<<<< HEAD
			}else{return alert("Adios!")}
=======
			}else{return alert("Adios!")};
>>>>>>> d7d9b14e294306fd1df0f8bd43cba75418616a22
	}
	

