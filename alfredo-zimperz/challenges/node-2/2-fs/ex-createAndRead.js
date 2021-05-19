const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'test-copy'), (err) => {
    if(err) {
        return console.error(err)
    }
    console.log('Directory created')
    
})

fs.readFile('./test/text.txt', (err,data) => {
    if(err) {
        return console.error(err)
    }
    console.log(data)
    fs.writeFileSync(('./test-copy/test-copy.txt'), data, err => {
        if(err) {
            console.error(err)
        }
    
        console.log('ok')
    })
})

