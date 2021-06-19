function print(seconds, times) {
    let counter = 1;
    while (counter <= times) {
        setTimeout((multiplier) => { 
            console.log(`Hello after ${seconds * multiplier} seconds`); 
        }, seconds * counter * 1000, counter);
        counter += 1;
    }
}
  
function printHello(times) {
    let counter = 0;
    const interval = setInterval(() => {
        console.log('Hello World');
        counter += 1;
        if (counter === times) {
            clearInterval(interval);
            console.log('Done');
        }
    }, 1000);
}

printHello(5)