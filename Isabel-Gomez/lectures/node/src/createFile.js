const fs = require('fs');
const path = '/Users/isabelgomez/SkylabBootcamp/skylab-bootcamp-202104-bcn/Isabel-Gomez/lectures/node/src/test3/test3.txt';
const content = 'Nil mola!';

fs.writeFile(path, content, err => {
    if(err) {
        console.error(err)
    }
    console.log('ok!')
})