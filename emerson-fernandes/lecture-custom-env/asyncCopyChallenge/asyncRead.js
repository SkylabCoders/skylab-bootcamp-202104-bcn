const fs = require('fs');

const data = fs.readFileSync('./asyncCopyFile/text.txt',
            {encoding:'utf8', flag:'r'});
  

console.log(data);