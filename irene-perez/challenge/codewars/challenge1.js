function print (counter) {
    setTimeout(() => { 
        console.log(`Hello Word ${counter}`); 
        print(counter + 1);
    }, counter*1000)
}

print(1);
