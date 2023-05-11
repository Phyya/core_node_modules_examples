/*
Name : Cluster module
Description: The cluster module in Node.js allows a Node.js process to spawn child processes that share server ports. It provides an easy way to create child processes that are exact copies of the parent process, and share server ports to handle the incoming traffic efficiently by using all available CPU cores. This allows a Node.js application to scale across multiple CPU cores and utilize the available hardware resources.

*/

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	console.log(`Worker ${process.pid} started`);

	http
		.createServer((req, res) => {
			res.writeHead(200);
			res.end('hello world\n');
		})
		.listen(8000);

	console.log(`Worker ${process.pid} listening on port 8000`);
}
