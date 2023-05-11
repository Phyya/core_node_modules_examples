const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

readFile('output.txt', 'utf8')
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	});
