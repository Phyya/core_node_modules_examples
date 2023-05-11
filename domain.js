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
