const fs = require('fs');
const path = '/Users/shd8/yummy/skylab-bootcamp-202104-bcn/fernando-gomez/lectures/node-practice/2-fs/test/test.txt';
const content = 'Skylab mola !';

fs.writeFile(path, content, err => {
    if(err){
        console.error(err);
    }

    console.log('WORKED !');
});



