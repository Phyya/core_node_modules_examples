const zlib = require('zlib');

const input = 'hello world';
zlib.gzip(input, (err, buffer) => {
	if (!err) {
		console.log(buffer.toString('base64'));
	}
});
