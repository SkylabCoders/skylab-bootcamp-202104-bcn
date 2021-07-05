const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'modified'), (error) => {
    if(error){
        return console.log(error);
    }
    console.log('Directory created successfully!');
})