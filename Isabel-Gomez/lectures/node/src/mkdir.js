const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test2'), (err) => {
    if(err) {
        return console.error(err)
    }
    console.log("Directory create successfully!")
})
fs.mkdir(path.join(__dirname, 'test3'), (err) => {
    if(err) {
        return console.error(err)
    }
    console.log("Directory create successfully!")
})