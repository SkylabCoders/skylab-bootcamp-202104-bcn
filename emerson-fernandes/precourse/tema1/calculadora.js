function calculadora(valor1, valor2) {
    if (!valor2) {
        let raiz = (Math.sqrt(valor1)).toFixed(3);
        console.log(`La raiz cuadrada de ${valor1} es ${raiz}`);
    } else if (isNaN(valor1)) {
        console.log('No es un numero valido');
    } else if (isNaN(valor2)) {
        console.log('No es un numero valido');
    } else {
        let suma = (valor1 + valor2).toFixed(3);
        let resta = (valor1 - valor2).toFixed(3);
        let multiplicacion = (valor1 * valor2).toFixed(3);
        let division = (valor1 / valor2).toFixed(3);
        let resultado = [suma, resta, multiplicacion, division];

        console.log(`${valor1} + ${valor2} = ${suma} \n${valor1} - ${valor2} = ${resta}\n${valor1} x ${valor2} = ${multiplicacion}\n${valor1} / ${valor2} = ${division} `);

        let conf = prompt('Nueva operacion? y/n');

        switch (conf) {
            case 'y':
                calculadora;
                break;

            case 'n':
                console.log('Adios');
                break;



        };
    };
};