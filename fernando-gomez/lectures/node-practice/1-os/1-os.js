const os = require('os');

console.log('Os platform', os.platform());

console.log('Os cpus', os.cpus());

console.log('Os cpus number', os.cpus().length);

console.log('Path', os.homedir());

console.log('Network INT', os.networkInterfaces());