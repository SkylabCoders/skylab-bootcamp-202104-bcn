const fs = require(`fs`);
const path = require('path');

fs.mkdir(path.join(__dirname, 'carpeta_1'), (err) => {
    if(err){
        return console.error(err);
    }
    console.log('Directory created successfully')
})

fs.mkdir(path.join(__dirname, 'carpeta_2'), (err) => {
    if(err){
        return console.error(err);
    }
    console.log('Directory created successfully')
})