const fs = require('fs');
const path = 'C:/Users/USUARI/Documents/Skylab/skylab-bootcamp-202104-bcn/Santiago/lectures/node-gerard/2-file-system/test/test.txt';
const content = 'Skylab mola!'

fs.writeFile(path, content, err => {
    if(err){
        console.error(err);
    }
    console.log("OK")
})