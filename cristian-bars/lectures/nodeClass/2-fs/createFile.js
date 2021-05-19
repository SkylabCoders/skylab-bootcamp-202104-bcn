const fs = require('fs');
const path = '/Users/Cristian/Desktop/Skylab/skylab-bootcamp-202104-bcn/cristian-bars/lectures/nodeClass/2-fs/carpeta_1/test.txt'
const content = 'Contenido para copiar a otra carpeta i ver el resultado'
const path2 = '/Users/Cristian/Desktop/Skylab/skylab-bootcamp-202104-bcn/cristian-bars/lectures/nodeClass/2-fs/carpeta_2/test.txt'
const content2 = ''

fs.writeFile(path,content, err => {
    if(err){
        console.error(err)
    }
    
    console.log('OK');
})

fs.writeFile(path2,content2, err => {
    if(err){
        console.error(err)
    }
    
    console.log('OK');
})