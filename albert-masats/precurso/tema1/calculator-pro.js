function calculatorPro() { 
    let numberList = [];
    let newNumber = null;
    let acc = 0;
    const outputResults = [];

    do{

        newNumber = prompt('Please enter number or press cancel to stop');
        numberList.push(Number(newNumber));    //Convierto los strings a valores numericos al mismo tiempo que los pusheo a numberList.

    }while(newNumber !== null);
    
    if (!isFinite(newNumber)) {  
        alert('Introduce numbers only');

    }else if (newNumber === undefined) {
        alert('Introduce numbers only');

    }else if (newNumber === null) {
        alert("Stopped by user");
    }

    numberList.pop();    //Para quitar el null final del Array que generamos al darle a Cancelar al prompt.

    numberList = numberList.filter( value => !isNaN(value));    //Filtra los NaN.
    numberList = numberList.filter( value => value !== undefined);    //Filtra los undefined.

    if (!isFinite(numberList[1])) {    //Hacemos la raíz cuadrada cuando solo hay un numero en todo el Array.
        function squareRoot() {
           
            const squareRoot = Math.sqrt(numberList[0]);
            outputResults.push(squareRoot.toFixed(3));
            console.log(`Ouptut results = [square root = ${outputResults}]`);
        }
        squareRoot();

    }else{
        function sum(numberList) {    //Si hay más de un dato en el array pasa por las funciones de suma, resta, mult, div.

            if (numberList instanceof Array) {
                for (let i=0; i< numberList.length; i++) {
                    acc += numberList[i];     
                }

                if (Number.isInteger(acc)) {   //Separo los Integer de los Float para aplicar decimales a 3 en caso de que sea Float.
                    outputResults.push(`sum = ${acc}`);
                }else{
                    outputResults.push(`sum = ${acc.toFixed(3)}`);
                }
                return;
            }
        }    

        function subs(numberList) {    //En el caso de la resta hago que conserve el primer valor y le reste los valores siguientes.
            acc=numberList[0];

            if (numberList instanceof Array) {
                for (let i=1; i< numberList.length; i++) {
                    acc -= numberList[i];     
                }

                if (Number.isInteger(acc)) {
                    outputResults.push(` subs = ${acc}`);
                }else{
                    outputResults.push(` subs = ${acc.toFixed(3)}`);
                }
                return;
            }
        }    

        function mult(numberList) {    //En el caso de la multiplicación el acumulador es 1 para que no multiplique por 0.
            acc=1;

            if (numberList instanceof Array) {
                for (let i =0; i< numberList.length; i++) {
                    acc *= numberList[i];     
                }

                if (Number.isInteger(acc)) {
                    outputResults.push(` mult = ${acc}`);

                }else{
                    outputResults.push(` mult = ${acc.toFixed(3)}`);
                }
                return;
            }
        }    

        function div(numberList) {    //En el vaso de la división el procedimiento es el mismo que la resta, pero dividiendo.
            acc=numberList[0];

            if (numberList instanceof Array) {
                for (let i =1; i< numberList.length; i++) {
                    acc /= numberList[i];     
                }

                if (Number.isInteger(acc)) {
                    outputResults.push(` div = ${acc}`);

                }else{
                    outputResults.push(` div = ${acc.toFixed(3)}`);
                }
                return;
            }
        }   

        sum(numberList);    //Ejecución de las funciones.

        subs(numberList);

        mult(numberList);
        
        div(numberList);

        console.log(`Ouptut results = [${outputResults}]`);    //Contenedor general de todos los resultados que han sido pusheados aqui.
    }
    
    function yesOrNo() {    //Función para repetir o no la calculadora, con numeros nuevos.

        let newNumbers = prompt("New numbers? y/n");

        switch(newNumbers) {
            case "y":
                calculatorPro();
                break;

            case "n":
                alert("Bye!");
                return;

            default:
                alert("Just press 'y' or 'n'");
                yesOrNo();
                break;
        }
    }
    yesOrNo();
}