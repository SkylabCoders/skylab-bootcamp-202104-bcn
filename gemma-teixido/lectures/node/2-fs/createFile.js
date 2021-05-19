const fs = require('fs');
const path1 = 'test/test.txt'
const content1 = 'Skylab mola!!'

const path2 = 'bcnBootcamps/ironHack.txt'
const content2 = ''

const path3 = 'bcnBootcamps/skylab.txt'
const content3 = 'Skylab mola más!!'

const path = require('path');


fs.writeFile(path1, content1, err => {
    if (err) {
        console.error(err);
    }
    console.log("OK");
})

fs.mkdir(path.join(__dirname, 'bcnBootcamps'), (err) => {
    if(err) {
        return console.error(err)
    }
    console.log('Directory created succesfully!')
})

fs.writeFile(path2,content2, err => {
    if (err) {
        console.error(err);
    }
    console.log("OK");
})

fs.writeFile(path3, content3, err => {
    if (err) {
        console.error(err);
    }
    console.log("OK");
})

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(chunk);
    }
})