// Challenge 1:
//   Print "Hello World" forever. Starting with a delay of 1 second
//   but then incrementing the delay by 1 second each time.
//   The second time will have a delay of 2 seconds
//   The third time will have a delay of 3 seconds.
//   Include the delay in the printed message
//   Hello World. 1
//   Hello World. 2
//   Hello World. 3
//   ...
//   Constraints: You can only use const (no let or var)

function doubleTimeOut(initialTime) {
    const myTimer = {
        interval: initialTime
    }

    function incrementAndShow() {    
        myTimer.interval += 1
        setTimeout( () => {
            console.log(`Hello World ${myTimer.interval}`);
            incrementAndShow();
            }, myTimer.interval * 1000
            )
    }
    incrementAndShow()
}

doubleTimeOut(0)