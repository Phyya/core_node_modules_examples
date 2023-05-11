/*
Name : Readline module
Description: The readline module in Node.js provides an interface for reading input from a readable stream (such as process.stdin) one line at a time.

*/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('error', (err) => {
	console.error(`Error: ${err}`);
});

rl.question('What is your name? ', (answer) => {
	console.log(`Hello, ${answer}!`);
	rl.close();
});
