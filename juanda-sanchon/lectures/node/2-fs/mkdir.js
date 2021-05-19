const fs  = require ('fs')
const path = require('path');

fs.mkdir(path.join(__dirname,'carpeta1'),(err)=>{
    if(err){
        return console.error(err)
    }
    console.log('Directory created -1- Ok!')
})
fs.mkdir(path.join(__dirname,'carpeta2'),(err)=>{
    if(err){
        return console.error(err)
    }
    console.log('Directory created -2- Ok!')
})