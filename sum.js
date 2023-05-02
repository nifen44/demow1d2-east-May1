const args = process.argv.slice(2); //extracting the command line arguments

if (args.length < 2) {
  console.log("Please enter at least 2 arguments.");
  // we should stop the execution
  process.exit();
}

let total = 0;

for (let arg of args) {
  // Edge case: only enter number
  if (isNaN(convertedNum)) {
    console.log("Please enter only numbers!");
    process.exit(); // it's better than return, is clearly showing our intention (exit the program)
  }

  // Edge case: parse arguments to find out if they're whole number
  // arg % 1 == 0
  // Number.isInteger()
  const convertedNum = Number(arg);
  if (Number.isInteger(convertedNum)) {
    total += convertedNum;
  }

  console.log(`args: ${arg}`, typeof arg, `total: ${total}`);
}

console.log(`Total: ${total}`);
