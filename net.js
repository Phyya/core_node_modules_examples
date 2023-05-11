const net = require('net');

const server = net.createServer((socket) => {
	socket.write('Hello!\r\n');
	socket.end();
});

server.listen(3000, () => {
	console.log('Server listening on port 3000');
});
