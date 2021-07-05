// Node.js program to demonstrate the     
// readable.pipe() method
   
// Accessing fs module
const fs = require("fs");
  
// Create a readable stream
var readable = fs.createReadStream('/Users/davidvazquez/Documents/GitHub/skylab.repository/skylab-bootcamp-202104-bcn/david-vazquez/lectures/node-js/node/2-fs/test/test.txt');
  
// Create a writable stream
var writable = fs.createWriteStream('/Users/davidvazquez/Documents/GitHub/skylab.repository/skylab-bootcamp-202104-bcn/david-vazquez/lectures/node-js/node/2-fs/src/src.txt');
  
// Calling pipe method
readable.pipe(writable);
  
console.log("Program Ended");