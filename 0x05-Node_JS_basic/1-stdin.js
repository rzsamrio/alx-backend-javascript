const readline = require('readline');

const prompt1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt1.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  if (process.stdin.isTTY) {
    process.exit();
  } else {
    prompt1.close();
  }
});

prompt1.on('close', () => {
  console.log('This important software is now closing');
  process.exit();
});
