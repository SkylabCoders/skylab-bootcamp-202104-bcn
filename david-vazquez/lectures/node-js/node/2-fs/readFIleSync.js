// Include fs module
const fs = require('fs');
   
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('/Users/davidvazquez/Documents/GitHub/skylab.repository/skylab-bootcamp-202104-bcn/david-vazquez/lectures/node-js/node/2-fs/src/src.txt',
            {encoding:'utf8', flag:'r'});


fs.writeFileSync('/Users/davidvazquez/Documents/GitHub/skylab.repository/skylab-bootcamp-202104-bcn/david-vazquez/lectures/node-js/node/2-fs/assets/assets.txt', data);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync('/Users/davidvazquez/Documents/GitHub/skylab.repository/skylab-bootcamp-202104-bcn/david-vazquez/lectures/node-js/node/2-fs/assets/assets.txt', "utf8"));
