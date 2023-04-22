const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const readlineInterface = readline.createInterface({ input, output });

// A simple fibonacci calculator app
const fib_series = (fib_number, memo = {}) => {
  if (memo[fib_number]) {
    return memo[fib_number];
  }
  if (fib_number <= 1) {
    memo[fib_number] = fib_number;
  } else {
    memo[fib_number] =
      fib_series(fib_number - 1, memo) + fib_series(fib_number - 2, memo);
  }

  return memo[fib_number];
};

console.log(
  "Enter the Fibonacci whole number to calculate it's Fibonacci series"
);
readlineInterface.question(
  `Please enter a positive whole number: `,
  (fib_number) => {
    console.log(
      `The Fibonacci series from 0 upto ${fib_number} is: ${fib_series(
        +fib_number,
        {}
      )}`
    );
    readlineInterface.close();
  }
);
