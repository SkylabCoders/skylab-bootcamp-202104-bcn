const fs = require('fs')


function cp(from, to) {
  if (!from) throw Error('no origin path specified')
  if (!to) throw Error('no destiny path specified')

  if (!fs.existsSync(from)) throw Error('origin path does not exist')
  if (fs.existsSync(to)) throw Error('destiny path already exists')

  console.log(process.memoryUsage())

  fs.readFile(from, function (err, data) {
    if (err) throw err

    fs.writeFile(to, data, function (err) {
      if (err) throw err

      console.log(process.memoryUsage())
    })
  })
}

module.exports = cp;
