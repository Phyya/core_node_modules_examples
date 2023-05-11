/*
Name : Zlib module
Description: The zlib module in Node.js provides compression and decompression functionality through the use of the Zlib library. It provides functions for compressing and decompressing data using the deflate and gzip compression algorithms. It can be used to compress and decompress data, such as files, buffers, and streams. The module includes functions for compressing and decompressing data using the zlib, deflate, and gzip algorithms. It can be used to compress and decompress files, buffers, and streams. The zlib module is often used in conjunction with the http and https modules to enable gzip compression on HTTP responses.


*/

const zlib = require('zlib');

const input = 'hello world';
zlib.gzip(input, (err, buffer) => {
	if (!err) {
		console.log(buffer.toString('base64'));
	}
});
