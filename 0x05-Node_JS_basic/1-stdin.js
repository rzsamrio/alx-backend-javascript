process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (name) => {
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
