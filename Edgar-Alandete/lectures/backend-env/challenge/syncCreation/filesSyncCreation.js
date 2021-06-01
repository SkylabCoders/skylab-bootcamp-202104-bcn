let fs = require('fs');
let dir = 'syncFolder';
const path = `/Users/Edgar/Documents/SkylabBootcamp/skylab-bootcamp-202104-bcn/Edgar-Alandete/lectures/backend-env/challenge/syncCreation/`;

const content = 'Skylab Mola Molt!!'


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

if(fs.existsSync(dir)) {
    fs.writeFileSync(`${path}/test.txt`, content, error =>{
        if (error){
            return console.error(error);
        }
        console.log('File created successfully');
    })

    const origin = fs.createReadStream(`${path}/test.txt`,  {flags: 'r'});
    const destination = fs.createWriteStream(`${path}/${dir}/output.txt`, {flags: 'w+'}); 
    origin.pipe(destination);
}