let fs = require("fs");
  
// Create a readable stream
let readable = fs.createReadStream('test/test.txt');
  
// Create a writable stream
let writable = fs.createWriteStream('modified/prueba.txt');
  
// Calling pipe method
readable.pipe(writable);
  
console.log("Pillin");