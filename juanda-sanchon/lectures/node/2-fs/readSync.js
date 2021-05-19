// const fs = require('fs');
// const pathFile1 = './carpeta1/test1.txt'
// const pathFile2 = './carpeta2/test2.txt'

// const data = fs.readFileSync(pathFile1,
//     {encoding:'utf8',flag:'r'});
// fs.writeFileSync(pathFile2,data)

const readLine = require ('readline-sync');
const fs = require('fs'); 

let path = readLine.question("Introduce origen: ");
console.log ("Ruta introducida: " + path);

const data = fs.readFileSync(path,{encoding:'utf8',flag:'r'});

let path2 = readLine.question('Introduce destino: ');
console.log ("Ruta introducida: " + path2);

fs.writeFileSync(path2,data);