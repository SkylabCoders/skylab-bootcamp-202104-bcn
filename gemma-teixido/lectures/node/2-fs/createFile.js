const fs = require('fs');
const path1 = 'test/test.txt'
const content1 = 'Skylab mola!!'

const path3 = 'bcnBootcamps/skylab.txt'
const content3 = 'Skylab mola más!!'

const path = require('path');


fs.writeFileSync(path1, content1, err => {
    if (err) {
        console.error(err);
    }
    console.log("OK");
})

fs.mkdirSync(path.join(__dirname, 'bcnBootcamps'), (err) => {
    if(err) {
        return console.error(err)
    }
    console.log('Directory created succesfully!')
})

fs.writeFileSync(path3, content3, err => {
    if (err) {
        console.error(err);
    }
    console.log("OK");
})

const value = fs.readFileSync("C:\\Users\\gemma\\Documents\\skylab-bootcamp-202104-bcn\\gemma-teixido\\lectures\\node\\2-fs\\bcnBootcamps\\skylab.txt")
fs.writeFileSync("C:\\Users\\gemma\\Documents\\skylab-bootcamp-202104-bcn\\gemma-teixido\\lectures\\node\\2-fs\\bcnBootcamps\\ironHack.txt", value);

