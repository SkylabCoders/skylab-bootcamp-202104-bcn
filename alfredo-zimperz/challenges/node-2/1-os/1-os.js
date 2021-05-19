const os = require('os')

console.log('Os platform: ', os.platform())
console.log('CPUs: ', os.cpus().length)
console.log('Path: ', os.homedir())
console.log('Network: ', os.networkInterfaces())