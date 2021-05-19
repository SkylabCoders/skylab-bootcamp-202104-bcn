const fs = require('fs');
const path = require('path');
const pathFirstFile = '/Users/shd8/yummy/skylab-bootcamp-202104-bcn/fernando-gomez/lectures/node-practice/3-practice/test/firstFile.txt';
const pathSecondFile = '/Users/shd8/yummy/skylab-bootcamp-202104-bcn/fernando-gomez/lectures/node-practice/3-practice/test/secondFile.txt';

const content = 'Skylab mola !';

fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if(err) {
        return console.error(err);
    }
    console.log('Directory created succesfully');
});

fs.writeFileSync(pathFirstFile, content, err => {
    if(err){
        console.error(err);
    }
    console.log('First file created !');
});

fs.writeFileSync(pathSecondFile, '', err => {
    if(err){
        console.error(err);
    }
    console.log('Second file created !');
});

const readStream = fs.createReadStream(pathFirstFile);
const writeStream = fs.createWriteStream(pathSecondFile);
readStream.pipe(writeStream);