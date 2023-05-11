/*
Name : HTTPS module
Description: The https module is similar to the http module but it provides an interface for making secure HTTPS requests. It allows you to create HTTPS servers and clients, which communicate over the SSL/TLS protocol.

*/

const https = require('https');

https
	.get('https://jsonplaceholder.typicode.com/posts', (res) => {
		let data = '';
		res.on('data', (chunk) => {
			data += chunk;
		});
		res.on('end', () => {
			console.log(JSON.parse(data));
		});
	})
	.on('error', (err) => {
		console.error(err);
	});
