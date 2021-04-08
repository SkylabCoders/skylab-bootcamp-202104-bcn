function calculadora(valor1, valor2) {
    let vl1 = prompt('Ingrese un valor');
    let vl2 = prompt('Novamente');

    valor1 = Number(vl1);
    valor2 = Number(vl2);

    let suma = (valor1 + valor2).toFixed(3);
    let resta = (valor1 - valor2).toFixed(3);
    let multiplicacion = (valor1 * valor2).toFixed(3);
    let division = (valor1 / valor2).toFixed(3);

    let resultado = [suma, resta, multiplicacion, division];

    alert(`La suma es ${suma},resta ${resta},multiplicacion ${multiplicacion} y division ${division}`);

    let conf = prompt('Nuevos numeros? y/n');

    if (conf == 'y') {
        calculadora();
    } else {
        alert('Adios!');
    };
};

calculadora();