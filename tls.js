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
