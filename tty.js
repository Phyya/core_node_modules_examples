const tty = require('tty');

if (tty.isatty(process.stdout.fd)) {
	console.log('This process is connected to a terminal');
} else {
	console.log('This process is not connected to a terminal');
}
