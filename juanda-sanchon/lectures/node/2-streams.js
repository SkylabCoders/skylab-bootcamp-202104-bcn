process.stdin.on('readable', () => { //estos strings apuntan a un metodo. Buscarlos
    const chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write(chunk);
    }
}) 