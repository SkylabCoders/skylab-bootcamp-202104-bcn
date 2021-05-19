const fs = require('fs');

const path = require('path');
const folders = ['emptyFile', 'fileWithText']

folders.forEach(folder => {
    fs.mkdir(path.join(__dirname, folder), (error) => {
        if (error){
            return console.error(error);
        }
        console.log(`Directory ${folder} created successfully`)
    })

})
