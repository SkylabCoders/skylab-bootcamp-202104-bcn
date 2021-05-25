let fs = require('fs');

// Create a readable stream
let readable = fs.createReadStream('original/file.txt');

// Create a writable stream
let writable = fs.createWriteStream('modified/modified.txt');

// Calling pipe method
readable.pipe(writable);

console.log("Program Ended");
