const fs = require('fs');
const path = '/Users/Cristian/Desktop/Skylab/skylab-bootcamp-202104-bcn/cristian-bars/lectures/nodeClass/2-fs/carpeta_1/test.txt'
const path2 = '/Users/Cristian/Desktop/Skylab/skylab-bootcamp-202104-bcn/cristian-bars/lectures/nodeClass/2-fs/carpeta_2/test.txt'
let content = '';

reader = fs.readFileSync(path, "utf8");
writer = fs.writeFileSync(path2,reader);

// reader = fs.create(path);
  
// reader.on('data', function (chunk) {
    
//     console.log(chunk.toString());
// });

// reader.pipe(fs.createWriteStream(path2))

// fs.readFile(path,'utf8', (err,data) => {
//     if(err){
//         console.log('contenido no leído');
//     }
    
//     content = data;
// });

// fs.writeFile(path2,content,err => {
//     console.log(content);
//     if(err){
//         console.error(err)
//     }
//     console.log('Contenido copiado correctamente');
// })