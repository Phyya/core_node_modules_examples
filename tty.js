/*
Name : TTY module
Description: The tty module in Node.js provides classes and functions to work with terminal devices. It provides a way to interact with the process's standard input and output streams in a more granular way than simply reading and writing text. The tty module provides access to low-level TTY (teletypewriter) interfaces in Unix-like operating systems, allowing programs to manipulate console settings such as colors, fonts, and cursor positions.

*/

const tty = require('tty');

if (tty.isatty(process.stdout.fd)) {
	console.log('This process is connected to a terminal');
} else {
	console.log('This process is not connected to a terminal');
}
