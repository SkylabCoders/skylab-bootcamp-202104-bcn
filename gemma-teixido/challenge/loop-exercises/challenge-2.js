/*
  Just like Challenge 1 but this time with repeated delay values.
  Print Hello World 5 times with a delay of 100 ms.
  Then Print it again 5 more times with a delay of 200 ms.
  Then print it again 5 more times with a delay of 300 ms.
  And so on until the program is killed.
  Include the delay in the printed message:
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 200
  Hello World. 200
  Hello World. 200
  ...

  Constraints:
   - Only use setInterval (not setTimeout)
   - Use only ONE if statement
   
*/

let count = 0;
const interval = (time) =>   
thisInterval = setInterval(function(){ 
if (count === 5){
clearInterval(thisInterval);
count = 0;
interval(time += 100);
}
console.log(`Hello at ${time}`); 
count = count + 1;
}, time); 
interval(100);