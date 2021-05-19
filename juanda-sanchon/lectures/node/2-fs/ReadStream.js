let copyText = require ('fs').createReadStream('./carpeta1/test1.txt')
let pasteText = require('fs').createWriteStream('./carpeta2/test2.txt')

// copyText.on('data',function(data){
//     console.log(data.toString());
// })

copyText.pipe(pasteText)
