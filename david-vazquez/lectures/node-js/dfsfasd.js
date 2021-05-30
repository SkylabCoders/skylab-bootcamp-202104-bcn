// function digital_root(n) {
//   const numberAsArray = String(n).split("").map((n)=>{
//     return Number(n)
//   })
//   const reducer = (accumulator, currentValue) => accumulator + currentValue; 
//   const newNum = numberAsArray.reduce(reducer);
//   const newNumberAsArray = String(newNum).split("").map((newNum)=>{
//     return Number(newNum)
//   })
//   if(newNumberAsArray.length !== 1){
//     digital_root(newNum);
//   } else {
//     console.log (newNum);
//   }
// }

// digital_root(16);
// digital_root(132189);
// function removeExclamationMarks(s) {
//   const word = s.split(' ');
//   console.log(word[0].replace(/!+$/, word[1] ? ` ${word[1]}` : '' ));
// }

// removeExclamationMarks('Hello! World');
// removeExclamationMarks('Hello!');
// removeExclamationMarks('Hello!!');

// function tankvol(h, d, vt) {
//   const long = vt / (Math.PI*Math.pow((d/2),2));
//   const vLiquid = Math.PI*long*Math.pow((h/2),2);
//   console.log(vLiquid);
// }

// tankvol(40, 120, 3500);
// tankvol(5, 7, 3848);

// function printerError(s) {
//   const array = [];
//   for(let i=0; i<s.length; i++){
//     if(s[i]<="m"){
//       array.push(s[i]);
//     }
//   }
//   const wrong = s.length - array.length;
//   console.log(wrong, s.length);
// }

// printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");

// function generateHashtag (str) {
//   const upper = str.replace(/\b\w/g, l => l.toUpperCase());
//   const together = upper.replace(/\s+/g, '');
//   if(together.length === 0 || together.length >= 140 || together === '#'){
//     console.log(false);
//   } else if(together === ''){
//     console.log(false);
//   } else {
//     console.log('#' + together);
//   }
// }

// generateHashtag('#');
// generateHashtag('   ');
// generateHashtag("a".repeat(140));
// generateHashtag("code" + " ".repeat(140) + "wars");
// generateHashtag("Holaj hdsjfds dsfds     dgdfg");

// function validParentheses(parens){
// const array = [];
//   for(let i=0; i<parens.length; i++){
//        array.push(parens[i]);
//     }
//   const parenLeft = array.filter((el)=>el==="(");
//   const parenRight = array.filter((el)=>el===")");
//   console.log(parenLeft.length===parenRight.length);
// }

// validParentheses("())");
// validParentheses("(())");
// validParentheses("(((");


// var moveZeros = function (arr) {
//   const newArr = [];
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]!==0){
//       newArr.push(arr[i])
//     }
//   }
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]===0){
//       newArr.push(arr[i])
//     }
//   }
//   console.log(newArr);
// }

// moveZeros([false,1,0,1,2,0,1,3,"a"])

// function pigIt(str){
//     const words = str.split(' ');
//     const letters = [];
//     for(let i=0;i<words.length;i++){
//         for(let z=0; z<words[i].length; z++){
//             letters.push(words[i][z])
//         }
//       // words[i].splice(words[i][].length-1, 0, words[i][0]);
//     }
//     console.log(letters);
// }

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');

function rgb(r, g, b){
  console.log (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
}

rgb(0, 0, -20);
rgb(300,255,255)
rgb(173,255,47)