/*
Name : Net module
Description: The net module provides an asynchronous network API for creating server and client sockets. It allows you to create TCP servers and clients, which can be used to establish network connections and exchange data over those connections.

*/

const net = require('net');

const server = net.createServer((socket) => {
	socket.write('Hello!\r\n');
	socket.end();
});

server.listen(3000, () => {
	console.log('Server listening on port 3000');
});
