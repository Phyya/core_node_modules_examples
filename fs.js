const fs = require('fs');

fs.writeFile('myfile.txt', 'Hello, world!', (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('File written successfully');
});
