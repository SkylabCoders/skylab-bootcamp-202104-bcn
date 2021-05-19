const fs = require('fs');
const path = '/Users/Marina/Desktop/skylab/skylab-bootcamp-202104-bcn/juanda-sanchon/lectures/node/2-fs/carpeta1/test1.txt'
const path2 = '/Users/Marina/Desktop/skylab/skylab-bootcamp-202104-bcn/juanda-sanchon/lectures/node/2-fs/carpeta2/test2.txt'

const content = 'skylab mola'
const content2 = ''


fs.writeFile(path,content, err => {
    if(err){
        console.error(err)
    }
    console.log('Ok')
});
fs.writeFile(path2, content2, err => {
    if(err){
        console.error(err)
    }
    console.log('Ok')
})
