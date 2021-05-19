const fs = require('fs');
const path ='/Desarrollo/skylab-bootcamp-202104-bcn/Pablo-Garcia/lectures/node-class-gerard/text.txt'
const content = 'Skylab Mola!';

fs.writeFile(path, content, err => {
  if(err){
    console.log(err);
  }
  console.log('OK');
})
/*
fs.mkdir(path.join(__dirname, 'nodeFolder'), (err)=>{
  if(err){
    return console.error(err);
  }
  console.log('Directory created succesfully!');
})
*/
