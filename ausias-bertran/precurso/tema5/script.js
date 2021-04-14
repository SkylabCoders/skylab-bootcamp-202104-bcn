//    ejercicio.skyLab.precurso : calculadora.HTML
//    ausias.bertran

let input = "" ;                 //  Variable para el número introducido por el usuario
let inputNumber = 0 ;            //  Valor del input para las operaciones
let total = 0 ;                  //  Total de las operaciones
let currentOperator = "" ;       //  Operación a efectuar con el siguiente input
let IsNoirSkin = true ;          //  Valor de referencia para cambiar el skin

setCalculatorButtons();

function setCalculatorButtons() {   //  Assignar funcionalidad a los botones de la calculadora

   const calculatorCursorStyle = document.querySelector( '.calculator' ).style.cursor = "default" ;   //  Misma respuesta del cursor al pasar sobre la calculadora
   
   const inputConsole = document.getElementById( "input" ) ;   //  Via de acceso para mostrar input per consola
   inputConsole.innerHTML = showInput() ;   //  Mostrar "0" de inicio en la consola

   const buttonAc = document.getElementById( "ac" ).addEventListener( "mousedown", function(){ getInput( this , 'absoluteClear' )});
   const buttonC = document.getElementById( "c" ).addEventListener( "mousedown", function(){ getInput( this , 'clear' )});

   const button0 = document.getElementById( "0" ).addEventListener( "mousedown" , function(){ getInput( this , 0 )});
   const button1 = document.getElementById( "1" ).addEventListener( "mousedown" , function(){ getInput( this , 1 )});
   const button2 = document.getElementById( "2" ).addEventListener( "mousedown" , function(){ getInput( this , 2 )});
   const button3 = document.getElementById( "3" ).addEventListener( "mousedown" , function(){ getInput( this , 3 )});
   const button4 = document.getElementById( "4" ).addEventListener( "mousedown" , function(){ getInput( this , 4 )});
   const button5 = document.getElementById( "5" ).addEventListener( "mousedown" , function(){ getInput( this , 5 )});
   const button6 = document.getElementById( "6" ).addEventListener( "mousedown" , function(){ getInput( this , 6 )});
   const button7 = document.getElementById( "7" ).addEventListener( "mousedown" , function(){ getInput( this , 7 )});
   const button8 = document.getElementById( "8" ).addEventListener( "mousedown" , function(){ getInput( this , 8 )});
   const button9 = document.getElementById( "9" ).addEventListener( "mousedown" , function(){ getInput( this , 9 )});
   const buttonComa = document.getElementById( "," ).addEventListener( "mousedown" , function(){ getInput( this , '.' )});
   
   const buttonSum = document.getElementById( "sum" ).addEventListener( "mousedown" , function(){ getResult( this , '+' )});
   const buttonRest = document.getElementById( "rest" ).addEventListener( "mousedown" , function(){ getResult( this , '-' )});
   const buttonProduct = document.getElementById( "product" ).addEventListener( "mousedown" , function(){ getResult( this , '*' )});
   const buttonDivide = document.getElementById( "divide" ).addEventListener( "mousedown" , function(){ getResult( this,'/')});
   const buttonResult = document.getElementById( "=" ).addEventListener( "mousedown" , function(){ getResult( this , '=' )});

   const buttonSkin = document.getElementById( "skin" ).addEventListener( "mousedown" , changeSkin );   

   const inputButtons = document.getElementsByClassName( "inputButton" );
   const operatorButtons = document.getElementsByClassName( "operatorButton" );

   for (let i = 0 ; i < inputButtons.length ; i++) {
      inputButtons[i].addEventListener( "mouseup" , function(){inputButtonDefaultStyle( this )});
      inputButtons[i].addEventListener( "mouseleave" , function(){inputButtonDefaultStyle( this )});
   }

   for (let i = 0 ; i < operatorButtons.length ; i++) {
      operatorButtons[i].addEventListener( "mouseup" , function(){operatorButtonDefaultStyle( this )});
      operatorButtons[i].addEventListener( "mouseleave" , function(){operatorButtonDefaultStyle( this )});
   }
}

function showInput() {      //  Mostrar número introducido al usuario
    
   if ( input === "" ) {
   
      return 0 ;
   } 

   reduceFontSize( input ) ;
  
   return input ;

}

function reduceFontSize( number , fontSize ) {

   let totalCaractersLength = number.toString().length ;

   if  (totalCaractersLength > 23 ) {     //  Maximo de caracteres permitidos
      document.getElementById( "input" ).style.fontSize = "25px" ;   
      input = "Error" ;
      currentOperator = "" ;      
      total = 0 ;
      return null ;

   } else if ( totalCaractersLength> 16 ) {
      document.getElementById( "input" ).style.fontSize = `${ 41 - totalCaractersLength }px` ;
   }
}

function inputButtonDefaultStyle( object ) {         //  Volver display de los botones de input al estilo por defecto
   
   if ( IsNoirSkin === true ) {
      object.style.backgroundColor = "rgb(48, 48, 63)" ;
      object.getElementsByTagName("p")[0].style.color = "white" ;
   }

   if ( IsNoirSkin === false ) {
      object.style.backgroundColor = "gainsboro" ;
      object.getElementsByTagName("p")[0].style.color = "black" ;
   }
}

