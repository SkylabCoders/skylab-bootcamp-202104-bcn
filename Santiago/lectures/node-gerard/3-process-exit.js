setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
    console.log('EXIT');
})

console.log('HELLO');
