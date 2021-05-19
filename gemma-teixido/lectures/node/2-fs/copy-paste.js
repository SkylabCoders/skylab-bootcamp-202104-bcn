const fs = require('fs');

const content = fs.createReadStream("C:\\Users\\gemma\\Documents\\skylab-bootcamp-202104-bcn\\gemma-teixido\\lectures\\node\\2-fs\\bcnBootcamps\\skylab.txt")

content.pipe(fs.createWriteStream("C:\\Users\\gemma\\Documents\\skylab-bootcamp-202104-bcn\\gemma-teixido\\lectures\\node\\2-fs\\bcnBootcamps\\ironHack.txt"));