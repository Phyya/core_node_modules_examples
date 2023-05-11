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
