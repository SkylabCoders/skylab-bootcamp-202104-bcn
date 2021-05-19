//Espera que se reciba información. Mandamos info, la trata y nos la manda escrita
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null) {
        process.stdout.write(chunk);
    }
});