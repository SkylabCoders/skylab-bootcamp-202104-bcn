const fs =  require('fs')
const path = '/Users/fredyzz/Documents/Cursos/Skylab/skylab-bootcamp-202104-bcn/alfredo-zimperz/challenges/node-2/2-fs/test/text.txt'
const content = 'Skylab mola'

fs.writeFile(path, content, err => {
    if(err) {
        console.error(err)
    }

    console.log('ok')
})