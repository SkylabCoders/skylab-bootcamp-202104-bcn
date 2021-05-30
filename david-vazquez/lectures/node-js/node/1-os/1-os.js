const os = require('os');

console.log('OS Platform', os.platform());

console.log('OS CPUS', os.cpus().length);

console.log('Path', os.homedir());

console.log('Network INT', os.networkInterfaces());
