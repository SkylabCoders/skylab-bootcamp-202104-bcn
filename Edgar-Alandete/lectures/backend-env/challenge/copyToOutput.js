let fs = require('fs');
const path = '/Users/anna/Desktop/GitHub Repos/skylab-bootcamp-202104-bcn/anna-sala/lectures/backend-env/challenge';
const folders = ['fileWithText','emptyFile'];
  
const origin = fs.createReadStream(`${path}/${folders[0]}/input.txt`,  {flags: 'r'});
const destination = fs.createWriteStream(`${path}/${folders[1]}/output.txt`, {flags: 'w+'}); 
origin.pipe(destination);
console.log('File copied successfully');
