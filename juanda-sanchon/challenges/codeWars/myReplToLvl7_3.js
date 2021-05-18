let numero = 8109;

function descendingOrder(n){
    //...
    let numeroDescendente = n.toString().split('').sort(function(a,b){
        return b-a;
    });
    numeroDescendente=parseInt(numeroDescendente.join(''));
    return console.log(numeroDescendente);
}

descendingOrder(numero);