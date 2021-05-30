const os = require('os');

console.log('OS Platform', os.platform());

console.log('OS CPU', os.cpus().length);
console.log('PATH', os.homedir());
console.log('Network INT', os.networkInterfaces());