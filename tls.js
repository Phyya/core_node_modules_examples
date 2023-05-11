/*
Name : TLS module
Description: The tls module in Node.js provides an implementation of the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols that can be used to secure network communication. It provides functions for creating TLS/SSL connections, configuring SSL certificates and keys, and verifying SSL certificates presented by peers.

*/

const tls = require('tls');

const options = {
	ca: ['cert'],
};

const socket = tls.connect(8000, options, () => {
	console.log('Connected to server');

	socket.on('data', (data) => {
		console.log(`Received: ${data}`);
	});

	socket.write('Hello, server!');
});
