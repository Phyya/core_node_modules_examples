/*
Name : Domain module
Description: The domain module in Node.js provides a way to handle uncaught exceptions in a Node.js application by encapsulating the execution of code within a domain. A domain is a context that allows you to catch errors that occur in asynchronous code, such as callbacks or event handlers, and handle them appropriately.

*/

const domain = require('domain');

const server = require('http').createServer((req, res) => {
	const d = domain.create();
	d.on('error', (err) => {
		console.error(`Error caught by domain: ${err}`);
		res.statusCode = 500;
		res.end(`Error caught by domain: ${err}`);
	});
	d.run(() => {
		// Code that may throw an uncaught exception
	});
});

server.listen(3000);
