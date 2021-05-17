/*Challenge 2:
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
   - Use only ONE if statement*/

const challengeTwo = (counter, delay) => {
  setTimeout(() => {
    console.log(`Hello World ${counter}`);
    challengeTwo(counter += 1);
  }, counter * 1000, 11000)
}
challengeTwo(1);