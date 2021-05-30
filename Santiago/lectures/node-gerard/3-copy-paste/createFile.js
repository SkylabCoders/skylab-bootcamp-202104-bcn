const fs = require('fs');
const path = "C:/Users/USUARI/Documents/Skylab/skylab-bootcamp-202104-bcn/Santiago/lectures/node-gerard/3-copy-paste/original/file.txt";
const content = 'Comprar pan rústico'

fs.writeFile(path, content, err => {
    if(err){
        console.error(err);
    }
    console.log("OK")
})