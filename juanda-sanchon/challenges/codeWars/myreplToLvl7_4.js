// function squareDigits(num){
//     //may the code be with you
//     let numero = num.toString().split('');
//     for (let i = 0 ; i < numero.length ; i++){
//         numero[i] = numero[i]*numero[i];
//     }
//     return parseInt(numero.join(''));

// }
function squareDigits(num){
    return console.log(Number(('' + num).split('').map(function (val) { return val * val;}).join('')));
    
  }

squareDigits(921);