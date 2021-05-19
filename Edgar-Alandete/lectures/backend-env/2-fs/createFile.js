const fs = require('fs');
const path = '/Users/anna/Desktop/GitHub Repos/skylab-bootcamp-202104-bcn/anna-sala/lectures/backend-env/2-fs/test/text.txt';

const content = 'Skylab Mola Molt!!'

fs.writeFile(path, content, error =>{
    if (error){
        return console.error(error);
    }
    console.log('File created successfully');
})