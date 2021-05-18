number = 3425;


// function digital_root(n) {
//     // ...
//     let numbersToString = n.toString().split('');
//     let suma = 0;
//     do{
//         for (let i = 0 ; i< numbersToString.length ; i++){
//             numbersToString[i] = parseInt(numbersToString[i])
//             suma += numbersToString[i]
//         }
//         numbersToString.push(suma);
//     }while(suma >= 10);

//     console.log(suma);
// }


// function digital_root(n) {
//     numbersToString = n.toString().split('').reduce((r, n) =>{ 
//         return r + parseInt(n) }, 0);

//     if(numbersToString>9){
//         digital_root(numbersToString);
//     }
//     return (numbersToString);
// }

function digital_root(n) {
    return console.log ((n - 1) % 9 + 1);
  }
digital_root(number);