function operatorButtonDefaultStyle( object ) {         //  volver display de los botones de operación (+,-,*,/,=) al estilo por defecto

   if ( IsNoirSkin === true ) {
      object.style.backgroundColor = "rgb(37, 37, 48)" ;
      object.getElementsByTagName("p")[0].style.color = "white" ;
   }

   if ( IsNoirSkin === false ) {
      object.style.backgroundColor = "lightslategray" ;
      object.getElementsByTagName( "p" )[0].style.color = "black" ;
   }
}

function getInput( object , value ) {   //  Crear cadena de texto del número que quiera introducir el usuario 

   inputButtonActionStyle( object );
   reduceFontSize( input ) ;

   value = checkValue( value );

   if ( value === null ) { return null; }

   input += value ;

   document.getElementById( "input" ).innerHTML = showInput() ;

}

function checkValue ( value ) {

   if ( input === "Error" || total === "Error" ) {  // Forzar reset si existe error
      value = "absoluteClear" ; 
   }

   let areThereComas = checkComas();   

   if ( value === '.' ) {

      if ( areThereComas === false && input.length === 0 ) {
         value = "0." ;

      } else if ( areThereComas === false ) {
         value = "." ;

      } else if ( areThereComas === true ) {
         value = "" ;   
      } 
   }

   if ( value === 0 ) {   //  Evitar posibles "0" al principio del input

      if ( input.length === 0 ) {
   
         value = "" ;
      }
   }

   if ( value === "absoluteClear") {   //  Resetear todas las operaciones

      value = "" ;
      input = "" ;
      inputNumber = 0 ;
      total = 0 ;
      currentOperator = "" ;
      document.getElementById("input").style.fontSize = "25px" ;   
   }
   
   if ( value === "clear" ) {      //  Corregir el último input
      
      if ( currentOperator === "" && total === 0 ) {

         value = "" ;
         input = "" ;
         document.getElementById( "input" ).style.fontSize = "25px" ;   

      } else if ( currentOperator === "" ) {

         return null ;

      } else {

         value = "" ;
         input = "" ;
         document.getElementById( "input" ).style.fontSize = "25px" ;   
      }         
   }

   return value;
   
}

function inputButtonActionStyle ( object ) {         //  Cambiar display de los botones de input mientras se pulsan

   document.getElementById( "input" ).style.fontSize = "25px" ;   
   reduceFontSize( input );


   if ( IsNoirSkin === true)  {
      object.style.backgroundColor = "white" ;
      object.getElementsByTagName("p")[0].style.color = "black" ;
   }

   if ( IsNoirSkin === false ) {
      object.style.backgroundColor = "black" ;
      object.getElementsByTagName("p")[0].style.color = "white" ;

   } 
}

function checkComas() {   //  Asegurar que no solo existe 1 coma en el input

   let totalComas = 0 ;
   
   for ( let i = 0 ; i < input.length ; i++ ) {

       if ( input[i] === "." ) {
         totalComas ++ ;
       }
   }

   if ( totalComas > 0 ) {
      return true ;
   } else if ( totalComas === 0 ) {
      return false ;
   }
}

function getResult( object , operator ) {    //  Obtener resultado de las operaciones y mostrar al usuario

   operatorButtonActionStyle( object );

   if ( input === "Error" || total === "Error") { // Forzar reset si existe error
      return null ;
   }

   if ( input === "" ) {  //  Evitar input vacio
      input = 0 ; 
   }      

   if ( total !== 0 && currentOperator === "" ) { //  Mantener el resultado de las operaciones anteriores
      input = total ;
   }     

   let newInput = parseFloat( input ) ;         //  Convertir input a número

   if ( currentOperator === "") {    //  Si no se dispone de un solo un valor numérico

      total = newInput ;
      input = "" ;

      currentOperator = operator;
      
      if ( operator === "=" ) { 
         showTotal() ; 
         inputNumber = input ; 
         currentOperator = "" ; 
      }

      return null ;                  //  Cerrar la función para esperar al segundo input

   } else if ( currentOperator !== "" ) {   //   Realizar operacion correspondiente cuando se dispone de dos valores numéricos

      inputNumber = newInput ; 

      let secondOperator = operator ;

      if ( currentOperator === "+" ) { 

         currentOperator = secondOperator ; 
         total = total + inputNumber ; 
         input = total ; 
         showTotal() ;

      } else if ( currentOperator === "-" ) {
          currentOperator = secondOperator ; 
          total = total - inputNumber ; 
          input = total ; 
          showTotal() ; 

      } else if ( currentOperator === "*" ) { 
         currentOperator = secondOperator ; 
         total = total * inputNumber ; 
         input = total ; 
         showTotal() ; 

      } else if ( currentOperator === "/" ) { 
         currentOperator = secondOperator ; 
         total = total / inputNumber ; 
         input = total ; 
         showTotal() ; 

      } else if ( operator === "=" ) {

         if ( currentOperator === "+" ) { 
            total = total + inputNumber ; 
            showTotal() ;             
         }
         if ( currentOperator === "-" ) { 
            total = total - inputNumber ; 
            showTotal() ; 
         }
         if ( currentOperator === "*" ) { 
            total = total * inputNumber ; 
            showTotal() ; 
         }
         if ( currentOperator === "/" ) { 
            total = total / inputNumber ; 
            showTotal() ; 
         }
      }
   }

   if ( operator === "=" ) {
      currentOperator = "" ; 
   }

   input = "" ; 
}

