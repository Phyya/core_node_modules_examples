/*
Name : FS module
Description: The fs module provides an API for interacting with the file system. It allows you to perform various file-related operations such as reading from and writing to files, creating and deleting files and directories, and modifying file permissions.

*/

const fs = require('fs');

fs.writeFile('myfile.txt', 'Hello, world!', (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('File written successfully');
});
