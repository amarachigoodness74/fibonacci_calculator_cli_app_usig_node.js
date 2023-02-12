const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const readlineInterface = readline.createInterface({ input, output });

// A simple fibonacci calculator app
const fib_series = (fib_number) => {
    if (fib_number === 0) {
      return 0;
    }
    if (fib_number === 1 || fib_number === 2) {
      return 1;
    }
    return fib_series(fib_number - 1) + fib_series(fib_number - 2);
}

console.log("Enter the Fibonacci whole number to calculate it's Fibonacci series");
readlineInterface.question(`Please enter a positive whole number: `, fib_number => {
  console.log(`The Fibonacci series upto ${fib_number} is: ${fib_series(+fib_number - 1)}`);
  readlineInterface.close();
});