function operatorButtonActionStyle ( object ) {          //  Cambiar display de los botones de operación (+,-,*,/,=) mientras se pulsan
   
   if ( IsNoirSkin === true ) {
   object.style.backgroundColor = "white" ;
   object.getElementsByTagName( "p" )[0].style.color = "black" ;
   }

   if ( IsNoirSkin === false ) {
      object.style.backgroundColor = "black" ;
      object.getElementsByTagName( "p" )[0].style.color = "white" ;
   }
}

function showTotal() {  // Mostar resultado de la operación al usuario

   
   if ( Number.isNaN( total ) === true || total === Infinity ) {
      total = "Error" ;
      input = "" ;
      inputNumber = 0 ;
      currentOperator = "" ; 
      document.getElementById( "input" ).style.fontSize = "25px" ;   
   }

   if ( total !== "Error" ) { total = shortestDecimals( total ) ; }

   reduceFontSize( total ) ;
   
   document.getElementById( "input" ).innerHTML = total ; 

}

function shortestDecimals( number ) {

   if ( number == Math.floor( number ) ) {
       return number ;

   } else if ( number == number.toFixed( 1 ) ) {
       return number.toFixed( 1 );

   } else if ( number == number.toFixed( 2 ) ) {
       return number.toFixed( 2 ) ;

   } else {
       return number.toFixed( 3 ) ;

   }
}

function changeSkin() {    //    Cambiar Skins de la calculadora (Noir/Ligth) Noir por defecto

   if ( IsNoirSkin === true ) { IsNoirSkin = false }
   else if ( IsNoirSkin === false) { IsNoirSkin = true }

   if ( IsNoirSkin === true ) {      

      getNoirSkin() ;      
   } 

   if ( IsNoirSkin === false ) {

      getLigthSkin() ;
   }             

}

function getNoirSkin() {    //   Definir estilo de Noir

   let paragraphColor  = document.getElementsByTagName( "p" ) ;
   let inputButtonsColor = document.getElementsByClassName( "inputButton" ) ;
   let operatorButtonsColor = document.getElementsByClassName( "operatorButton" ) ;

   document.body.style.backgroundColor = "black" ;

   document.querySelector( ".calculator") .style.backgroundColor = "white" ;
   document.querySelector( ".calculator" ).style.border = "2px solid white" ;
   document.getElementById( "console" ).style.backgroundColor = "black" ;
   document.getElementById( "console" ).style.border = "1px solid white" ;

   for ( let i = 0 ; i < paragraphColor.length ; i++ ) {
      paragraphColor[i].style.color = "white" ;
   }

   for ( let i = 0 ; i < inputButtonsColor.length ; i++ ) {
      inputButtonsColor[i].style.backgroundColor = "rgb(48, 48, 63)" ;
      inputButtonsColor[i].style.border = "1px solid white" ;
   }

   for ( let i = 0 ; i < operatorButtonsColor.length ; i++) {
      operatorButtonsColor[i].style.backgroundColor = "rgb(37, 37, 48)";
      operatorButtonsColor[i].style.border = "1px solid white";
   }

   document.getElementById( "skin" ).style.backgroundColor = "rgb(37, 37, 48)" ;
   document.getElementById( "skin" ).style.border = "1px solid white" ;

}

function getLigthSkin() {    //   Definir estilo Ligth

   let paragraphColor  = document.getElementsByTagName( "p" ) ;
   let inputButtonsColor = document.getElementsByClassName( "inputButton" );
   let operatorButtonsColor = document.getElementsByClassName( "operatorButton" );
   
   document.body.style.backgroundColor = "silver" ;

   document.querySelector( ".calculator" ).style.backgroundColor = "black" ;
   document.querySelector( ".calculator" ).style.border = "2px solid black" ;
   document.getElementById( "console" ).style.backgroundColor = "white" ;
   document.getElementById( "console" ).style.border = "1px solid black" ;

   for ( let i = 0 ; i < paragraphColor.length ; i++ ) {
      paragraphColor[i].style.color = "black" ;
   }

   for ( let i = 0 ; i < inputButtonsColor.length ; i++ ) {
      inputButtonsColor[i].style.backgroundColor = "gainsboro" ;
      inputButtonsColor[i].style.border = "1px solid black" ;
   }

   for ( let i = 0 ; i < operatorButtonsColor.length ; i++ ) {
      operatorButtonsColor[i].style.backgroundColor = "lightslategray" ;
      operatorButtonsColor[i].style.border = "1px solid black" ;
   }

   document.getElementById( "skin" ).style.backgroundColor = "lightslategray" ;
   document.getElementById( "skin" ).style.border = "1px solid black" ;

} 