const fs = require('fs');
const path = '/Users/davidvazquez/Documents/GitHub/skylab.repository/skylab-bootcamp-202104-bcn/david-vazquez/lectures/node-js/node/2-fs/test/test.txt';
const path1 = '/Users/davidvazquez/Documents/GitHub/skylab.repository/skylab-bootcamp-202104-bcn/david-vazquez/lectures/node-js/node/2-fs/assets/assets.txt';
const path2 = '/Users/davidvazquez/Documents/GitHub/skylab.repository/skylab-bootcamp-202104-bcn/david-vazquez/lectures/node-js/node/2-fs/src/src.txt';

const content = 'Skylab mola!!'
const content1 = 'Awesome!'
const content2 = 'Im not OKAY!!'


fs.writeFile(path, content, err => {
    if(err){
        console.error(err);
    }
    console.log('OK')
})

fs.writeFile(path1, content1, err => {
    if(err){
        console.error(err);
    }
    console.log('OK')
})

fs.writeFile(path2, content2, err => {
    if(err){
        console.error(err);
    }
    console.log('OK')
})
