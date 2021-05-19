const fs = require('fs')
/* const path = require('path')

fs.mkdir(path.join(__dirname,'asyncCopyFile'), (error) =>{
    if(error){
        return console.error(error)
    }
    console.log('Directory created successfully!')
})
 */

const pathFile = 'C:/Users/Emers/OneDrive/Área de Trabalho/Skylab/skylab-bootcamp-202104-bcn/emerson-fernandes/lecture-custom-env/asyncCopyChallenge/asyncCopyFile/1234.txt'
const content = 'Ola'

fs.writeFile(pathFile,content, error =>{
    if(error){
    console.error(error)
    }
    console.log('OK')
})

const data = fs.readFileSync('./asyncCopyFile/1234.txt',
            {encoding:'utf8', flag:'r'});
  

console.log(data);

