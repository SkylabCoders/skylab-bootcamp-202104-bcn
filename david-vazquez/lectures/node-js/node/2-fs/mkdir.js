const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'), (err)=>{
    if(err){
        return console.error(err);
    }
    console.log('Directory created successfully!');
})

fs.mkdir(path.join(__dirname, 'src'), (err)=>{
    if(err){
        return console.error(err);
    }
    console.log('Directory created successfully!');
})

fs.mkdir(path.join(__dirname, 'assets'), (err)=>{
    if(err){
        return console.error(err);
    }
    console.log('Directory created successfully!');
})