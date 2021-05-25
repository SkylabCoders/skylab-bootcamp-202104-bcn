const fs = require('fs');
const pathReadFile = 'C:/Users/USUARI/Documents/Skylab/skylab-bootcamp-202104-bcn/Santiago/lectures/node-gerard/4-copy-paste-sync/example/test.txt';
const pathCopy = 'C:/SKYLAB/skylab-bootcamp-202104-bcn/hosni-marco/lecture/node/2-fs/test2/newTextFileCopy.txt'
const path = require('path');

fs.mkdir(path.join(__dirname, 'test2'), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Directory created succefully');
});
const readStream = fs.readFileSync(pathReadFile, {encoding:'utf8', flag:'r'});
const writeStream = fs.writeFileSync(pathCopy, readStream);
